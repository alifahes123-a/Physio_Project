import { useEffect, useRef } from "react";
import "./Contact.css";

const PHONE_DISPLAY = "+961 76 917 602";
const PHONE_LINK = "tel:+96176917602";
const WHATSAPP = "https://wa.me/96176917602";
const INSTAGRAM =
  "https://www.instagram.com/therevphysio?stkn=MWJpazg5aGM1OTRrNw==";

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("contact-visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const bookingMessage = encodeURIComponent(
    "Hi Dr  Ali, I'd like to book a physiotherapy session with Rev Physio."
  );

  const bookingLink = `${WHATSAPP}?text=${bookingMessage}`;

  return (
    <section
      id="contact"
      className="contact"
      ref={sectionRef}
    >
      <div
        className="contact-rev"
        aria-hidden="true"
      >
        REV
      </div>

      <div
        className="contact-orbit contact-orbit-a"
        aria-hidden="true"
      />

      <div
        className="contact-orbit contact-orbit-b"
        aria-hidden="true"
      />

      <div className="contact-container">
        {/* HEADER */}

        <div className="contact-label">
          <span className="contact-label-dot" />
          CONTACT / BOOKING
        </div>

        <div className="contact-main">
          <div className="contact-copy">
            <p className="contact-kicker">
              READY WHEN YOU ARE
            </p>

            <h2>
              Ready to start
              <br />
              your <strong>recovery?</strong>
            </h2>

            <p className="contact-lead">
              Whether you're dealing with pain,
              recovering from an injury, returning from
              surgery, or simply want to move and perform
              better — let's build your next step
              together.
            </p>
          </div>

          {/* BOOKING PANEL */}

          <div className="contact-action">
            <span className="contact-action-label">
              START HERE
            </span>

            <p>
              Your recovery starts with understanding
              where you are and where you want to go.
            </p>

            <a
              className="contact-book"
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Book your physiotherapy session on WhatsApp"
            >
              <span>BOOK YOUR SESSION</span>
              <b>→</b>
            </a>
          </div>
        </div>

        {/* CONTACT METHODS */}

        <div className="contact-details">
          <a
            className="contact-detail"
            href={PHONE_LINK}
          >
            <div className="contact-detail-top">
              <span>PHONE</span>
              <i>↗</i>
            </div>

            <div className="contact-detail-bottom">
              <small>CALL DIRECTLY</small>
              <strong>{PHONE_DISPLAY}</strong>
            </div>
          </a>

          <a
            className="contact-detail"
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-detail-top">
              <span>WHATSAPP</span>
              <i>↗</i>
            </div>

            <div className="contact-detail-bottom">
              <small>MESSAGE  Dr 
              ALI</small>
              <strong>Start a conversation</strong>
            </div>
          </a>

          <a
            className="contact-detail"
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-detail-top">
              <span>INSTAGRAM</span>
              <i>↗</i>
            </div>

            <div className="contact-detail-bottom">
              <small>FOLLOW REV PHYSIO</small>
              <strong>@therevphysio</strong>
            </div>
          </a>
        </div>

        {/* CLOSING */}

        <div className="contact-closing">
          <div className="contact-closing-line" />

          <div className="contact-signature">
            <span>RECOVER.</span>
            <span>REBUILD.</span>
            <strong>REVOLUTIONIZE.</strong>
          </div>

          <div className="contact-closing-line" />
        </div>
      </div>
    </section>
  );
}

export default Contact;