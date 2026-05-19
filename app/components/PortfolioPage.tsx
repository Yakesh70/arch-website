"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArchitectureListingCard } from "./ArchitectureListingCard";
import { Reveal, Stagger, StaggerItem } from "./MotionReveal";
import { PortfolioCardImage } from "./PortfolioCardImage";
import { SiteChrome } from "./SiteChrome";
import { useState } from "react";

type GalleryItem = {
  id?: string;
  title: string;
  location: string;
  image: string;
  images?: string[];
  description?: string;
  imageVariant?: "default" | "portrait";
  href?: string;
};

type PortfolioPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  gallery: GalleryItem[];
  displayMode?: "expand" | "stacked-hover" | "gallery-detail" | "linked-gallery";
  pinFooter?: boolean;
  showFooter?: boolean;
};

export function PortfolioPage({
  eyebrow,
  title,
  intro,
  gallery,
  displayMode = "expand",
  pinFooter = false,
  showFooter = true,
}: PortfolioPageProps) {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  return (
    <SiteChrome pinFooter={pinFooter} showFooter={showFooter}>
      <section className="innerHero">
        <Reveal>
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          <span>{intro}</span>
        </Reveal>
      </section>

      <Stagger
        className={`portfolioGrid ${
          displayMode === "linked-gallery" ? "portfolioGridLinked" : ""
        }`}
      >
        {gallery.map((item, index) => {
          const projectId = item.id ?? `${item.title}-${index}`;
          const isOpen = openProjectId === projectId;
          const isStackedHover = displayMode === "stacked-hover";
          const isGalleryDetail = displayMode === "gallery-detail";
          const isLinkedGallery = displayMode === "linked-gallery";
          const hasTitleSwapHover = displayMode === "expand";
          const projectImages = item.images?.length ? item.images : [item.image];
          const detailImages = projectImages.slice(1);

          return (
            <StaggerItem className="portfolioMotion" key={projectId}>
              {isLinkedGallery ? (
                <ArchitectureListingCard
                  href={item.href ?? "#"}
                  images={[item.image]}
                  title={item.title}
                />
              ) : (
              <article
                className={`portfolioCard ${
                  item.imageVariant === "portrait" ? "portfolioCardPortrait" : ""
                } ${isOpen ? "isOpen" : ""} ${
                  isStackedHover ? "portfolioCardStacked" : ""
                } ${isGalleryDetail ? "portfolioCardGallery" : ""} ${
                  hasTitleSwapHover ? "portfolioCardTitleSwap" : ""
                }`}
              >
                {isStackedHover ? (
                  <div className="portfolioProjectToggle portfolioProjectStatic">
                    <PortfolioCardImage
                      autoplay={false}
                      images={projectImages}
                      title={item.title}
                      variant={item.imageVariant}
                    />
                    <span className="portfolioImageMeta portfolioImageMetaCenter">
                      <span className="portfolioImageTitle">{item.title}</span>
                      <span className="portfolioImageLocation">
                        {item.location}
                      </span>
                    </span>
                  </div>
                ) : (
                  <button
                    aria-expanded={isOpen}
                    className="portfolioProjectToggle"
                    onClick={() =>
                      setOpenProjectId((current) =>
                        current === projectId ? null : projectId
                      )
                    }
                    type="button"
                  >
                    <PortfolioCardImage
                      autoplay={!isGalleryDetail}
                      images={projectImages}
                      title={item.title}
                      variant={item.imageVariant}
                    />
                    <span
                      className={`portfolioImageMeta ${
                        isGalleryDetail ? "portfolioImageMetaCenter" : ""
                      } ${
                        hasTitleSwapHover ? "portfolioImageMetaAnimated" : ""
                      }`}
                    >
                      {hasTitleSwapHover ? (
                        <>
                          <span className="portfolioImageMetaOverlay" />
                          <span className="portfolioImageBottomGroup">
                            <span className="portfolioImageTitle">{item.title}</span>
                            <span className="portfolioImageLocation">
                              {item.location}
                            </span>
                          </span>
                          <span className="portfolioImageTitle portfolioImageTitleHoverCenter">
                            {item.title}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="portfolioImageTitle">{item.title}</span>
                          <span className="portfolioImageLocation">
                            {item.location}
                          </span>
                        </>
                      )}
                    </span>
                  </button>
                )}

                {isStackedHover ? (
                  <div className="portfolioCardDetails portfolioCardDetailsStatic">
                    <div className="portfolioCardContent">
                      <h2>{item.title}</h2>
                      <p>{item.location}</p>
                      {item.description ? (
                        <p className="portfolioDescription">
                          {item.description}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          animate={{ opacity: 1, height: "auto" }}
                          className="portfolioCardDetails"
                          exit={{ opacity: 0, height: 0 }}
                          initial={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="portfolioCardContent">
                              <h2>{item.title}</h2>
                              <p>{item.location}</p>
                              {item.description ? (
                                <p className="portfolioDescription">
                                  {item.description}
                                </p>
                              ) : null}
                            </div>
                            {isGalleryDetail && detailImages.length ? (
                              <div className="portfolioDetailGallery">
                                {detailImages.map((image, imageIndex) => (
                                  <div
                                    className={`portfolioDetailImageWrap ${
                                      item.imageVariant === "portrait"
                                        ? "portfolioDetailImageWrapPortrait"
                                        : ""
                                    }`}
                                    key={`${projectId}-detail-${imageIndex}`}
                                  >
                                    <img
                                      alt={`${item.title} detail ${imageIndex + 2}`}
                                      className={`portfolioDetailImage ${
                                        item.imageVariant === "portrait"
                                          ? "portfolioDetailImagePortrait"
                                          : ""
                                      }`}
                                      src={image}
                                    />
                                  </div>
                                ))}
                              </div>
                            ) : null}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </>
                )}
              </article>
              )}
            </StaggerItem>
          );
        })}
      </Stagger>
    </SiteChrome>
  );
}
