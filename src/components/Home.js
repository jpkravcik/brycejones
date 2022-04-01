import Header from './Header'
import logo from '../assets/BryxePhotoTransparent.png';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
  } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className='h-screen overflow-hidden flex items-center justify-center text-white bg-home-bg bg-no-repeat bg-cover bg-center'>
            <div className='flex justify-start items-center flex-col'>
                <img src={logo} className=" object-scale-down w-48 h-48 m-0 p-0"></img>
                <Link className ="m-4 font-Playfair" to="/portfolio">
                    <button className='text-white bg-gray-700 m-2 mt-1 p-2 w-28 rounded-md'>Enter Site</button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Home
