import { PortfolioPage } from "../components/PortfolioPage";
import { architectureProjects } from "./projects";

export default function ArchitecturesPage() {
  return (
    <PortfolioPage
      displayMode="linked-gallery"
      eyebrow="Architecture"
      gallery={architectureProjects.map((project) => ({
        ...project,
        href: `/architectures/${project.slug}`,
      }))}
      intro="Homes and public spaces shaped by climate, material, and quiet detail."
      title="Architecture"
    />
  );
}
