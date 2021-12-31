import Slideshow from "./Slideshow";
import logo from '../assets/index';
import Header from './Header';

const Portfolio = () => {
    return (
        <div className="bg-white h-screen w-screen">
            <Header textColor="black" />
            <Slideshow />
        </div>
    )
}

export default Portfolio
