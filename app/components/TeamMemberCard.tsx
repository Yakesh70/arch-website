"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image?: string;
  imagePosition?: string;
};

type TeamMemberCardProps = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current) {
      return;
    }

    const card = cardRef.current;
    const image = imageRef.current;

    const ctx = gsap.context(() => {
      gsap.set(image, { scale: 1, transformOrigin: "center center" });

      const enter = () => {
        gsap.killTweensOf(image);
        gsap.to(image, {
          scale: 1.12,
          duration: 0.001,
          ease: "power3.out",
        });
      };

      const leave = () => {
        gsap.killTweensOf(image);
        gsap.to(image, {
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
        });
      };

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      card.addEventListener("focus", enter);
      card.addEventListener("blur", leave);

      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
        card.removeEventListener("focus", enter);
        card.removeEventListener("blur", leave);
      };
    }, card);

    return () => ctx.revert();
  }, []);

  return (
    <article className="teamCard teamProfile" ref={cardRef}>
      <div className="teamPortraitFrame">
        {member.image ? (
          <img
            ref={imageRef}
            className="teamPhoto"
            src={member.image}
            alt={member.name}
            style={
              "imagePosition" in member
                ? { objectPosition: member.imagePosition }
                : undefined
            }
          />
        ) : (
          <div
            className="teamPlaceholder"
            aria-label={`${member.name} photo placeholder`}
          >
            <span>{member.id}</span>
          </div>
        )}
      </div>

      <div className="teamNameplate">
        <h2>{member.name}</h2>
        <p>{member.role}</p>
      </div>
    </article>
  );
}
