import React, { useState } from 'react';
import { Slide } from "react-slideshow-image";
import { image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11 } from '../assets/index';

const Slideshow = () => {
    const images =[
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11
    ]
    
    const properties = {
        duration: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        indicators: false,
    };

    return (
        <div>
            <div>
                <Slide {...properties}>
                    {images.map((image, index) => 
                        <div key={index}>
                            <img src={image} className="object-fill animate-fade-in" />
                        </div>
                    )}
                </Slide>
            </div>
            
        </div>
    )
}

export default Slideshow
