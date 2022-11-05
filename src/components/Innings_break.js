import '../styles/innings_break.css';
// import Innings_bg from '../images/innings_bg.png'
// import logo from '../images/comets.png'

function Innings_break() {
    return (
        <div className='Innings'>

            <div className='Innings_bg'><img src={Innings_bg} />

                <div className='Innings_value'>Innings Break</div>
                <div className="logo "><img src={logo} /></div>
                    
                
                <p>Fantastic comets</p>
                <div className='needs'>Needs</div>
                <div className='need_runs'>140</div>
                <div className='to_win'>To win</div>
                
                </div>
        </div>
    )
}

export default Innings_break;