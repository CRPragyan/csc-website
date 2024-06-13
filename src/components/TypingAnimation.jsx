import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const fullText = "Transforming Lives through Digital Excellence";
  const typingSpeed = 100; // Adjust typing speed (in milliseconds)
  // const resetDelay = 4000; // Delay before restarting the typing animation

  useEffect(() => {
    let index = 0;
    const type = () => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index < fullText.length) {
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(() => {
          setText("");
          setTimeout(type, typingSpeed);
        }, resetDelay);
      }
    };
    type();
  }, []);

  return (
    <h1 className="text-white md:text-5xl text-3xl mb-4 tracking-wide leading-12">
      {text}
      <span className="inline-block w-1 bg-white animate-blink">|</span>
    </h1>
  );
};

export default TypingAnimation;
