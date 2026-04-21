import { PortfolioPage } from "../components/PortfolioPage";

const projects = [
  {
    title: "Apartment @ Mylapore",
    location: "Mylapore, Chennai",
    image: "/architecture/mylapore-apartment/2.jpg",
    images: [
      "/architecture/mylapore-apartment/2.jpg",
      "/architecture/mylapore-apartment/3.jpg",
      "/architecture/mylapore-apartment/4.jpg",
    ],
    description:
      "A multi-storey apartment project for Mylapore with a composed facade, elegant balcony detailing, and a strong street-facing identity. The visuals rotate every 5 seconds to show the full project from multiple angles.",
  },
  {
    title: "Courtyard Residence",
    location: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Civic Garden House",
    location: "Kochi",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Hill Pavilion",
    location: "Wayanad",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Linear Villa",
    location: "Coimbatore",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function ArchitecturesPage() {
  return (
    <PortfolioPage
      eyebrow="Architecture"
      gallery={projects}
      intro="Homes and public spaces shaped by climate, material, and quiet detail."
      title="Architecture"
    />
  );
}
