import { Reveal, Stagger, StaggerItem } from "../components/MotionReveal";
import { SiteChrome } from "../components/SiteChrome";

const team = [
  {
    id: "MEM 01",
    name: "Nithish Nagarajan",
    role: "Architect",
    image: "/team/mem-01-original.jpg",
  },
  {
    id: "MEM 02",
    name: "Rahith H",
    role: "Architect",
  },
  {
    id: "MEM 03",
    name: "Monesh Arun K",
    role: "Architect",
  },
  {
    id: "MEM 04",
    name: "Divyaprakash R",
    role: "Architect",
  },
  {
    id: "MEM 05",
    name: "Fathima",
    role: "Architect",
  },
  {
    id: "MEM 06",
    name: "Nithya",
    role: "Architect",
  },
];

export default function TeamPage() {
  return (
    <SiteChrome>
      <section className="innerHero">
        <Reveal>
          <p>Team</p>
          <h1>People behind the practice</h1>
          <span>
            Meet the architects shaping Studio V - ARC through design thinking,
            detailing, coordination, and careful project execution.
          </span>
        </Reveal>
      </section>

      <Stagger className="teamGrid">
        {team.map((member) => (
          <StaggerItem key={member.name}>
            <article className="teamCard">
              {member.image ? (
                <img
                  className="teamPhoto"
                  src={member.image}
                  alt={member.name}
                />
              ) : (
                <div
                  className="teamPlaceholder"
                  aria-label={`${member.name} photo placeholder`}
                >
                  <span>{member.id}</span>
                </div>
              )}
              <small>{member.id}</small>
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </SiteChrome>
  );
}
