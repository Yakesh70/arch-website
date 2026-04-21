import { Reveal, Stagger, StaggerItem } from "./MotionReveal";
import { PortfolioCardImage } from "./PortfolioCardImage";
import { SiteChrome } from "./SiteChrome";

type GalleryItem = {
  title: string;
  location: string;
  image: string;
  images?: string[];
  description?: string;
};

type PortfolioPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  gallery: GalleryItem[];
};

export function PortfolioPage({
  eyebrow,
  title,
  intro,
  gallery,
}: PortfolioPageProps) {
  return (
    <SiteChrome>
      <section className="innerHero">
        <Reveal>
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          <span>{intro}</span>
        </Reveal>
      </section>

      <Stagger className="portfolioGrid">
        {gallery.map((item) => (
          <StaggerItem className="portfolioMotion" key={item.title}>
            <article className="portfolioCard">
              <PortfolioCardImage
                images={item.images?.length ? item.images : [item.image]}
                title={item.title}
              />
              <div>
                <h2>{item.title}</h2>
                <p>{item.location}</p>
                {item.description ? (
                  <p className="portfolioDescription">{item.description}</p>
                ) : null}
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </SiteChrome>
  );
}
