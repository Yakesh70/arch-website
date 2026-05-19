import { PortfolioPage } from "../components/PortfolioPage";
import { interiorProjects } from "./projects";

export default function InteriorsPage() {
  return (
    <PortfolioPage
      displayMode="linked-gallery"
      eyebrow="Interior"
      gallery={interiorProjects.map((project) => ({
        ...project,
        href: `/interiors/${project.slug}`,
      }))}
      intro="Interior environments composed with texture, proportion, and everyday comfort."
      pinFooter={true}
      title="Interior"
    />
  );
}
