import React, { useState, useEffect } from "react";
import Love from "./Love.png";   // :contentReference[oaicite:2]{index=2}
import Sad from "./Sad.png";     // :contentReference[oaicite:3]{index=3}
import Like from "./Like.png";   // (from img2.htm) :contentReference[oaicite:4]{index=4}
//import happy from "./happy.png";

function EmojiCounter(props) {
  const [pic, setPic] = useState(Love);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (props.pic === "Love") setPic(Love);
    else if (props.pic === "Like") setPic(Like);
    else if (props.pic === "Sad") setPic(Sad);
  }, [props.pic]);

  const ClickHandle = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={ClickHandle} style={{ margin: "10px", padding: "10px" }}>
      {count}
      <img
        src={pic}
        alt={props.pic}
        style={{ width: "40px", height: "40px", marginLeft: "10px" }}
      />
    </button>
  );
}

export default EmojiCounter;
