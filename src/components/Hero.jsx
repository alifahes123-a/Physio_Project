import { useEffect, useState } from "react";
import aliPhoto from "../assets/alifarhat.png";
import "./Hero.css";

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`hero ${loaded ? "hero-loaded" : ""}`}
    >
      <div className="hero-grid" aria-hidden="true" />

      <div
        className="hero-circle hero-circle-one"
        aria-hidden="true"
      />

      <div
        className="hero-circle hero-circle-two"
        aria-hidden="true"
      />

      <div className="hero-container">
        {/* LEFT SIDE */}

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />

            <span>THE REVPHYSIO</span>

            <div className="hero-eyebrow-line" />

            <span className="hero-eyebrow-name">
              BY ALI FARHAT
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">
              Move
            </span>

            <span className="hero-title-line hero-title-green">
              better.
            </span>

            <span className="hero-title-line">
              Recover
            </span>

            <span className="hero-title-line hero-title-green">
              stronger.
            </span>
          </h1>

          <div className="hero-bottom-content">
            <p className="hero-description">
              Physiotherapy focused on movement,
              recovery, and building a stronger,
              more confident version of you.
            </p>

            <button
              className="hero-cta"
              onClick={scrollToAbout}
              type="button"
            >
              <span>Start Your Recovery</span>

              <span className="hero-cta-arrow">
                →
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="hero-visual">
          <div
            className="hero-visual-rev"
            aria-hidden="true"
          >
            REV
          </div>

          <div
            className="hero-orbit hero-orbit-large"
            aria-hidden="true"
          />

          <div
            className="hero-orbit hero-orbit-small"
            aria-hidden="true"
          />

          <div
            className="hero-visual-dot hero-visual-dot-one"
            aria-hidden="true"
          />

          <div
            className="hero-visual-dot hero-visual-dot-two"
            aria-hidden="true"
          />

          <div
            className="hero-photo-circle"
            aria-hidden="true"
          />

          <div className="hero-photo-area">
            <img
              src={aliPhoto}
              alt="Ali Farhat"
              className="hero-photo"
            />
          </div>

          <div className="hero-person">
            <span> Dr ALI FARHAT</span>

            <div className="hero-person-line" />

            <p>
              Doctor in Physical Therapy
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="hero-footer">
        <div className="hero-philosophy">
          <span>RECOVER</span>
          <i>/</i>
          <span>REBUILD</span>
          <i>/</i>
          <strong>REVOLUTIONIZE</strong>
        </div>

        <button
          className="hero-scroll"
          onClick={scrollToAbout}
          type="button"
          aria-label="Scroll to About section"
        >
          <span>SCROLL TO EXPLORE</span>

          <div className="hero-scroll-circle">
            ↓
          </div>
        </button>
      </div>
    </section>
  );
}

export default Hero;