import { PortfolioPage } from "../components/PortfolioPage";

const projects = [
  {
    title: "Warm Minimal Living",
    location: "Chennai",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Stone And Light",
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Studio Apartment",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Quiet Dining Room",
    location: "Pune",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function InteriorsPage() {
  return (
    <PortfolioPage
      eyebrow="Interior"
      gallery={projects}
      intro="Interior environments composed with texture, proportion, and everyday comfort."
      title="Interior"
    />
  );
}
