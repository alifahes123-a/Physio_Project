import { useEffect, useState } from "react";
import "./PhysioTips.css";
import tipsimg from "../assets/tips.png";

const tips = [
  {
    category: "MOVEMENT",
    title: "Movement doesn't have to be perfect.",
    text: "Consistent, comfortable movement is often more useful than waiting for the perfect exercise or perfect time to start.",
  },
  {
    category: "RECOVERY",
    title: "Recovery is part of the process.",
    text: "Training creates a stimulus. Recovery gives your body the opportunity to adapt to it.",
  },
  {
    category: "MOBILITY",
    title: "Mobility is more than stretching.",
    text: "Useful mobility combines available range of motion with the strength and control to use that range.",
  },
  {
    category: "STRENGTH",
    title: "Build strength gradually.",
    text: "Progressive increases in challenge give your body time to adapt while you build confidence and capacity.",
  },
  {
    category: "MOVEMENT",
    title: "Change position regularly.",
    text: "If you spend long periods sitting or standing, changing position and moving regularly can help break up prolonged static time.",
  },
  {
    category: "REHABILITATION",
    title: "Rehab is more than symptom relief.",
    text: "A rehabilitation plan can also work on movement, strength, control, confidence, and the demands of the activities you want to return to.",
  },
  {
    category: "WARM-UP",
    title: "Prepare for what you're about to do.",
    text: "A useful warm-up should gradually prepare your body for the movements and intensity of the activity ahead.",
  },
  {
    category: "CONSISTENCY",
    title: "Small sessions still count.",
    text: "A shorter session you can perform consistently may be more useful than an ambitious plan you rarely complete.",
  },
  {
    category: "STRENGTH",
    title: "Control matters.",
    text: "Good strength work is not only about moving more weight. Control, technique, and appropriate progression matter too.",
  },
  {
    category: "RECOVERY",
    title: "Progress isn't always linear.",
    text: "Rehabilitation can include easier and harder days. Look at the overall direction of progress rather than judging it from one session.",
  },
  {
    category: "MOVEMENT",
    title: "Your body adapts to what you ask of it.",
    text: "Regular exposure to appropriate movement and exercise helps build the capacity needed for everyday activities and sport.",
  },
  {
    category: "MOBILITY",
    title: "Use the range you build.",
    text: "When working on mobility, consider combining range-of-motion work with exercises that help you control that new range.",
  },
  {
    category: "TRAINING",
    title: "More isn't always better.",
    text: "Training volume should match your current capacity, goals, and recovery. Adding more work is not automatically better progress.",
  },
  {
    category: "RETURN TO SPORT",
    title: "Returning is a process.",
    text: "A return to sport often involves rebuilding the strength, movement, confidence, and sport-specific capacity required for your activity.",
  },
  {
    category: "INJURY PREVENTION",
    title: "Build capacity before demand rises.",
    text: "Gradually preparing your body for increases in training or activity can help it tolerate those demands more effectively.",
  },
  {
    category: "REHABILITATION",
    title: "Understand the goal of your exercise.",
    text: "Knowing why an exercise is included can make your rehabilitation plan easier to follow and progress.",
  },
  {
    category: "MOVEMENT",
    title: "There isn't one perfect posture.",
    text: "Instead of trying to hold one position all day, give yourself opportunities to change position and move regularly.",
  },
  {
    category: "TRAINING",
    title: "Technique should support the goal.",
    text: "Exercise technique can vary depending on the person and the purpose of the exercise. The goal is controlled movement that fits the task.",
  },
  {
    category: "RECOVERY",
    title: "Rest and movement can work together.",
    text: "Recovery does not always mean complete inactivity. The right amount of appropriate movement can be part of the recovery process.",
  },
  {
    category: "STRENGTH",
    title: "Strength is useful beyond the gym.",
    text: "Building strength can support everyday tasks, recreational activities, sport, and confidence in movement.",
  },
  {
    category: "MOBILITY",
    title: "Don't chase flexibility without a reason.",
    text: "The amount of mobility you need depends on the activities you want to perform and the positions those activities require.",
  },
  {
    category: "PROGRESS",
    title: "Track what matters to you.",
    text: "Progress can include changes in strength, movement, confidence, tolerance, function, and your ability to return to meaningful activities.",
  },
  {
    category: "REHABILITATION",
    title: "Your rehab should have direction.",
    text: "Exercises are most useful when they connect to a clear goal and progress as your ability changes.",
  },
  {
    category: "TRAINING",
    title: "Give your body time to adapt.",
    text: "Increasing exercise difficulty too quickly can exceed your current capacity. Progress gradually and allow adaptation to occur.",
  },
  {
    category: "MOVEMENT",
    title: "Confidence is part of movement.",
    text: "Rehabilitation is not only about physical capacity. Gradually rebuilding confidence in movement can also be an important part of returning to activity.",
  },
  {
    category: "RECOVERY",
    title: "Listen to patterns, not just moments.",
    text: "How you respond across several sessions can be more informative than focusing on one isolated good or bad day.",
  },
  {
    category: "STRENGTH",
    title: "Quality before complexity.",
    text: "An exercise does not need to look complicated to be effective. A simple movement performed with purpose can be highly useful.",
  },
  {
    category: "ACTIVITY",
    title: "Build back gradually.",
    text: "When returning to an activity after time away, gradually increasing duration, intensity, and frequency can help rebuild tolerance.",
  },
  {
    category: "REHABILITATION",
    title: "Ask questions about your rehab.",
    text: "Understanding what you're working on, why you're doing it, and how it should progress can help you take a more active role in rehabilitation.",
  },
  {
    category: "PERFORMANCE",
    title: "Build the foundation first.",
    text: "Strength, control, mobility, and tolerance provide a foundation that can then be developed toward more demanding performance goals.",
  },
];

function PhysioTips() {
  const [currentTip, setCurrentTip] = useState(null);
  const [tipKey, setTipKey] = useState(0);

  const getRandomTip = (previousTip = null) => {
    if (tips.length === 1) {
      return tips[0];
    }

    let newTip;

    do {
      const randomIndex = Math.floor(Math.random() * tips.length);
      newTip = tips[randomIndex];
    } while (newTip === previousTip);

    return newTip;
  };

  useEffect(() => {
    setCurrentTip(getRandomTip());
  }, []);

  const showAnotherTip = () => {
    setCurrentTip((previousTip) => getRandomTip(previousTip));
    setTipKey((previousKey) => previousKey + 1);
  };

  if (!currentTip) {
    return null;
  }

  return (
    <section id="physio-tips" className="physio-tips">
      {/* BACKGROUND RUNNER */}
     <img
  src={tipsimg}
  alt=""
  className="physio-tips-runner"
  aria-hidden="true"
/>

      {/* BACKGROUND TIP TEXT */}
      <div
        className="physio-tips-bg-text"
        aria-hidden="true"
      >
        TIP
      </div>

      {/* DECORATIVE CIRCLES */}
      <div
        className="physio-tips-circle physio-tips-circle-one"
        aria-hidden="true"
      />

      <div
        className="physio-tips-circle physio-tips-circle-two"
        aria-hidden="true"
      />

      <div className="physio-tips-container">
        {/* LEFT SIDE */}
        <div className="physio-tips-heading">
          <div className="physio-tips-label">
            <span>+</span>
            PHYSIO TIP
          </div>

          <h2>
            <span className="physio-title-line">
              A little
            </span>

            <span className="physio-title-line">
              knowledge.
            </span>

            <span className="physio-title-line physio-title-green">
              Every visit.
            </span>
          </h2>

          <p>
            One simple movement and rehabilitation tip,
            selected for you each time you visit.
          </p>
        </div>

        {/* TIP CARD */}
        <article
          className="physio-tip-card"
          key={tipKey}
        >
          <div className="physio-tip-top">
            <span className="physio-tip-category">
              {currentTip.category}
            </span>

            <span className="physio-tip-mark">
              +
            </span>
          </div>

          <div className="physio-tip-content">
            <span className="physio-tip-small">
              TODAY'S TIP
            </span>

            <h3>
              {currentTip.title}
            </h3>

            <p>
              {currentTip.text}
            </p>
          </div>

          <div className="physio-tip-bottom">
            <span>
              RECOVER. REBUILD.
              <strong> REVOLUTIONIZE.</strong>
            </span>

            <button
              type="button"
              onClick={showAnotherTip}
              className="physio-tip-next"
              aria-label="Show another physiotherapy tip"
            >
              <span>
                SHOW ANOTHER TIP
              </span>

              <span className="physio-tip-next-circle">
                →
              </span>
            </button>
          </div>
        </article>

        {/* DISCLAIMER */}
        <p className="physio-tips-note">
          General educational information only.
          Individual needs vary and may require a
          physiotherapy assessment.
        </p>
      </div>
    </section>
  );
}

export default PhysioTips;