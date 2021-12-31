import Header from './Header'
import placeholder from '../assets/placeholder.mp4'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className='h-screen overflow-hidden flex place-items-start justify-center text-white'>
            <Header textColor="white" />
                <video autoPlay loop muted className='z-10 absolute object-fill h-screen w-auto min-w-full max-w-none m-0 p-0 brightness-50'>
                    <source src={placeholder} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default Home
