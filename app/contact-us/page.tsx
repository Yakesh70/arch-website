import { Reveal } from "../components/MotionReveal";
import { SiteChrome } from "../components/SiteChrome";

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/918248686349",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M8.65 25.1 4.4 26.65l1.48-4.37A11.4 11.4 0 1 1 8.65 25.1Z" />
        <path d="M12.1 10.36c-.26-.58-.54-.6-.79-.61h-.68c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3s1.29 3.48 1.47 3.72c.18.24 2.49 3.99 6.16 5.43 3.05 1.2 3.67.96 4.33.9.66-.06 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.95-1.8-2.13-2.01-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.8-1.93-1.11-2.64Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/studiov_arc/",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="7" y="7" width="18" height="18" rx="5" />
        <circle cx="16" cy="16" r="4.3" />
        <circle cx="21.7" cy="10.9" r="1" />
      </svg>
    ),
  },
  {
    label: "Location",
    href: "https://maps.app.goo.gl/4gc6gEn6qiMkHmL17",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 27.5s8-7.52 8-14a8 8 0 0 0-16 0c0 6.48 8 14 8 14Z" />
        <circle cx="16" cy="13.5" r="3" />
      </svg>
    ),
  },
  { label: "Facebook", href: "#", icon: <span>f</span> },
  { label: "LinkedIn", href: "https://www.linkedin.com/search/results/all/?keywords=Studio%20V%20arc", icon: <span>in</span> },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="5" y="9" width="22" height="14" rx="4" />
        <path d="m14.3 12.6 6.2 3.4-6.2 3.4v-6.8Z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <SiteChrome showFooter={false}>
      <section className="contactPage contactPageDetailed">
        <Reveal className="contactFormPanel">
          <h1>Contact Us</h1>
          <form action="mailto:studiovarc@gmail.com" method="post">
            <label>
              <span>Name*</span>
              <input name="name" required type="text" />
            </label>
            <label>
              <span>Email*</span>
              <input name="email" required type="email" />
            </label>
            <label>
              <span>Comment Or Message*</span>
              <textarea name="message" required rows={4} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </Reveal>

        <Reveal className="contactInfoPanel" delay={0.12}>
          <section>
            <h2>Vacancies</h2>
            <p>
              We have open vacancies at instant. Application for jobs should
              include a portfolio and a resume in pdf format (no larger than
              10Mb) and to be submitted.
            </p>
            <strong>To: studiovarc@gmail.com</strong>
          </section>

          <section>
            <h2>Address</h2>
            <p>
              Near the Chennai Mobiles, Next to Ganesh Bhawan,
              <br />
              Nesapakkam, Chennai
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              <a href="tel:+918248686349">8248686349</a>
              <br />
              <a href="mailto:studiovarc@gmail.com">studiovarc@gmail.com</a>
            </p>
          </section>
        </Reveal>

        <Reveal className="contactInquiryPanel" delay={0.18}>
          <h2>General Inquiries</h2>
          <p>
            We are all game for creative collaborations & design exchanges. We
            also look forward in hearing about new technologies and materials in
            the design industry.
          </p>
          <h2>Get In Touch With Us</h2>
          <div className="contactSocialLinks">
            {socialLinks.map((social) => (
              <a
                aria-label={social.label}
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target={social.href === "#" ? undefined : "_blank"}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="contactMapPanel" delay={0.2}>
          <h2>Location</h2>
          <div className="contactMapFrame">
            <iframe
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Near%20the%20Chennai%20Mobiles%2C%20Next%20to%20Ganesh%20Bhawan%2C%20Nesapakkam%2C%20Chennai&output=embed"
              title="Studio V Arc location"
            />
          </div>
        </Reveal>
      </section>
    </SiteChrome>
  );
}
