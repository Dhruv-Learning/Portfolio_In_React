import React, { useEffect, useState } from "react";
import "./Cursor3D.css";

const Cursor3D = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    // update position
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseDown = () => setClicked(true);
    const mouseUp = () => setClicked(false);

    const mouseOverLink = () => setLinkHover(true);
    const mouseOutLink = () => setLinkHover(false);

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mousedown", mouseDown);
    document.addEventListener("mouseup", mouseUp);

    // detect link hover
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseover", mouseOverLink);
      el.addEventListener("mouseout", mouseOutLink);
    });

    return () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mousedown", mouseDown);
      document.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${clicked ? "clicked" : ""} ${
        linkHover ? "link-hover" : ""
      }`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default Cursor3D;
