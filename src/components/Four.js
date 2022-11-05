import "../styles/four.css";
import four_bg from "../images/four_bg.png";
import { useEffect, useState } from "react";

function Four() {
  const [isshow, setIsshow] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setIsshow(true);
    }, 3000);
  });
  return isshow ? (
    ""
  ) : (
    <div className="Four">
      <img className="four_img" alt="four_img" src={four_bg}></img>
      <div className="four_value">4</div>
    </div>
  );
}

export default Four;
