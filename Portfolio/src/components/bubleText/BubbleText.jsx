// BubbleText.js
import React, { useState, useEffect } from "react";
import styles from "./bubble.module.css";

const BubbleText = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <h2
      className={`${styles.hoverText} ${textVisible && styles.typingAnimation} ${hovered && styles.hovered} ${styles.increasedTextSize} ${styles.bubbleAnimation}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {"Salinda Gunarathna".split("").map((child, idx) => (
        <span key={idx}>{child}</span>
      ))}
    </h2>
  );
};

export default BubbleText;
