import "../styles/Out.css";
import four_bg from "../images/four_bg.png";
import { useEffect, useState } from "react";

function Out() {
  const [isshow, setIsshow] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setIsshow(true);
    }, 3000);
  });
  return isshow ? (
    ""
  ) : (
    <div className="out">
      <img className="out_img" alt="out_img" src={four_bg}></img>

      <div className="Out_value d-flex justify-content-center">Out</div>
    </div>
  );
}

export default Out;
