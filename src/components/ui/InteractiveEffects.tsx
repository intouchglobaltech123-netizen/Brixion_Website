import { useEffect } from 'react';

/**
 * InteractiveEffects — brings the dynamic cursor-following spotlight,
 * 3D card tilt, magnetic button pull, and symbol glow animations
 * inspired by geniebox.io across the entire Brixion website.
 */
export default function InteractiveEffects() {
  useEffect(() => {
    // 1. Mouse move tracker for dynamic spotlight gradients on cards and boxes
    const handleMouseMove = (e: MouseEvent) => {
      // Find any cards/boxes currently near cursor or hovered
      const cards = document.querySelectorAll<HTMLElement>(
        '.spotlight-card, [data-spotlight], .interactive-card, .trust-card, .journey-card, .product-card, .faq-card, .glass-card, .feature-card'
      );

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set local CSS variables for radial gradients
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // Check if cursor is hovering this card for 3D tilt
        const isHovered =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (isHovered && card.hasAttribute('data-tilt')) {
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -6; // max -6deg to +6deg
          const rotateY = ((x - centerX) / centerX) * 6;
          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
        }
      });
    };

    // 2. Mouse leave handler to reset 3D tilt smoothly
    const handleMouseLeave = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('[data-tilt]') as HTMLElement;
      if (target) {
        target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      }
    };

    // 3. Magnetic pull on interactive buttons (.magnet, .mag-btn, [data-magnet])
    const handleMagneticMove = (e: MouseEvent) => {
      const magnetBtns = document.querySelectorAll<HTMLElement>('.magnet-btn, [data-magnet], .btn-primary-blue, .cta-polygon-btn');
      magnetBtns.forEach((btn) => {
        const rect = btn.getBoundingClientRect();
        const isNear =
          e.clientX >= rect.left - 20 &&
          e.clientX <= rect.right + 20 &&
          e.clientY >= rect.top - 20 &&
          e.clientY <= rect.bottom + 20;

        if (isNear) {
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = (e.clientX - centerX) * 0.22;
          const deltaY = (e.clientY - centerY) * 0.28;
          btn.style.transform = `translate3d(${deltaX.toFixed(1)}px, ${deltaY.toFixed(1)}px, 0)`;
        } else if (btn.style.transform && !btn.style.transform.includes('perspective')) {
          btn.style.transform = '';
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousemove', handleMagneticMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMagneticMove);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return null;
}
