export interface ContactDetails {
  address: string;
  phones: string[];
  email: string;
  emailIsPlaceholder: boolean;
  whatsapp: string;
  locationCity: string;
  postalCode: string;
}

export const contactData: ContactDetails = {
  address: "Muthalipalayam, Arasur, Coimbatore, 641 407",
  phones: ["9363012813", "9361923622"],
  email: "info@brixionbricks.com",
  emailIsPlaceholder: true,
  whatsapp: "9363012813",
  locationCity: "Coimbatore",
  postalCode: "641 407"
};
