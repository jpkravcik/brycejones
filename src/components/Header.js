import {Link} from "react-router-dom";
import logo from '../assets/BryxePhotoTransparent.png';

const Header = (props) => {

    var classNames = require('classnames');

    const colorString = classNames("text-", props.textColor).replace(/\s/g, "");

    const classString = classNames("m-4 text-2xl font-Playfair", colorString);

    return (
        <div className="relative z-30 flex content-center items-center justify-center m-0 p-0">
            <div className="m-5">
                <Link className ={classString} to="/about">About</Link>
                <Link className ={classString} to="/portfolio">Portfolio</Link>
            </div>

            <div className="flex items-center">
                <Link className ="m-4 text-9xl  font-Playfair" to="/">
                    <img src={logo} className=" object-scale-down w-48 h-48 m-0 p-0"></img>
                </Link>
            </div>

            <div className="m-5">
                <Link className ={classString} to="/pricing">Pricing</Link>
                <Link className ={classString} to="/book">Book a Session</Link>
            </div>

        </div>
    )
}

export default Header
