import { Reveal } from "../components/MotionReveal";
import { SiteChrome } from "../components/SiteChrome";

export default function ContactPage() {
  return (
    <SiteChrome>
      <section className="contactPage">
        <Reveal>
          <p>Contact Us</p>
          <h1>Let us shape your next space.</h1>
          <div className="contactDetails">
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="tel:+919999999999">+91 99999 99999</a>
            <span>Studio Road, Bengaluru, India</span>
          </div>
        </Reveal>
      </section>
    </SiteChrome>
  );
}
