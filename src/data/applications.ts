export interface ConstructionApplication {
  title: string;
  category: string;
}

export const applicationsData: ConstructionApplication[] = [
  { title: "Residential Buildings", category: "Load-bearing & partition masonry" },
  { title: "Commercial Complexes", category: "High-rise framed infill walls" },
  { title: "Industrial Warehouses", category: "Perimeter and boundary walls" },
  { title: "Infrastructure Projects", category: "Public structural construction" }
];
