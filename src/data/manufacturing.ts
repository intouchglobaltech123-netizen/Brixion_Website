export interface ManufacturingStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const manufacturingData = {
  title: "Manufacturing Process",
  sectionLabel: "OUR PROCESS",
  heading: "FROM MATERIAL TO BUILDING BLOCK.",
  summary:
    "Explore the general stages involved in transforming raw materials into building blocks without kiln firing.",
  disclaimer:
    "General illustrative stages based on fly ash masonry manufacturing concepts.",
  steps: [
    {
      stepNumber: "01",
      title: "Material Preparation",
      description: "Materials are prepared for the brick-making process."
    },
    {
      stepNumber: "02",
      title: "Mixing",
      description: "Fly ash, cement, sand and water are combined as part of the general material preparation process."
    },
    {
      stepNumber: "03",
      title: "Brick Forming",
      description: "The prepared mixture is formed into brick shapes."
    },
    {
      stepNumber: "04",
      title: "Curing",
      description: "The formed bricks undergo curing as part of the general manufacturing process."
    },
    {
      stepNumber: "05",
      title: "Finished Bricks",
      description: "The bricks are prepared for handling and supply."
    },
    {
      stepNumber: "06",
      title: "Supply & Delivery",
      description: "Finished products are supplied for construction requirements."
    }
  ]
};
