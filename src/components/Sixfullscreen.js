import { useEffect, useState } from "react";
import video from "../images/six_video.mp4"

function Sixfullscreen() {
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

export default Sixfullscreen;
