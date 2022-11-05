import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import Scoreboard from './components/Scoreboard';
// import Lottie from './components/Lottie';
// import Toss_desicion from './components/Toss_desicion';
// import Scoreboard1 from './Scoreboard'
// import Four from './components/Four';
// import Six from './components/Six'
//  import Innings_break from './components/Innings_break';
// import Out from './components/Out'
// import Toss from './components/Toss';
// import Inningsbreak from './components/Inningsbreak';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <Scoreboard1 /> */}
    <Scoreboard />
    {/* <Four /> */}
    {/* <Six /> */}
    {/* <Out /> */}
    {/* <Innings_break /> */}
    {/* <Toss_desicion /> */}
    {/* <Toss /> */}
    {/* <Inningsbreak /> */}
    {/* <Lottie /> */}
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
