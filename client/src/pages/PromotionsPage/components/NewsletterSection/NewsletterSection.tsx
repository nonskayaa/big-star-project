import classes from "./NewsletterSection.module.sass";

import NewsletterForm from "../NewsletterForm/NewsletterForm";
import SuccessfullSubmitted from "../SuccessfullSubmitted/SuccessfullSubmitted";

import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

export default function NewsletterSection() {
  const [isSuccessfullSubmitted, setIsSuccessfullSubmitted] = useState(false);

  const confettiProps = {
    duration: 3500,
    particleCount: 100,
    colors: ["#704AB4", "#f6da28"],
  };

  return (
    <div className={classes.newsletter__section}>
      {isSuccessfullSubmitted ? (
        <>
          <ConfettiExplosion {...confettiProps} />
          <SuccessfullSubmitted />
        </>
      ) : (
        <>
          <NewsletterForm
            setIsSuccessfullSubmitted={setIsSuccessfullSubmitted}
          />
        </>
      )}
    </div>
  );
}
