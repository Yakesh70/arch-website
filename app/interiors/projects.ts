export type InteriorProject = {
  id: string;
  slug: string;
  title: string;
  location: string;
  image: string;
  images: string[];
  description: string;
  imageVariant?: "default" | "portrait";
};

export const interiorProjects: InteriorProject[] = [
  {
    id: "interior-01",
    slug: "industrial-shed-kunnam",
    title: "Industrial Shed @ Kunnam",
    location: "Kanchipuram",
    image: "/Interior/10-MD-2.png",
    images: [
      "/Interior/10-MD-2.png",
      "/Interior/14-WS-2F-3.png",
      "/Interior/15-WS-2F-4.png",
      "/Interior/17-BED-2.png",
      "/Interior/18-BED-3.png",
      "/Interior/2-RECP-2.png",
      "/Interior/5-WS-1F-2.png",
    ],
    description: "An industrial facility designed with a cohesive approach to both exterior and interior environments. The shed façade adopts a clean, contemporary language, balancing functionality with a refined industrial aesthetic. At the rear, a dedicated corporate office is integrated within the structure, designed to reflect a modern, minimal, and professional workspace tailored to the client's operational needs. The project emphasizes efficient planning, material clarity, and a seamless transition between industrial and office functions. The overall design presents a balanced fusion of practicality and contemporary architectural expression.",
  },
  {
    id: "interior-02",
    slug: "corporate-interior-rajkot",
    title: "Corporate Interior @ Rajkot",
    location: "Ahemdabad",
    image: "/interior2/DIR - 1.png",
    images: [
      "/interior2/DIR - 1.png",
      "/interior2/DIR - 2.png",
      "/interior2/DIR - 3.png",
      "/interior2/REC - 1.png",
      "/interior2/REC - 2.png",
      "/interior2/WS - 1.png",
      "/interior2/WS - 2.png",
    ],
    description: "A corporate office interior designed for a marine design company, conceptually driven by a nautical theme and executed with a modern, minimal approach. The design integrates the company's color palette and brand identity into the spatial experience, creating a cohesive and immersive work environment. Custom-designed furniture and tailored detailing respond specifically to the client's functional requirements, ensuring both efficiency and visual consistency. The project reflects a thoughtful balance between branding, functionality, and contemporary design sensibilities.",
  },
  {
    id: "interior-03",
    slug: "pharmacy-thuraiyur",
    title: "Pharmacy @ Thuraiyur",
    location: "Tiruchirapalli",
    image: "/interior3/ELEV 1_1.png",
    images: [
      "/interior3/ELEV 1_1.png",
      "/interior3/PER 1_1.png",
      "/interior3/PERS 5.png",
    ],
    description: "A pharmacy designed with a minimal and contemporary approach, tailored to a rural context. The project integrates both exterior and interior design to create a clear, accessible, and welcoming environment. The design emphasizes simplicity, efficient space planning, and functional clarity, ensuring ease of movement and user comfort. A restrained material palette and clean detailing enhance visibility and usability while establishing a modern identity within the local setting.",
  },
];

export function getInteriorProject(slug: string) {
  return interiorProjects.find((project) => project.slug === slug);
}
