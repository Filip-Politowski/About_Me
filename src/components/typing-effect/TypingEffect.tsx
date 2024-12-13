import React, { useState, useEffect } from "react";
import "./typingEffect.scss";

type TypingEffectProps = {
  text1: string;
  text2?: string;
  typingSpeed?: number;
  eraseSpeed?: number;
  loop?: boolean;
};

const TypingEffect: React.FC<TypingEffectProps> = ({
  text1,
  text2,
  typingSpeed = 100,
  eraseSpeed = 50,
  loop = false,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState(text1);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Pisanie liter

      if (index < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentText.charAt(index));
          setIndex((prev) => prev + 1);
        }, typingSpeed);
      } else if (loop) {
        setTimeout(() => setIsTyping(false), 3000);
      }
    } else {
      // Usuwanie liter
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, eraseSpeed);
      } else if (loop) {
        setTimeout(() => setIsTyping(true), 1000);
        setCurrentText((prev) => (prev === text1 ? text2 || text1 : text1));
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    index,
    isTyping,
    text1,
    text2,
    currentText,
    typingSpeed,
    eraseSpeed,
    loop,
  ]);

  return (
    <div className="typing-effect">
      {displayedText}
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingEffect;
