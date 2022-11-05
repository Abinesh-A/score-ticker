import "../styles/six.css";
import four_bg from "../images/four_bg.png";
import { useEffect, useState } from "react";

function Six() {
  const [isshow, setIsshow] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setIsshow(true);
    }, 3000);
  });
  return isshow ? (
    ""
  ) : (
    <div className="Six">
      <div>
        <img className="six_img" alt="6_img" src={four_bg}></img>
      </div>
      <div className="Six_value">6</div>
    </div>
  );
}

export default Six;
