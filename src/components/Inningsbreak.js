import React from 'react';
import "../styles/inningsbreak.css";
import team_logo from "../images/team_a.png";


function Inningsbreak() {
    return (
        <div className='d-flex p-3 flex-column align-items-center bg_image'>
            <div className='text-white heading mt-3'>INNINGS BREAK</div>
            <img className="team_logo" src={team_logo} alt="Team_logo" />
            <div className='fantastic_text text-white mb-2 mt-2'>FANTASTIC COMETS</div>
            <div className='need text-warning'>NEEDS</div>
            <div className='runs text-white'>140</div>
            <div className='towin text-warning mb-5'>TO WIN</div>
        </div>
    );
}

export default Inningsbreak;