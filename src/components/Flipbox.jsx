import React, { useState } from "react";

const Flipbox = ({ frontContent, flipContent, button }) => {
  const [flipped, setFlipped] = useState(false);
  function toggleFlip() {
    setFlipped(!flipped);
  }

  return (
    <div className="post" onMouseOver={toggleFlip} onMouseLeave={toggleFlip}>
      {frontContent}
      <p style={{ transform: !flipped ? "rotateY(180deg)" : "none" }}>
        {flipContent}
      </p>
      {button ? <button>{button}</button> : null}
    </div>
  );
};

export default Flipbox;
