import "../styles/scoreboard2.css";
import team_logo from "../images/team_a.png";
import wtcf_logo from "../images/wtcf_logo.png";
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
// import Six from "../components/six";
// import Four from "../components/four";
// import Out from "../components/Out";
import Fourfullscreen from "./Fourfullscreen";
import Sixfullscreen from "./Sixfullscreen";
import Outfullscreen from "./Outfullscreen";
import Toss from "./Toss";

const ENDPOINT = "https://dev-api.cricdost.com:8085";
const MATCH_ID = 6770;

function Scoreboard2() {
  const [scores, setScores] = useState({
    team_name: "",
    target: "",
    runs: "",
    crr: "",
    rr: "",
    wickets: "",
    overs: "",
    striker: "",
    striker_runs: "",
    striker_balls: "",
    non_striker: "",
    non_striker_runs: "",
    non_striker_balls: "",
    bowler: "",
    bowler_data: "",
    extras: "",
    last_ball: "",
    toss_detail:""
  });

  const [overs, setOvers] = useState({
    curr_overs: [],
  });

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("connected", (data) => {
      console.log("connected");
    });
    socket.on("live_score_new", (data) => {
      console.log(data);
      let mainData = data;
      setScores({
        team_name: mainData.BATTING.TEAM_NAME,
        target: mainData.BATTING.TARGET,
        runs: mainData.BATTING.RUNS,
        crr: mainData.BATTING.CRR,
        rr: mainData.BATTING.RRR,
        wickets: mainData.BATTING.WICKETS,
        overs: mainData.BATTING.OVERS,
        striker: mainData.STRIKER.NAME,
        striker_runs: mainData.STRIKER.RUNS,
        striker_balls: mainData.NONSTRIKER.BALLS,
        non_striker: mainData.NONSTRIKER.NAME,
        non_striker_runs: mainData.NONSTRIKER.RUNS,
        non_striker_balls: mainData.NONSTRIKER.BALLS,
        bowler: mainData.BOWLER.NAME,
        bowler_data: mainData.BOWLER.BOWL_DATA,
        extras: mainData.BATTING.EXTRAS.EXTRAS_DETAIL,
        last_ball: mainData.LAST_BALL,
        team1_logo: mainData.TEAM_A.IMAGE_URL,
        team2_logo: mainData.TEAM_B.IMAGE_URL,
        toss_detail: mainData.TOSS
      });
      let curr_overs = data.CURRENT_OVER;
      setOvers({ curr_overs });
    });

    socket.emit("join", "match_id_" + MATCH_ID);
    socket.emit("get_score", MATCH_ID);

    return () => socket.disconnect();
  }, []);

  const [issquare, setIssquare] = useState(window.innerWidth < 900);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const issquares = window.innerWidth < 900;
        if (issquares !== issquare) setIssquare(issquares);
      },
      false
    );
  });
  // const [isshow, setIsshow] = useState(false);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsshow(true)
  //     console.log('This will run after 1 second!')
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);
  // if(scores.last_ball.RUN === 1){
  //   return <Six />
  // }
  // else if(scores.last_ball.RUN === 4)
  //   return <Four />
  // else if(scores.last_ball.RUN === "W")
  //   return <Out />
  return (
    <>
    {scores.toss_detail === null ? <Toss team1_logo={scores.team1_logo} team2_logo={scores.team2_logo} data={scores.toss_detail} /> : ""}
      
      {scores.last_ball.RUN === 6 && scores.last_ball.WICKET === 0 ? (
        <Sixfullscreen />
      ) : (
        ""
      )}
      {scores.last_ball.RUN === 4 && scores.last_ball.WICKET === 0 ? (
        <Fourfullscreen />
      ) : (
        ""
      )}
      {scores.last_ball.IS_WICKET === 1 ? <Outfullscreen /> : ""}
      <div className="d-flex bg_image">
        <div
          className={issquare ? "col-12 p-4 bg_images" : "col-7 m-5 mt-3 p-4"}
        >
          <div className="d-flex justify-content-between text-white align-items-center mt-3">
            <div className="team_name">{scores.team_name}&nbsp;</div>
            <div className="hell">
              <img className="team_logo" src={team_logo} alt="Team_logo" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center bg-white">
            <div className="team_runs">{scores.runs}/{scores.wickets}</div>
            <div className="target_div">
              <div className="target">Target {scores.target}</div>
              <div className="lines">----------------</div>
              <div className="run_rate">
                CRR-{scores.crr}/RR-{scores.rr}
              </div>
            </div>
            <div className="over_div">
              <div className="overs">OVERS</div>
              <div className="overs_points">{scores.overs}</div>
            </div>
          </div>
          <div className="d-flex justify-content-baseline mt-3 striker">
            <div className="w-50 text-white name">
              <h2>{scores.striker}*</h2>
            </div>
            <div className="w-50 score">
              <h1>
                {scores.striker_runs}[{scores.striker_balls}]
              </h1>
            </div>
          </div>
          <div className="d-flex mt-2 non_striker">
            <div className="w-50 text-white name">
              <h2>{scores.non_striker}</h2>
            </div>
            <div className="w-50 score">
              <h1>
                {scores.non_striker_balls}[{scores.non_striker_runs}]
              </h1>
            </div>
          </div>
          <div className="d-flex bowler justify-content-between border border-white text-white mt-3">
            <div className="bowler_name w-50 name">
              <h1>{scores.bowler}</h1>
            </div>
            <div className="bowler_runs w-50 score">
              <h1>{scores.bowler_data}</h1>
            </div>
          </div>
          <div className="float-left text-white mt-3">
            <h2>LATEST RUNS</h2>
          </div>
          <div className="d-flex justify-content-around mb-2">
            {overs.curr_overs.map((over) => {
              if (over.RUNS === 4)
                return (
                  <div className="l_score" style={{ background: "#BD29D9" }}>
                    {over.RUNS}
                  </div>
                );
              else if (over.RUNS === 6)
                return (
                  <div className="l_score" style={{ background: "#44D169" }}>
                    {over.RUNS}
                  </div>
                );
              else if (over.WICKET === 1)
                return (
                  <div className="l_score" style={{ background: "#E80B21" }}>
                    {"W"}
                  </div>
                );
              else return <div className="bg-white l_score">{over.RUNS}</div>;
            })}
          </div>
          <div className="d-flex bowler justify-content-between border border-white text-white mt-3 mb-4">
            <div className="bowler_name w-50 name">
              <h1>EXTRAS</h1>
            </div>
            <div className="bowler_runs w-50 score">
              <h3>{scores.extras}</h3>
            </div>
          </div>
        </div>
        <div
          className={
            issquare
              ? ""
              : "col-5 d-flex flex-column justify-content-center mt-5"
          }
        >
          <div style={{ display: issquare ? "none" : "" }}>
            <img src={wtcf_logo} style={{ height: "80%" }} alt="wtcf_logo" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Scoreboard2;
