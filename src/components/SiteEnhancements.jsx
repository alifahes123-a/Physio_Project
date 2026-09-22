import { useEffect, useMemo, useState } from "react";
import "./SiteEnhancements.css";

const checkIns = [
  {
    id: "pain",
    label: "Pain",
    response:
      "Pain can change how you move. Keep things comfortable and avoid forcing through sharp or worsening symptoms.",
    action: "ASK THE PHYSIO",
    target: "ask",
  },
  {
    id: "stiff",
    label: "Stiff",
    response:
      "A little comfortable movement can often feel better than staying still. Start easy and build gradually.",
    action: "VIEW SERVICES",
    target: "services",
  },
  {
    id: "recovering",
    label: "Recovering",
    response:
      "Recovery is a process. Consistency, appropriate loading, and gradual progression matter more than rushing.",
    action: "VIEW SERVICES",
    target: "services",
  },
  {
    id: "good",
    label: "Feeling Good",
    response:
      "Great. Keep building capacity with regular movement, strength work, recovery, and smart progression.",
    action: "KEEP EXPLORING",
    target: "experience",
  },
];

function SiteEnhancements() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [selectedCheckIn, setSelectedCheckIn] = useState(null);

  const selected = useMemo(
    () => checkIns.find((item) => item.id === selectedCheckIn),
    [selectedCheckIn]
  );

  useEffect(() => {
    const updateScrollUI = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        scrollable > 0
          ? Math.min(100, Math.max(0, (scrollTop / scrollable) * 100))
          : 0
      );

      setShowBackToTop(scrollTop > Math.max(520, window.innerHeight * 0.7));
    };

    updateScrollUI();
    window.addEventListener("scroll", updateScrollUI, { passive: true });
    window.addEventListener("resize", updateScrollUI);

    return () => {
      window.removeEventListener("scroll", updateScrollUI);
      window.removeEventListener("resize", updateScrollUI);
    };
  }, []);

  useEffect(() => {
    const navLinks = Array.from(
      document.querySelectorAll('nav a[href^="#"], .navbar a[href^="#"]')
    );

    if (!navLinks.length) return;

    const linksById = new Map();

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      const section = document.getElementById(id);

      if (section) linksById.set(id, { link, section });
    });

    const entries = Array.from(linksById.values());
    if (!entries.length) return;

    const setActive = (activeId) => {
      entries.forEach(({ link, section }) => {
        const active = section.id === activeId;
        link.classList.toggle("rev-nav-active", active);

        if (active) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const observer = new IntersectionObserver(
      (observed) => {
        const visible = observed
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    entries.forEach(({ section }) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setCheckInOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const handleCheckInAction = () => {
    if (!selected) return;

    setCheckInOpen(false);

    if (selected.target === "ask") {
      const askButton =
        document.querySelector(".ask-physio-trigger") ||
        document.querySelector('[aria-label*="Ask the Physio"]') ||
        document.querySelector('[aria-label*="Ask The Physio"]');

      if (askButton) {
        askButton.click();
        return;
      }

      const contact = document.getElementById("contact");
      contact?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    document
      .getElementById(selected.target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="rev-scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      </div>

      <button
        type="button"
        className={`rev-back-top ${showBackToTop ? "is-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <strong>R</strong>
        <span>↑</span>
      </button>

      <aside className={`rev-checkin ${checkInOpen ? "is-open" : ""}`}>
        <button
          type="button"
          className="rev-checkin-trigger"
          onClick={() => setCheckInOpen((current) => !current)}
          aria-expanded={checkInOpen}
          aria-controls="rev-checkin-panel"
        >
          <span className="rev-checkin-dot" />
          <span>QUICK CHECK-IN</span>
          <strong>{checkInOpen ? "×" : "+"}</strong>
        </button>

        <div
          id="rev-checkin-panel"
          className="rev-checkin-panel"
          aria-hidden={!checkInOpen}
        >
          <div className="rev-checkin-head">
            <span>REV / TODAY</span>
            <strong>How are you feeling today?</strong>
          </div>

          <div className="rev-checkin-options">
            {checkIns.map((item) => (
              <button
                key={item.id}
                type="button"
                className={selectedCheckIn === item.id ? "is-selected" : ""}
                onClick={() => setSelectedCheckIn(item.id)}
              >
                <span>{item.label}</span>
                <i />
              </button>
            ))}
          </div>

          <div className={`rev-checkin-result ${selected ? "is-visible" : ""}`}>
            {selected && (
              <>
                <p>{selected.response}</p>

                <button type="button" onClick={handleCheckInAction}>
                  {selected.action}
                  <span>→</span>
                </button>
              </>
            )}
          </div>

          <small>
            General information only — not a diagnosis or medical assessment.
          </small>
        </div>
      </aside>
    </>
  );
}

export default SiteEnhancements;
