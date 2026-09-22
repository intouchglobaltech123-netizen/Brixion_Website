export interface ProductSpec {
  name: string;
  sizeInches: string;
  weightApprox: string;
  description: string;
  rawMaterials: string[];
}

export interface ComparisonRow {
  feature: string;
  flyAshBricks: string;
  normalClayBricks: string;
}

export const primaryProduct: ProductSpec = {
  name: "Fly Ash Bricks",
  sizeInches: "9 x 4.25 x 3 inches",
  weightApprox: "Approx. 3.25 kg per brick",
  description:
    "Eco-friendly building blocks made from fly ash, cement, sand, and water. Strong, durable, and produced without firing.",
  rawMaterials: ["Fly Ash", "Cement", "Sand", "Water"]
};

export const brochureComparisonMatrix: ComparisonRow[] = [
  { feature: "Strength", flyAshBricks: "High", normalClayBricks: "Moderate" },
  { feature: "Water Absorption", flyAshBricks: "Low", normalClayBricks: "High" },
  { feature: "Shape & Size", flyAshBricks: "Uniform", normalClayBricks: "Irregular" },
  { feature: "Surface Finish", flyAshBricks: "Smooth", normalClayBricks: "Rough" },
  { feature: "Eco-Friendly", flyAshBricks: "Yes", normalClayBricks: "No" },
  { feature: "Mortar Usage", flyAshBricks: "Less", normalClayBricks: "More" },
  { feature: "Durability", flyAshBricks: "High", normalClayBricks: "Moderate" }
];
