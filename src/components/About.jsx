import { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show-about");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="about"
      ref={sectionRef}
    >
      <div
        className="about-bg-text"
        aria-hidden="true"
      >
        REV
      </div>

      <div
        className="about-orbit about-orbit-one"
        aria-hidden="true"
      />

      <div
        className="about-orbit about-orbit-two"
        aria-hidden="true"
      />

      <div className="about-container">
        <div className="about-header">
          <div className="about-title-wrap">
            <div className="about-label">
              <span className="about-label-dot" />
              WHO IS REV PHYSIO?
            </div>

            <h2>
              More than
              <br />
              <span>physiotherapy.</span>
            </h2>
          </div>

          <div className="about-intro">
            <div className="about-intro-line" />

            <p>
              Rev Physio was created with one simple
              idea: rehabilitation should be more
              than treating pain.
            </p>

            <span>
              Every person has a different body,
              history, lifestyle, and goal. That's
              why rehabilitation should be
              individualized.
            </span>
          </div>
        </div>

        <div className="about-cards">
          <article className="about-card about-card-recover">
            <div className="about-card-accent" />

            <div className="about-card-content">
              <span>THE FIRST STEP</span>

              <h3>Recover.</h3>

              <p>
                Reduce pain, restore movement, and
                build the foundation needed to move
                forward with confidence.
              </p>
            </div>
          </article>

          <article className="about-card about-card-rebuild">
            <div className="about-card-accent" />

            <div className="about-card-content">
              <span>THE PROCESS</span>

              <h3>Rebuild.</h3>

              <p>
                Develop strength, control, mobility,
                and resilience through a
                rehabilitation plan built around you.
              </p>
            </div>
          </article>

          <article className="about-card about-card-revolutionize">
            <div className="about-card-accent" />

            <div className="about-card-content">
              <span>THE STANDARD</span>

              <h3>Revolutionize.</h3>

              <p>
                Go beyond recovery by understanding
                your movement, improving performance,
                and building long-term confidence.
              </p>
            </div>
          </article>
        </div>

        <div className="about-footer-line">
          <span>RECOVER</span>
          <i />
          <span>REBUILD</span>
          <i />
          <strong>REVOLUTIONIZE</strong>
        </div>
      </div>
    </section>
  );
}

export default About;