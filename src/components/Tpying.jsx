import { useState, useEffect, useCallback } from "react";

// eslint-disable-next-line react/prop-types
const TypingEffect = ({ phrases = ["I am a web developer", "I love coding", "React is awesome"], typingSpeed = 150, erasingSpeed = 75, pauseDuration = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const typeText = useCallback(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let currentIndex = displayedText.length;

    if (isTyping && currentIndex < currentPhrase.length) {
      setDisplayedText(currentPhrase.slice(0, currentIndex + 1));
    } else if (!isTyping && currentIndex > 0) {
      setDisplayedText(currentPhrase.slice(0, currentIndex - 1));
    } else if (!isTyping && currentIndex === 0) {
      setIsTyping(true);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    } else {
      // Pause before erasing
      setTimeout(() => setIsTyping(false), pauseDuration);
    }
  }, [displayedText, currentPhraseIndex, isTyping, phrases, pauseDuration]);

  useEffect(() => {
    const intervalId = setInterval(
      typeText,
      isTyping ? typingSpeed : erasingSpeed
    );
    return () => clearInterval(intervalId);
  }, [typeText, isTyping, typingSpeed, erasingSpeed]);

  return (
    <div className="typing-container">
      <p>{displayedText}<span className="cursor">|</span></p>
    </div>
  );
};

export default TypingEffect;