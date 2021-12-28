import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className=" relative z-30 flex items-center justify-center m-0 p-0">
            <div className="m-5">
                <Link className ="m-4 text-white text-4xl font-Playfair" to="/About">About</Link>
                <Link className ="m-4 text-white text-4xl font-Playfair" to="/Portfolio">Portfolio</Link>
            </div>

            <div>
                <h1 className ="m-4 text-white text-9xl  font-Playfair">Bryxe</h1>
            </div>

            <div className="m-5">
                <Link className ="m-4 text-white text-4xl font-Playfair" to="/Pricing">Pricing</Link>
                <Link  className ="m-4 text-white text-4xl font-Playfair" to="/Book">Book a Session</Link>
            </div>

        </div>
    )
}

export default Header
