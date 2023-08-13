import { Carousel } from "antd";
import React from "react";
import { IImage } from "../../utils/interfaces";
import './carousel.css'; 


const image1 = require('../../assets/images/1.jpg');
const image2 = require('../../assets/images/2.jpg');
const image3 = require('../../assets/images/3.jpg');
const image4 = require('../../assets/images/4.jpg');
const image5 = require('../../assets/images/5.jpg');
const image6 = require('../../assets/images/6.jpg');
const image7 = require('../../assets/images/7.jpg');
const image8 = require('../../assets/images/8.jpg');
const image9 = require('../../assets/images/9.jpg');

const images: IImage[] = [
    { 
        url: image1,
        label: '1'
    },
    { 
        url: image2,
        label: '2'
    },
    { 
        url: image3,
        label: '3'
    },
    { 
        url: image4,
        label: '4'
    },
    { 
        url: image5,
        label: '5'
    },
    { 
        url: image6,
        label: '6'
    },
    { 
        url: image7,
        label: '7'
    },
    { 
        url: image8,
        label: '8'
    },
    { 
        url: image9,
        label: '9'
    },
]

const CarouselComponent = () => {
  return (
    <Carousel effect="fade">
        {images &&
            images.map(el => 
                <div key={el.label} className="carousel-section">
                    <img 
                        className="carousel-image-container" 
                        src={el.url} 
                        height={794} 
                        width={595} 
                        alt={el.label} 
                    />
                </div>
            )
        }
    </Carousel>
  );
};

export default CarouselComponent;
