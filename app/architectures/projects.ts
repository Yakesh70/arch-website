export type ArchitectureProject = {
  id: string;
  slug: string;
  title: string;
  location: string;
  image: string;
  images: string[];
  description: string;
  imageVariant?: "default" | "portrait";
};

export const architectureProjects: ArchitectureProject[] = [
  {
    id: "project-01",
    slug: "apartment-mylapore-classic",
    title: "Apartment @ Mylapore",
    location: "Mylapore, Chennai",
    image: "/architecture/mylapore-apartment/3.jpg",
    images: [
      "/architecture/mylapore-apartment/3.jpg",
      "/architecture/mylapore-apartment/4.jpg",
      "/architecture/mylapore-apartment/2.jpg",
    ],
    description:
      "A contemporary residential development defined by a clean, symmetrical facade with subtle classical influences. The design emphasizes vertical articulation, balanced proportions, and refined detailing. Planned for optimal natural light and cross-ventilation, the layout integrates private balconies, generous openings, and efficient circulation. Stilt-level parking and a restrained material palette enhance both functionality and visual coherence. Set within a landscaped context, the project presents a refined balance of modern living and timeless architectural character.",
  },
  {
    id: "project-02",
    slug: "apartment-velachery",
    title: "Apartment @ Velachery",
    location: "Velachery, Chennai",
    image: "/architecture/velachery-apartment/1.jpg",
    images: [
      "/architecture/velachery-apartment/1.jpg",
      "/architecture/velachery-apartment/2.jpg",
    ],
    description:
      "A contemporary residential development defined by a bold interplay of vertical elements and contrasting textures. The facade composition emphasizes rhythm, proportion, and visual depth through a structured grid and clean linear detailing. The design prioritizes natural light, ventilation, and efficient space planning, with well-placed openings and streamlined circulation. The stilt-level parking and minimal material palette enhance functionality while maintaining a strong, modern identity. The project reflects a balanced approach to urban living, combining practicality with a distinct architectural expression.",
  },
  {
    id: "project-03",
    slug: "apartment-mylapore-curved",
    title: "Apartment @ Mylapore",
    location: "Mylapore, Chennai",
    image: "/architecture/mylapore-apartment-2/1.jpeg",
    images: [
      "/architecture/mylapore-apartment-2/1.jpeg",
      "/architecture/mylapore-apartment-2/2.jpeg",
      "/architecture/mylapore-apartment-2/3.jpeg",
    ],
    imageVariant: "portrait",
    description:
      "A modern residential development characterized by soft, flowing facade lines and a minimalist design language. The project introduces a dynamic visual identity through curved balcony profiles, subtle material contrasts, and clean horizontal layering. Designed to enhance everyday living, the layout ensures ample natural light, ventilation, and seamless indoor-outdoor connection through spacious balconies and well-positioned openings. The stilt-level parking and efficient circulation contribute to a practical and user-friendly planning approach. The project reflects a contemporary architectural expression that balances simplicity, functionality, and refined aesthetics.",
  },
  {
    id: "project-04",
    slug: "residence-theni",
    title: "Residence @ Theni",
    location: "Theni",
    image: "/architecture/residence-theni/1.jpeg",
    images: ["/architecture/residence-theni/1.jpeg"],
    description:
      "A minimal, single-storey residence defined by clean geometry and a restrained material palette. The design emphasizes horizontality and simplicity, with a recessed entry and continuous facade creating a calm and balanced visual expression. Large glazed openings establish a strong connection between indoor and outdoor spaces, allowing ample natural light and enhancing spatial openness. The integration of soft landscaping further complements the built form, creating a seamless and tranquil living environment. The project reflects a contemporary approach focused on clarity, functionality, and a close relationship with nature.",
  },
  {
    id: "project-05",
    slug: "industrial-shed-kunnam",
    title: "Industrial Shed @ Kunnam",
    location: "Kanchipuram",
    image: "/architecture/industrial-shed-kunnam/1.jpg",
    images: [
      "/architecture/industrial-shed-kunnam/1.jpg",
      "/architecture/industrial-shed-kunnam/2.jpg",
      "/architecture/industrial-shed-kunnam/3.jpg",
      "/architecture/industrial-shed-kunnam/4.jpg",
    ],
    description:
      "An industrial facility designed with a cohesive approach to both exterior and interior environments. The shed facade adopts a clean, contemporary language, balancing functionality with a refined industrial aesthetic. At the rear, a dedicated corporate office is integrated within the structure, designed to reflect a modern, minimal, and professional workspace tailored to the client's operational needs. The project emphasizes efficient planning, material clarity, and a seamless transition between industrial and office functions. The overall design presents a balanced fusion of practicality and contemporary architectural expression.",
  },
  {
    id: "project-06",
    slug: "residence-keelavannipet",
    title: "Residence @ Keelavannipet",
    location: "Mannargudi",
    image: "/architecture/residence-keelavannipet/1.png",
    images: [
      "/architecture/residence-keelavannipet/1.png",
      "/architecture/residence-keelavannipet/2.png",
    ],
    description:
      "A modern contemporary residence designed within a rural context, tailored to meet the expectations of an NRI client. The design bridges global lifestyle aspirations with local sensibilities, creating a refined yet contextually grounded living environment. Emphasizing clean lines, functional planning, and a restrained material palette, the residence is designed to maximize comfort, natural light, and spatial openness. The project reflects a balanced integration of modern design principles within a serene rural setting.",
  },
  {
    id: "project-07",
    slug: "residence-mayiladuthurai",
    title: "Residence @ Mayiladuthurai",
    location: "Mayiladuthurai",
    image: "/architecture/residence-mayiladuthurai/1.jpeg",
    images: [
      "/architecture/residence-mayiladuthurai/1.jpeg",
      "/architecture/residence-mayiladuthurai/2.jpeg",
      "/architecture/residence-mayiladuthurai/3.jpeg",
    ],
    description:
      "A residence designed as a thoughtful fusion of modern and traditional architectural principles. The project balances clean, contemporary lines with contextual elements, creating a design that is both timeless and rooted in cultural identity. Careful attention is given to spatial planning, material selection, and detailing to ensure functionality while retaining a sense of warmth and familiarity. The result is a cohesive living environment that seamlessly blends tradition with modern lifestyle requirements.",
  },
  {
    id: "project-08",
    slug: "residence-coimbatore",
    title: "Residence @ Coimbatore",
    location: "Coimbatore",
    image: "/architecture/residence-coimbatore/1.jpg",
    images: [
      "/architecture/residence-coimbatore/1.jpg",
      "/architecture/residence-coimbatore/2.jpg",
    ],
    description:
      "A contemporary residence featuring a distinct projected corner room at the first-floor level, creating a strong visual anchor within the facade. The elevation is defined by a grey and copper-toned palette, carefully selected to resonate with the local context while adding depth and character. The design blends modern massing with subtle traditional cues, achieving a balanced expression that is both contextually sensitive and visually striking. The project reflects a nuanced approach to materiality, form, and regional identity within a contemporary framework.",
  },
  {
    id: "project-09",
    slug: "resort-kalpakkam",
    title: "Resort @ Kalpakkam",
    location: "Kalpakkam, Chennai",
    image: "/architecture/resort-kalpakkam/1.jpg",
    images: [
      "/architecture/resort-kalpakkam/1.jpg",
      "/architecture/resort-kalpakkam/2.jpg",
      "/architecture/resort-kalpakkam/3.jpg",
      "/architecture/resort-kalpakkam/4.jpg",
      "/architecture/resort-kalpakkam/5.jpg",
      "/architecture/resort-kalpakkam/6.jpg",
    ],
    description:
      "A marine-themed resort conceptualized as an iconic ship-form structure, creating a bold and immersive architectural identity. The design integrates a mini convention hall within the program, catering to both leisure and event-based functions. The surrounding landscape is strategically designed to enhance the illusion of the building floating, reinforcing the nautical concept through spatial planning and visual composition. The project reflects a seamless fusion of thematic design, functionality, and experiential architecture.",
  },
  {
    id: "project-10",
    slug: "row-villas-panapakkam",
    title: "Row Villas @ Panapakkam",
    location: "Panapakkam, Chennai",
    image: "/architecture/row-villas-panapakkam/1.jpg",
    images: [
      "/architecture/row-villas-panapakkam/1.jpg",
      "/architecture/row-villas-panapakkam/2.jpg",
    ],
    imageVariant: "portrait",
    description:
      "A row villa development comprehensively designed from initial site feasibility to final project detailing. The planning approach focuses on optimizing site potential, ensuring efficient layouts, and creating a cohesive built environment. The design reflects a contemporary architectural language with attention to proportion, functionality, and spatial quality. The project demonstrates an integrated process, delivering a well-resolved residential development from concept to completion.",
  },
  {
    id: "project-11",
    slug: "residence-thiruverkadu",
    title: "Residence @ Thiruverkadu",
    location: "Thiruverkadu, Chennai",
    image: "/architecture/residence-thiruverkadu/1.jpeg",
    images: [
      "/architecture/residence-thiruverkadu/1.jpeg",
      "/architecture/residence-thiruverkadu/2.jpeg",
      "/architecture/residence-thiruverkadu/3.jpeg",
    ],
    imageVariant: "portrait",
    description:
      "A compact residence designed to maximize spatial quality within a limited footprint. The planning incorporates two independent staircases, enhancing both privacy and safety through efficient circulation. A key feature of the design is the introduction of a double-height space, creating a sense of openness and visual connectivity despite site constraints. The project reflects a strategic approach to planning, balancing functionality, volume, and spatial experience.",
  },
];

export function getArchitectureProject(slug: string) {
  return architectureProjects.find((project) => project.slug === slug);
}
