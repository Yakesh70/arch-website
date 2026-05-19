import { Reveal, Stagger, StaggerItem } from "../components/MotionReveal";
import { SiteChrome } from "../components/SiteChrome";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Architectural Design",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1100&q=85",
    description:
      "We design spaces that respond to context, purpose, and client vision, balancing aesthetics with technical efficiency.",
    offers: [
      "Concept Design & Planning",
      "Schematic Design",
      "Design Development",
      "Working Drawings & Construction Documentation",
    ],
  },
  {
    title: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1100&q=85",
    description:
      "Our interiors are thoughtfully designed to enhance everyday living and elevate spatial experience through materials, lighting, and detailing.",
    offers: [
      "Space Planning",
      "Concept & Mood Boards",
      "2D & 3D Design Visualization",
      "Material & Finish Selection",
      "Furniture & Lighting Design",
    ],
  },
  {
    title: "Turnkey Execution",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=85",
    description:
      "From design to delivery, we manage the entire project lifecycle, ensuring quality, timelines, and seamless coordination.",
    offers: [
      "Site Management & Coordination",
      "Vendor & Contractor Management",
      "Quality Control & Supervision",
      "Project Scheduling & Cost Tracking",
    ],
  },
  {
    title: "Renovation & Remodeling",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85",
    description:
      "We reimagine existing spaces with modern design solutions while maintaining structural and functional integrity.",
    offers: [
      "Space Reconfiguration",
      "Interior Upgrades",
      "Structural Modifications as required",
      "Facade Enhancements",
    ],
  },
  {
    title: "3D Visualization & Rendering",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85",
    description:
      "We help you visualize your space before execution through detailed and realistic representations.",
    offers: [
      "Photorealistic Renders",
      "Walkthroughs",
      "Design Presentations & Iterations",
    ],
  },
  {
    title: "Project Consultation",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
    description:
      "Expert guidance to support decision-making at every stage of your project.",
    offers: [
      "Feasibility Studies",
      "Design Consultation",
      "Material & Cost Advisory",
      "Site Evaluation",
    ],
  },
  {
    title: "Custom Furniture & Detail Design",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1100&q=85",
    description:
      "We create bespoke elements that enhance both function and identity within your space.",
    offers: [
      "Custom Furniture Design",
      "Joinery & Detail Drawings",
      "Material & Finish Specifications",
    ],
  },
];

export default function ServicesPage() {
  return (
    <SiteChrome>
      <section className="innerHero serviceHero">
        <Reveal>
          <p>Our Services</p>
          <h1>End-to-end architectural and design solutions</h1>
          <span>
            At Studio V - ARC, we deliver end-to-end architectural and design
            solutions that combine creativity, functionality, and precision. Our
            process is streamlined, collaborative, and tailored to ensure every
            project is executed with clarity and attention to detail.
          </span>
        </Reveal>
      </section>

      <Stagger className="serviceDetailGrid">
        {services.map((service, index) => (
          <StaggerItem key={service.title}>
            <ServiceCard service={service} index={index} />
          </StaggerItem>
        ))}
      </Stagger>
    </SiteChrome>
  );
}
