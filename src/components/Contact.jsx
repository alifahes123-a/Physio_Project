import { useEffect, useRef } from "react";
import "./Contact.css";

const PHONE_DISPLAY = "+961 76 917 602";
const PHONE_LINK = "tel:+96176917602";
const WHATSAPP = "https://wa.me/96176917602";
const INSTAGRAM =
  "https://www.instagram.com/therevphysio?stkn=MWJpazg5aGM1OTRrNw==";

/* ==========================================
   ICONS
========================================== */

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="contact-brand-svg phone-svg"
  >
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2
      19.79 19.79 0 0 1-8.63-3.07
      19.5 19.5 0 0 1-6-6
      19.79 19.79 0 0 1-3.07-8.67
      A2 2 0 0 1 4.11 2h3
      a2 2 0 0 1 2 1.72
      12.84 12.84 0 0 0 .7 2.81
      2 2 0 0 1-.45 2.11L8.09 9.91
      a16 16 0 0 0 6 6l1.27-1.27
      a2 2 0 0 1 2.11-.45
      12.84 12.84 0 0 0 2.81.7
      A2 2 0 0 1 22 16.92z"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="contact-brand-svg whatsapp-svg"
  >
    <path
      d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0
      C5.5 0 .14 5.36.14 11.95
      c0 2.1.55 4.15 1.6 5.96L.04 24
      l6.24-1.64a11.9 11.9 0 0 0 5.8 1.48h.01
      c6.58 0 11.94-5.36 11.94-11.95
      0-3.19-1.24-6.18-3.51-8.41zM12.08 21.82
      a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.7.97.99-3.61-.23-.37
      a9.86 9.86 0 0 1-1.52-5.27
      c0-5.44 4.42-9.87 9.86-9.87
      a9.8 9.8 0 0 1 6.98 2.9
      9.8 9.8 0 0 1 2.89 6.99
      c-.01 5.43-4.43 9.85-9.88 9.85zm5.41-7.39
      c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15
      -.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07
      -.3-.15-1.25-.46-2.38-1.47
      -.88-.78-1.47-1.75-1.64-2.05
      -.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52
      .15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52
      -.08-.15-.67-1.61-.91-2.2-.24-.57-.48-.49-.67-.5h-.57
      c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48
      0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49
      .71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12
      .57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41
      -.07-.12-.27-.2-.57-.35z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="contact-brand-svg instagram-svg"
  >
    <path
      d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5
      A5.76 5.76 0 0 1 16.25 22h-8.5
      A5.76 5.76 0 0 1 2 16.25v-8.5
      A5.76 5.76 0 0 1 7.75 2Zm0 2
      A3.76 3.76 0 0 0 4 7.75v8.5
      A3.76 3.76 0 0 0 7.75 20h8.5
      A3.76 3.76 0 0 0 20 16.25v-8.5
      A3.76 3.76 0 0 0 16.25 4h-8.5ZM17.5 5.5
      a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7
      a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2
      a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 19 19 5" />
    <path d="M9 5h10v10" />
  </svg>
);

/* ==========================================
   CONTACT
========================================== */

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
    "Hi Dr Ali, I'd like to book a physiotherapy session with Rev Physio."
  );

  const bookingLink = `${WHATSAPP}?text=${bookingMessage}`;

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      {/* DECORATION */}

      <div className="contact-rev" aria-hidden="true">
        REV
      </div>

      <div
        className="contact-orbit contact-orbit-one"
        aria-hidden="true"
      />

      <div
        className="contact-orbit contact-orbit-two"
        aria-hidden="true"
      />

      <div className="contact-container">
        {/* TOP LABEL */}

        <div className="contact-eyebrow">
          <div className="contact-eyebrow-left">
            <span className="contact-dot" />
            CONTACT / BOOKING
          </div>

          <span className="contact-eyebrow-number">08</span>
        </div>

        {/* HERO AREA */}

        <div className="contact-hero">
          <div className="contact-heading">
            <p className="contact-kicker">
              YOUR NEXT STEP STARTS HERE
            </p>

            <h2>
              LET&apos;S
              <br />
              <span>START.</span>
            </h2>

            <p className="contact-description">
              Whether you&apos;re dealing with pain,
              recovering from an injury, returning from
              surgery, or simply want to move and perform
              better — let&apos;s build your next step
              together.
            </p>
          </div>

          {/* BOOKING CARD */}

          <div className="contact-booking-card">
            <div className="booking-card-top">
              <span>BOOK A SESSION</span>

              <div className="booking-status">
                <i />
                GET IN TOUCH
              </div>
            </div>

            <div className="booking-card-middle">
              <p>
                Start with a conversation.
              </p>

              <h3>
                Tell me where
                <br />
                you want to go.
              </h3>
            </div>

            <a
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              className="booking-main-button"
              aria-label="Book your physiotherapy session on WhatsApp"
            >
              <span className="booking-button-icon">
                <WhatsAppIcon />
              </span>

              <span className="booking-button-copy">
                <small>BOOK THROUGH WHATSAPP</small>
                <strong>Book your session</strong>
              </span>

              <span className="booking-arrow">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>

        {/* CONTACT METHODS */}

        <div className="contact-methods">
          {/* PHONE */}

          <a
            href={PHONE_LINK}
            className="contact-method contact-method-phone"
          >
            <div className="contact-method-icon phone-icon">
              <PhoneIcon />
            </div>

            <div className="contact-method-copy">
              <span>PHONE</span>

              <strong>{PHONE_DISPLAY}</strong>

              <small>Tap to call directly</small>
            </div>

            <div className="contact-method-arrow">
              <ArrowIcon />
            </div>
          </a>

          {/* WHATSAPP */}

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="contact-method contact-method-whatsapp"
          >
            <div className="contact-method-icon whatsapp-icon">
              <WhatsAppIcon />
            </div>

            <div className="contact-method-copy">
              <span>WHATSAPP</span>

              <strong>Message Ali</strong>

              <small>Start a conversation</small>
            </div>

            <div className="contact-method-arrow">
              <ArrowIcon />
            </div>
          </a>

          {/* INSTAGRAM */}

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="contact-method contact-method-instagram"
          >
            <div className="contact-method-icon instagram-icon">
              <InstagramIcon />
            </div>

            <div className="contact-method-copy">
              <span>INSTAGRAM</span>

              <strong>@therevphysio</strong>

              <small>Follow Rev Physio</small>
            </div>

            <div className="contact-method-arrow">
              <ArrowIcon />
            </div>
          </a>
        </div>

        {/* BOTTOM */}

        <div className="contact-bottom">
          <div className="contact-bottom-line" />

          <div className="contact-philosophy">
            <span>RECOVER.</span>
            <span>REBUILD.</span>
            <strong>REVOLUTIONIZE.</strong>
          </div>

          <div className="contact-bottom-line" />
        </div>
      </div>
    </section>
  );
}

export default Contact;