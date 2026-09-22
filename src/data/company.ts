export interface CompanyInfo {
  name: string;
  slogan: string;
  logoPath: string;
  transparentLogoPath: string;
  brochurePath: string;
  aboutText: string;
  specialities: string[];
  whyChooseUs: string[];
}

export const companyData: CompanyInfo = {
  name: "Brixion Bricks and Blocks LLP",
  slogan: "BUILD STRONG. BUILD SMART. CHOOSE BRIXION BRICKS.",
  logoPath: "/assets/brixion-logo.png",
  transparentLogoPath: "/assets/brixion-logo-transparent.png",
  brochurePath: "/assets/company-brochure.pdf",
  aboutText:
    "Fly ash bricks are eco-friendly building blocks made from fly ash, cement, sand, and water. They are strong, durable, and produced without firing, reducing environmental impact.",
  specialities: [
    "High strength & durability",
    "Eco-friendly",
    "Smooth finish",
    "Low water absorption",
    "Uniform size & shape",
    "Cost-effective",
    "No firing needed"
  ],
  whyChooseUs: [
    "Premium Quality Bricks",
    "Strong and Durable",
    "Suitable for All Construction Works",
    "Reliable Supply",
    "Timely Delivery",
    "Competitive Pricing"
  ]
};
