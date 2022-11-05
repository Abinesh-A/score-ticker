import "../styles/fourfullscreen.css";
import { useEffect, useState } from "react";
// import four_fill_bg from "../images/inningsbreak_img.png"
import video from "../images/four_video.mp4"

function Fourfullscreen() {
  const [isshow, setIsshow] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setIsshow(true);
    }, 3000);
  });
  return isshow ? "" : (
      <video autoPlay  width="100%" muted loop>
  <source src={video} type="video/mp4" />
  Your browser does not support HTML5 video.
</video>
  
  );
}

export default Fourfullscreen;
