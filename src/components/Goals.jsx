import { useEffect, useRef } from "react";
import "./Goals.css";

function Goals() {
  const goalsRef = useRef(null);

  useEffect(() => {
    const section = goalsRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("goals-visible");
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

  const goals = [
    {
      label: "KNOW",
      title: "Understand",
      highlight: "your body.",
      text: "Know what's happening and why.",
      symbol: "?",
    },
    {
      label: "BUILD",
      title: "Build your",
      highlight: "capacity.",
      text: "Develop strength, movement, and confidence.",
      symbol: "+",
    },
    {
      label: "RETURN",
      title: "Return to what",
      highlight: "matters.",
      text: "Daily life. Work. Sport. Performance.",
      symbol: "→",
    },
  ];

  return (
    <section
      id="goals"
      className="goals"
      ref={goalsRef}
    >
      <div
        className="goals-orbit goals-orbit-one"
        aria-hidden="true"
      />

      <div
        className="goals-orbit goals-orbit-two"
        aria-hidden="true"
      />

      <div
        className="goals-bg-word"
        aria-hidden="true"
      >
        REV
      </div>

      <div className="goals-container">
        {/* HEADER */}

        <header className="goals-header">
          <div className="goals-title">
            <div className="goals-label">
              <span className="goals-label-dot" />
              OUR GOALS
            </div>

            <h2>
              More than
              <br />
              <span>feeling better.</span>
            </h2>
          </div>

          <div className="goals-intro">
            <div className="goals-intro-line" />

            <p>
              My goal is to change the way people
              experience physiotherapy.
            </p>

            <span>
              Rev Physio is about creating long-term
              change — not simply chasing short-term
              relief.
            </span>
          </div>
        </header>

        {/* GOALS */}

        <div className="goals-grid">
          {goals.map((goal) => (
            <article
              className="goal-card"
              key={goal.label}
            >
              <div className="goal-card-top">
                <span className="goal-small-title">
                  {goal.label}
                </span>

                <span className="goal-symbol">
                  {goal.symbol}
                </span>
              </div>

              <div className="goal-card-content">
                <h3>
                  {goal.title}
                  <br />
                  <span>{goal.highlight}</span>
                </h3>

                <p>{goal.text}</p>
              </div>

              <div
                className="goal-card-line"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        {/* PHILOSOPHY */}

        <div className="goals-philosophy">
          <div className="goals-philosophy-label">
            <span />
            OUR PHILOSOPHY
          </div>

          <div className="goals-philosophy-layout">
            <h3>
              We don't just
              <br />
              treat movement.
            </h3>

            <div className="goals-philosophy-copy">
              <p>
                We help you
                <strong> understand it.</strong>
              </p>

              <p>
                We help you
                <strong> rebuild it.</strong>
              </p>

              <p>
                We help you
                <strong> improve it.</strong>
              </p>
            </div>
          </div>

          <div className="goals-final">
            <span>RECOVER.</span>
            <span>REBUILD.</span>
            <strong>REVOLUTIONIZE.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals;