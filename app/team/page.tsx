import { Reveal, Stagger, StaggerItem } from "../components/MotionReveal";
import { SiteChrome } from "../components/SiteChrome";
import { TeamMemberCard } from "../components/TeamMemberCard";

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
    image: "/team/mem-02.jpeg",
  },
  {
    id: "MEM 03",
    name: "Monesh Arun K",
    role: "Architect",
    image: "/team/mem-03.jpeg",
  },
  {
    id: "MEM 04",
    name: "Divyaprakash R",
    role: "Architect",
    image: "/team/mem-04.jpg",
  },
  {
    id: "MEM 05",
    name: "Fathima",
    role: "Architect",
    image: "/team/mem-05.jpg",
    imagePosition: "30% 30%",
  },
  {
    id: "MEM 06",
    name: "Nithya",
    role: "Architect",
    image: "/team/mem-06.jpg",
  },
];

export default function TeamPage() {
  return (
    <SiteChrome pinFooter={true} showFooter={true}>
      <div className="teamPage">
        <section className="teamIntro">
          <Reveal>
            <h1>Meet The Team</h1>
             <h1>People behind the practice</h1>
            <p>
              Meet the architects shaping Studio V - ARC through design thinking,
            detailing, coordination, and careful project execution.
            </p>
          </Reveal>
        </section>

        <Stagger className="teamGrid teamDirectory">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <TeamMemberCard member={member} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </SiteChrome>
  );
}
