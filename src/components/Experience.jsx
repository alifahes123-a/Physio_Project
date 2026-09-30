import { useEffect, useRef, useState } from "react";
import "./Experience.css";

import dryNeedling from "../assets/certificates/dry-needling.jpg";
import fifaConcussion from "../assets/certificates/fifa-concussion.jpg";
import conference from "../assets/certificates/conference.jpg";
import athleticRecovery from "../assets/certificates/athletic-recovery.jpg";
import bfrTraining from "../assets/certificates/bfr-training.jpg";
import fifaDiploma from "../assets/certificates/fifa-diploma.jpg";
import fifaCardiac from "../assets/certificates/fifa-cardiac-arrest.jpg";

/*
  Newest → oldest
*/
const certificates = [
  {
    title: "Dry Needling",
    detail: "20-Hour Course",
    provider: "BAU Continuing Education Center",
    category: "CLINICAL SKILLS",
    date: "08—09",
    month: "AUG",
    year: "2026",
    fullDate: "08–09 AUG 2026",
    image: dryNeedling,
  },
  {
    title: "FIFA Team Doctor Certificate",
    detail: "Concussion",
    provider: "FIFA",
    category: "FOOTBALL MEDICINE",
    date: "08",
    month: "JAN",
    year: "2026",
    fullDate: "08 JAN 2026",
    image: fifaConcussion,
  },
  {
    title: "FIFA Team Doctor Certificate",
    detail: "Sudden Cardiac Arrest",
    provider: "FIFA",
    category: "FOOTBALL MEDICINE",
    date: "08",
    month: "JAN",
    year: "2026",
    fullDate: "08 JAN 2026",
    image: fifaCardiac,
  },
  {
    title: "FIFA Diploma in Football Medicine",
    detail: "Football Medicine",
    provider: "FIFA",
    category: "FOOTBALL MEDICINE",
    date: "02",
    month: "JAN",
    year: "2026",
    fullDate: "02 JAN 2026",
    image: fifaDiploma,
  },
  {
    title: "Uniting Minds, Moving Lives",
    detail: "Physiotherapy Conference",
    provider: "AWMV",
    category: "PROFESSIONAL DEVELOPMENT",
    date: "05",
    month: "JUL",
    year: "2025",
    fullDate: "05 JUL 2025",
    image: conference,
  },
  {
    title: "Athletic Recovery Workshop",
    detail: "Sports Recovery",
    provider: "Lebanese University",
    category: "SPORTS & RECOVERY",
    date: "11",
    month: "JUN",
    year: "2025",
    fullDate: "11 JUN 2025",
    image: athleticRecovery,
  },
  {
    title: "Blood Flow Restriction Training",
    detail: "12-Hour Workshop",
    provider: "Mahdy El-Zein",
    category: "PERFORMANCE",
    date: "24—25",
    month: "FEB",
    year: "2024",
    fullDate: "24–25 FEB 2024",
    image: bfrTraining,
  },
];

function Experience() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [activeCertificate, setActiveCertificate] = useState(null);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [focusedCertificate, setFocusedCertificate] = useState(0);

  /* ==========================================
     SECTION REVEAL
  ========================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("experience-visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* ==========================================
     CERTIFICATE VIEWER
  ========================================== */

  const openCertificate = (index) => {
    setActiveCertificate(index);
  };

  const closeCertificate = () => {
    setActiveCertificate(null);
  };

  const showPrevious = () => {
    setActiveCertificate((current) => {
      if (current === null) return null;

      return current === 0
        ? certificates.length - 1
        : current - 1;
    });
  };

  const showNext = () => {
    setActiveCertificate((current) => {
      if (current === null) return null;

      return current === certificates.length - 1
        ? 0
        : current + 1;
    });
  };

  /* ==========================================
     LIGHTBOX KEYBOARD
  ========================================== */

  useEffect(() => {
    if (activeCertificate === null) return;

    const handleKeyboard = (event) => {
      if (event.key === "Escape") {
        closeCertificate();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [activeCertificate]);

  /* ==========================================
     ARCHIVE
  ========================================== */

  const toggleArchive = () => {
    setArchiveOpen((current) => {
      const next = !current;

      if (!next && trackRef.current) {
        trackRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }

      return next;
    });
  };

  const scrollArchive = (direction) => {
    if (!trackRef.current) return;

    const amount = Math.min(
      trackRef.current.clientWidth * 0.78,
      470
    );

    trackRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  /* ==========================================
     TIMELINE FOCUS
  ========================================== */

  const updateTimelineFocus = () => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(
      track.querySelectorAll(".timeline-certificate")
    );

    if (!cards.length) return;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(trackCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setFocusedCertificate((current) =>
      current === closestIndex ? current : closestIndex
    );
  };

  useEffect(() => {
    if (!archiveOpen) {
      setFocusedCertificate(0);
      return;
    }

    const track = trackRef.current;
    if (!track) return;

    let frameId = null;

    const handleScroll = () => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        updateTimelineFocus();
      });
    };

    updateTimelineFocus();
    track.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      track.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [archiveOpen]);

  const latestCertificate = certificates[0];

  return (
    <>
      <section
        id="experience"
        className="experience"
        ref={sectionRef}
      >
        {/* BACKGROUND */}

        <div
          className="experience-bg-word"
          aria-hidden="true"
        >
          REV
        </div>

        <div
          className="experience-orbit experience-orbit-one"
          aria-hidden="true"
        />

        <div
          className="experience-orbit experience-orbit-two"
          aria-hidden="true"
        />

        <div className="experience-container">

          {/* ==================================
              HEADER
          ================================== */}

          <header className="experience-header">

            <div className="experience-label">
              QUALIFICATIONS & EXPERIENCE
            </div>

            <div className="experience-heading-row">

              <h2>
                Knowledge
                <br />
                <span>in motion.</span>
              </h2>

              <div className="experience-header-copy">

                <div className="experience-header-line" />

                <p>
                  Combining ongoing academic
                  development, football experience,
                  and continued professional
                  education.
                </p>

                <span>
                  A foundation built around
                  physiotherapy, rehabilitation,and
                  recovery.
                </span>

              </div>

            </div>

          </header>

          {/* ==================================
              MAIN EXPERIENCE CARDS
          ================================== */}

          <div className="experience-feature-grid">

            {/* DPT */}

            <article className="experience-feature experience-feature-education">

              <div className="experience-feature-top">
                <span>EDUCATION</span>

                <span className="experience-feature-icon">
                  +
                </span>
              </div>

              <div className="experience-feature-content">

                <span className="experience-kicker">
                  ONGOING EDUCATION
                </span>

                <h3>
                  Doctor of
                  <br />
                  <span>
                    Physical Therapy.
                  </span>
                </h3>

                <p>
                  Currently pursuing my Doctor of
                  Physical Therapy (DPT) at Saint
                  Joseph University of Beirut (USJ),
                  while continuing to develop my
                  clinical knowledge and skills
                  through ongoing education and
                  professional development.
                </p>

              </div>

              <div className="experience-feature-footer">

                <span>
                  SAINT JOSEPH UNIVERSITY OF BEIRUT
                </span>

                <strong>USJ</strong>

              </div>

            </article>

            {/* FOOTBALL */}

            <article className="experience-feature experience-feature-sport">

              <div className="experience-feature-top">

                <span>FOOTBALL & SPORTS</span>

                <span className="experience-feature-icon">
                  +
                </span>

              </div>

              <div className="experience-feature-content">

                <span className="experience-kicker">
                  NEJMEH SPORTING CLUB
                </span>

                <h3>
                  From rehab
                  <br />
                  <span>
                    to the pitch.
                  </span>
                </h3>

                <p>
                  Currently working with Nejmeh
                  Sporting Club&apos;s Women&apos;s
                  Football Program, supporting
                  athletes through injury management,
                  rehabilitation, physical
                  preparation, recovery, and
                  return-to-sport processes.
                </p>

                <div className="experience-teams">

                  <div>
                    <span className="team-dot" />
                    <strong>
                      U15 Women&apos;s Team
                    </strong>
                  </div>

                  <div>
                    <span className="team-dot" />
                    <strong>
                      U17 Women&apos;s Team
                    </strong>
                  </div>

                  <div>
                    <span className="team-dot" />
                    <strong>
                      Women&apos;s First Team
                    </strong>
                  </div>

                </div>

              </div>

              <div className="experience-feature-footer">

                <span>
                  FOOTBALL / REHAB / PERFORMANCE
                </span>

                <strong>NSC</strong>

              </div>

            </article>

          </div>

          {/* ==================================
              CONTINUING EDUCATION
          ================================== */}

          <div className="experience-learning">

            <div className="experience-learning-header">

              <div>

                <span className="experience-learning-label">
                  CONTINUING EDUCATION
                </span>

                <h3>
                  Always learning.
                  <br />
                  <span>
                    Always evolving.
                  </span>
                </h3>

              </div>

              <div className="experience-learning-side">

                <strong>
                  {String(certificates.length).padStart(2, "0")}
                </strong>

                <span>
                  CREDENTIALS
                </span>

                <p>
                  Continued professional development
                  across clinical practice,
                  rehabilitation, football medicine,
                  recovery, and performance.
                </p>

              </div>

            </div>

            {/* ==================================
                CERTIFICATE ARCHIVE
            ================================== */}

            <div
              className={`certificate-archive ${
                archiveOpen
                  ? "certificate-archive-open"
                  : ""
              }`}
            >

              {/* ================================
                  SMALL FEATURED CERTIFICATE
              ================================ */}

              <article className="certificate-featured">

                <button
                  className="certificate-featured-image"
                  type="button"
                  onClick={() => openCertificate(0)}
                  aria-label="View Dry Needling certificate"
                >
                  <img
                    src={latestCertificate.image}
                    alt="Dry Needling certificate"
                  />

                  <span className="certificate-featured-view">
                    <span>VIEW</span>
                    <strong>↗</strong>
                  </span>
                </button>

                <div className="certificate-featured-content">

                  <div className="certificate-featured-top">

                    <span>
                      LATEST CREDENTIAL
                    </span>

                    <span className="certificate-featured-number">
                      01
                    </span>

                  </div>

                  <div className="certificate-featured-main">

                    <div className="certificate-featured-date">
                      <strong>
                        {latestCertificate.date}
                      </strong>

                      <span>
                        {latestCertificate.month}{" "}
                        {latestCertificate.year}
                      </span>
                    </div>

                    <div>
                      <span className="certificate-featured-category">
                        {latestCertificate.category}
                      </span>

                      <h4>
                        {latestCertificate.title}
                      </h4>

                      <p>
                        {latestCertificate.detail}
                      </p>
                    </div>

                  </div>

                  <div className="certificate-featured-footer">

                    <span>
                      {latestCertificate.provider}
                    </span>

                    <button
                      type="button"
                      className="certificate-expand-button"
                      onClick={toggleArchive}
                      aria-expanded={archiveOpen}
                    >
                      {archiveOpen
                        ? "COLLAPSE ARCHIVE"
                        : "VIEW ALL CREDENTIALS"}

                      <span>
                        {archiveOpen ? "↑" : "→"}
                      </span>
                    </button>

                  </div>

                </div>

              </article>

              {/* ================================
                  EXPANDED ARCHIVE
              ================================ */}

              <div
                className="certificate-timeline-shell"
                aria-hidden={!archiveOpen}
              >

                <div className="certificate-timeline-header">

                  <div>
                    <span>
                      CREDENTIAL ARCHIVE
                    </span>

                    <strong>
                      NEWEST
                      <i />
                      OLDEST
                    </strong>
                  </div>

                  <div className="certificate-timeline-actions">

                    <div
                      className="certificate-focus-counter"
                      aria-live="polite"
                    >
                      <span>CURRENT</span>
                      <strong>
                        {String(focusedCertificate + 1).padStart(2, "0")}
                        <i>/</i>
                        {String(certificates.length).padStart(2, "0")}
                      </strong>
                    </div>

                    <div className="certificate-timeline-nav">

                    <button
                      type="button"
                      onClick={() =>
                        scrollArchive("previous")
                      }
                      aria-label="Scroll certificates left"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        scrollArchive("next")
                      }
                      aria-label="Scroll certificates right"
                    >
                      →
                    </button>

                    </div>

                  </div>

                </div>

                <div
                  className="certificate-timeline"
                  style={{
                    "--timeline-progress": `${
                      certificates.length > 1
                        ? (focusedCertificate /
                            (certificates.length - 1)) *
                          100
                        : 100
                    }%`,
                  }}
                >

                  <div className="certificate-timeline-line" />

                  <div
                    className="certificate-track"
                    ref={trackRef}
                  >

                    {certificates.map(
                      (certificate, index) => (
                        <article
                          className={`timeline-certificate ${
                            focusedCertificate === index
                              ? "timeline-certificate-active"
                              : ""
                          }`}
                          data-certificate-index={index}
                          key={`${certificate.title}-${certificate.detail}`}
                        >

                          <div className="timeline-date">

                            <strong>
                              {certificate.date}
                            </strong>

                            <span>
                              {certificate.month}
                              <br />
                              {certificate.year}
                            </span>

                          </div>

                          <div className="timeline-marker">
                            <span />
                          </div>

                          <button
                            type="button"
                            className="timeline-certificate-image"
                            onClick={() =>
                              openCertificate(index)
                            }
                            aria-label={`View ${certificate.title} certificate`}
                          >

                            <img
                              src={certificate.image}
                              alt={`${certificate.title} - ${certificate.detail}`}
                              loading={
                                index === 0
                                  ? "eager"
                                  : "lazy"
                              }
                            />

                            <span className="timeline-image-overlay">

                              <span>
                                VIEW CREDENTIAL
                              </span>

                              <strong>
                                ↗
                              </strong>

                            </span>

                          </button>

                          <div className="timeline-certificate-info">

                            <div className="timeline-certificate-meta">

                              <span>
                                {certificate.category}
                              </span>

                              <span>
                                {String(index + 1).padStart(
                                  2,
                                  "0"
                                )}
                              </span>

                            </div>

                            <h4>
                              {certificate.title}
                            </h4>

                            <p>
                              {certificate.detail}
                            </p>

                            <div className="timeline-provider">

                              <span>
                                {certificate.provider}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  openCertificate(index)
                                }
                              >
                                VIEW
                                <span>↗</span>
                              </button>

                            </div>

                          </div>

                        </article>
                      )
                    )}

                    <div
                      className="certificate-track-end"
                      aria-hidden="true"
                    >
                      <span>2024 — 2026</span>
                      <strong>
                        CONTINUING
                        <br />
                        TO LEARN
                      </strong>
                      <em>THE JOURNEY CONTINUES →</em>
                    </div>

                  </div>

                </div>

                <div className="certificate-swipe-hint">
                  <span>←</span>
                  DRAG / SWIPE TO EXPLORE
                  <span>→</span>
                </div>

              </div>

            </div>

          </div>

          {/* ==================================
              CLOSING
          ================================== */}

          <div className="experience-closing">

            <span>
              THE REVPHYSIO
            </span>

            <p>
              Keep learning.
              <br />
              Keep evolving.
              <br />
              <strong>
                Keep moving.
              </strong>
            </p>

            <div className="experience-closing-mark">
              R
            </div>

          </div>

        </div>
      </section>

      {/* ======================================
          CERTIFICATE LIGHTBOX
      ====================================== */}

      {activeCertificate !== null && (
        <div
          className="certificate-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
          onClick={closeCertificate}
        >

          <div
            className="certificate-lightbox-inner"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="certificate-lightbox-top">

              <div>

                <span>
                  CREDENTIAL
                </span>

                <strong>
                  {String(
                    activeCertificate + 1
                  ).padStart(2, "0")}
                  {" / "}
                  {String(
                    certificates.length
                  ).padStart(2, "0")}
                </strong>

              </div>

              <button
                type="button"
                className="certificate-close"
                onClick={closeCertificate}
                aria-label="Close certificate"
              >

                <span>
                  CLOSE
                </span>

                <strong>
                  ×
                </strong>

              </button>

            </div>

            <div className="certificate-lightbox-image">

              <img
                src={
                  certificates[
                    activeCertificate
                  ].image
                }
                alt={
                  certificates[
                    activeCertificate
                  ].title
                }
              />

            </div>

            <div className="certificate-lightbox-bottom">

              <div className="certificate-lightbox-info">

                <span>
                  {
                    certificates[
                      activeCertificate
                    ].category
                  }
                </span>

                <h3>
                  {
                    certificates[
                      activeCertificate
                    ].title
                  }
                </h3>

                <p>
                  {
                    certificates[
                      activeCertificate
                    ].fullDate
                  }
                  {" · "}
                  {
                    certificates[
                      activeCertificate
                    ].detail
                  }
                  {" · "}
                  {
                    certificates[
                      activeCertificate
                    ].provider
                  }
                </p>

              </div>

              <div className="certificate-controls">

                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous certificate"
                >
                  <span>←</span>
                  PREVIOUS
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next certificate"
                >
                  NEXT
                  <span>→</span>
                </button>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Experience;