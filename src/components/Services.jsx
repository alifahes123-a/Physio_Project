import { useEffect, useRef } from "react";
import "./Services.css";

const clinicServices = [
  "Initial assessment",
  "Musculoskeletal physiotherapy",
  "Sports injury rehabilitation",
  "Post-operative rehabilitation",
  "Pain management",
  "Movement assessment",
  "Strength & conditioning",
  "Mobility & flexibility",
  "Injury prevention",
  "Return-to-sport rehabilitation",
];

const privateServices = [
  "One-on-one assessment",
  "Personalized rehabilitation",
  "Individual exercise programs",
  "Strength & conditioning",
  "Movement & functional training",
  "Progress tracking",
  "Patient education",
];

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("services-visible");
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

  return (
    <section
      id="services"
      className="services"
      ref={sectionRef}
    >
      <div
        className="services-bg-text"
        aria-hidden="true"
      >
        CARE
      </div>

      <div
        className="services-orbit"
        aria-hidden="true"
      />

      <div className="services-container">
        {/* HEADER */}

        <header className="services-header">
          <div className="services-title">
            <div className="services-label">
              <span className="services-label-dot" />
              SERVICES
            </div>

            <h2>
              Built around
              <br />
              <strong>you.</strong>
            </h2>
          </div>

          <div className="services-intro">
            <div className="services-accent" />

            <p>
              Physiotherapy and rehabilitation designed
              around your body, your goals, and the way
              you want to move.
            </p>

            <span>
              From clinic-based rehabilitation to focused
              one-on-one sessions, every plan is
              individualized and progressively built
              around you.
            </span>
          </div>
        </header>

        {/* SERVICE CARDS */}

        <div className="services-grid">
          {/* CLINIC */}

          <article className="service-panel service-panel-clinic">
            <div className="service-panel-top">
              <span>CLINIC SERVICES</span>

              <div className="service-icon">+</div>
            </div>

            <div className="service-panel-heading">
              <span className="service-kicker">
                PHYSIOTHERAPY & REHABILITATION
              </span>

              <h3>
                Recover.
                <br />
                <em>Rebuild.</em>
              </h3>

              <p>
                Personalized physiotherapy and
                rehabilitation built around your
                movement, recovery, and goals.
              </p>
            </div>

            <div className="service-list">
              {clinicServices.map((service) => (
                <div
                  className="service-row"
                  key={service}
                >
                  <span className="service-row-dot" />

                  <p>{service}</p>

                  <i>↗</i>
                </div>
              ))}
            </div>
          </article>

          {/* PRIVATE */}

          <article className="service-panel service-panel-private">
            <div className="service-panel-top">
              <span>PRIVATE SESSIONS</span>

              <div className="service-icon">+</div>
            </div>

            <div className="service-panel-heading">
              <span className="service-kicker">
                INDIVIDUALIZED CARE
              </span>

              <h3>
                One-to-one.
                <br />
                <em>Entirely yours.</em>
              </h3>

              <p>
                One-on-one physiotherapy designed
                entirely around you. Private sessions
                allow for a more individualized approach
                to your assessment, treatment, exercise
                prescription, and rehabilitation
                progression.
              </p>
            </div>

            <div className="service-list">
              {privateServices.map((service) => (
                <div
                  className="service-row"
                  key={service}
                >
                  <span className="service-row-dot" />

                  <p>{service}</p>

                  <i>↗</i>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* ONE BOOKING CTA */}

        <div className="services-booking">
          <span className="services-booking-label">
            READY WHEN YOU ARE
          </span>

          <h3>
            Your next step
            <br />
            starts <strong>here.</strong>
          </h3>

          <a
            className="service-book"
            href="#contact"
          >
            <span>BOOK YOUR SESSION</span>

            <b>→</b>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;