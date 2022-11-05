// import './Toss_desion.css';
import toss_bg from '../images/four_bg.png';

function Toss_desicion(){
    return(
        <div className='Toss_desicion'>
            <div className='toss mx-auto d-block'>
                <img src={toss_bg} class="img-fluid" style={{"width":"100%" , "height":"50%"}} alt="Responsive" />
            </div>
        </div>
    )
}
export default Toss_desicion;