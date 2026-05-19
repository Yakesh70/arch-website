import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, Stagger, StaggerItem } from "../../components/MotionReveal";
import { SiteChrome } from "../../components/SiteChrome";
import { interiorProjects, getInteriorProject } from "../projects";

type InteriorProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return interiorProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: InteriorProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getInteriorProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Studio V Arc`,
    description: project.description,
  };
}

export default async function InteriorProjectPage({
  params,
}: InteriorProjectPageProps) {
  const { slug } = await params;
  const project = getInteriorProject(slug);

  if (!project) {
    notFound();
  }

  const [, ...detailImages] = project.images;

  return (
    <SiteChrome>
      <section className="innerHero architectureProjectHero">
        <Reveal>
          <p>Interior</p>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 5.5rem)" }}>{project.title}</h1>
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
          <Link href="/interiors">Back to Interior</Link>
        </Reveal>
      </section>
    </SiteChrome>
  );
}
