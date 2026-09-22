import { useEffect, useRef, useState } from "react";
import "./AskPhysio.css";

function AskPhysio() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");

  const panelRef = useRef(null);

  // WhatsApp number:
  // Lebanon country code +961 + 76 917 602
  const whatsappNumber = "96176917602";

  const closePanel = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePanel();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        panelRef.current &&
        !panelRef.current.contains(event.target)
      ) {
        closePanel();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !topic || !question.trim()) {
      return;
    }

    const message = `Hello Ali,

My name is ${name.trim()}.

Topic: ${topic}

Question:
${question.trim()}

I am contacting you through The RevPhysio website.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className={`ask-physio ${
        isOpen ? "ask-physio-open" : ""
      }`}
      ref={panelRef}
    >
      {/* POPUP */}
      <div
        className="ask-physio-panel"
        role="dialog"
        aria-modal="false"
        aria-hidden={!isOpen}
        aria-labelledby="ask-physio-title"
      >
        <div className="ask-physio-panel-top">
          <div>
            <span className="ask-physio-small-label">
              THE REVPHYSIO
            </span>

            <h2 id="ask-physio-title">
              Ask the
              <br />
              <span>Physio.</span>
            </h2>
          </div>

          <button
            className="ask-physio-close"
            onClick={closePanel}
            type="button"
            aria-label="Close Ask the Physio"
          >
            ×
          </button>
        </div>

        <p className="ask-physio-intro">
          Have a general physiotherapy question?
          Send it directly to Ali through WhatsApp.
        </p>

        <form
          className="ask-physio-form"
          onSubmit={handleSubmit}
        >
          <div className="ask-physio-field">
            <label htmlFor="ask-name">
              YOUR NAME
            </label>

            <input
              id="ask-name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              required
            />
          </div>

          <div className="ask-physio-field">
            <label htmlFor="ask-topic">
              TOPIC
            </label>

            <select
              id="ask-topic"
              value={topic}
              onChange={(event) =>
                setTopic(event.target.value)
              }
              required
            >
              <option value="" disabled>
                Select a topic
              </option>

              <option value="Pain or discomfort">
                Pain or discomfort
              </option>

              <option value="Sports injury">
                Sports injury
              </option>

              <option value="Post-operative rehabilitation">
                Post-operative rehabilitation
              </option>

              <option value="Mobility and flexibility">
                Mobility and flexibility
              </option>

              <option value="Strength and conditioning">
                Strength and conditioning
              </option>

              <option value="Return to sport">
                Return to sport
              </option>

              <option value="Injury prevention">
                Injury prevention
              </option>

              <option value="General physiotherapy question">
                General physiotherapy question
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          <div className="ask-physio-field">
            <label htmlFor="ask-question">
              YOUR QUESTION
            </label>

            <textarea
              id="ask-question"
              rows="4"
              placeholder="What would you like to ask?"
              value={question}
              onChange={(event) =>
                setQuestion(event.target.value)
              }
              required
            />
          </div>

          <button
            className="ask-physio-send"
            type="submit"
          >
            <span>Send via WhatsApp</span>

            <span className="ask-physio-send-arrow">
              →
            </span>
          </button>
        </form>

        <p className="ask-physio-disclaimer">
          This feature is for general questions and
          does not replace an in-person clinical
          assessment.
        </p>

        <div
          className="ask-physio-rev"
          aria-hidden="true"
        >
          REV
        </div>
      </div>

      {/* FLOATING BUTTON */}
      <button
        className="ask-physio-trigger"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
        aria-expanded={isOpen}
        aria-label={
          isOpen
            ? "Close Ask the Physio"
            : "Ask the Physio"
        }
      >
        <span className="ask-physio-trigger-icon">
          +
        </span>

        <span className="ask-physio-trigger-text">
          <strong>ASK THE PHYSIO</strong>
          <small>Have a question?</small>
        </span>

        <span className="ask-physio-trigger-arrow">
          {isOpen ? "×" : "→"}
        </span>
      </button>
    </div>
  );
}

export default AskPhysio;