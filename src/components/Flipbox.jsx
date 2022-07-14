import React, { useState } from "react";

const Flipbox = ({ frontContent, flipContent, button }) => {
  const [flipped, setFlipped] = useState(true);

  return (
    <div
      className="post"
      onMouseOver={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <h2>{frontContent}</h2>
      <p style={flipped ? { opacity: 1 } : { opacity: 0 }}>{flipContent}</p>
      {button ? <button>{button}</button> : null}
    </div>
  );
};

export default Flipbox;
