import React from "react";
// import team_logo from "../images/team_a.png";
import wtcf_logo from "../images/wtcf_logo.png";
import thunder from "../images/thunder.png";
import "../styles/toss.css"

function Toss(props) {
  return (
    <div className="d-flex p-5 flex-column align-items-center bg_image">
      <div className="text-white mt-3 mb-5">
        <img className="wtcf_logo" src={wtcf_logo} alt="Team_logo" />
      </div>
      <div className="d-flex align-items-baseline mb-5">
        <div>
          <img className="team_a_logo" src={"https://dev-api.cricdost.com"+props.team1_logo} alt="Team_logo" />
        </div>
        <div>
          <img className="thunder_img" src={thunder} alt="Team_logo" />
        </div>
        <div>
          <img className="team_b_logo" src={"https://dev-api.cricdost.com"+props.team2_logo} alt="Team_logo" />
        </div>
      </div>
      <div className="teamname text-white m-4">{props.data.TOSS_WON_TEAM}</div>
      <div className="text-white tosstext mb-5">{props.data.TOSS_WON_TEAM} WON THE TOSS & CHOOSE TO {props.data.TOSS_DECISION}</div>
    </div>
  );
}

export default Toss;
