import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, Stagger, StaggerItem } from "../../components/MotionReveal";
import { SiteChrome } from "../../components/SiteChrome";
import {
  architectureProjects,
  getArchitectureProject,
} from "../projects";

type ArchitectureProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return architectureProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArchitectureProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getArchitectureProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Studio V Arc`,
    description: project.description,
  };
}

export default async function ArchitectureProjectPage({
  params,
}: ArchitectureProjectPageProps) {
  const { slug } = await params;
  const project = getArchitectureProject(slug);

  if (!project) {
    notFound();
  }

  const [, ...detailImages] = project.images;

  return (
    <SiteChrome>
      <section className="innerHero architectureProjectHero">
        <Reveal>
          <p>Architecture</p>
          <h1>{project.title}</h1>
          <span>{project.location}</span>
        </Reveal>
      </section>

      <section className="architectureProjectWrap">
        <Reveal className="architectureProjectLead">
          <div
            className={`architectureProjectLeadImageWrap ${
              project.imageVariant === "portrait"
                ? "architectureProjectLeadImageWrapPortrait"
                : ""
            }`}
          >
            <img
              alt={`${project.title} lead view`}
              className={`architectureProjectLeadImage ${
                project.imageVariant === "portrait"
                  ? "architectureProjectLeadImagePortrait"
                  : ""
              }`}
              src={project.image}
            />
          </div>
        </Reveal>

        <Reveal className="architectureProjectIntro" delay={0.08}>
          <div className="architectureProjectMeta">
            <p>Project</p>
            <h2>{project.title}</h2>
            <span>{project.location}</span>
          </div>
          <div className="architectureProjectCopy">
            <p>{project.description}</p>
          </div>
        </Reveal>

        {detailImages.length ? (
          <Stagger className="architectureProjectGallery">
            {detailImages.map((image, index) => (
              <StaggerItem key={`${project.slug}-gallery-${index}`}>
                <div
                  className={`architectureProjectGalleryImageWrap ${
                    project.imageVariant === "portrait"
                      ? "architectureProjectGalleryImageWrapPortrait"
                      : ""
                  }`}
                >
                  <img
                    alt={`${project.title} gallery view ${index + 2}`}
                    className={`architectureProjectGalleryImage ${
                      project.imageVariant === "portrait"
                        ? "architectureProjectGalleryImagePortrait"
                        : ""
                    }`}
                    src={image}
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        ) : null}

        <Reveal className="architectureProjectBack" delay={0.1}>
          <Link href="/architectures">Back to Architecture</Link>
        </Reveal>
      </section>
    </SiteChrome>
  );
}
