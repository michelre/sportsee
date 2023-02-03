import './Sidebar.css';
import yogaIcon from '../assets/icon_yoga.png';
import swimIcon from '../assets/icon_swim.png';
import cycleIcon from '../assets/icon_cycle.png';
import weightsIcon from '../assets/icon_weights.png';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar">
            <nav className="sports-nav">
                <Link to="/">
                    <img src={yogaIcon} alt="Yoga icon" className="sport-icon" />
                </Link>
                <Link to="/">
                    <img src={swimIcon} alt="Swim icon" className="sport-icon" />
                </Link>
                <Link to="/">
                    <img src={cycleIcon} alt="Cycle icon" className="sport-icon" />
                </Link>
                <Link to="/">
                    <img src={weightsIcon} alt="Weights icon" className="sport-icon" />
                </Link>
                <p className="copyrights">Copiryght, SportSee 2020</p>
            </nav>
        </div>
    )
}

export default SideBar