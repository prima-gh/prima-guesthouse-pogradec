import { Carousel } from "antd";
import React from "react";
import image1 from '../../assets/images/1.jpg'
import image2 from '../../assets/images/2.jpg'
import image3 from '../../assets/images/3.jpg'
import image4 from '../../assets/images/4.jpg'
import image5 from '../../assets/images/5.jpg'
import image6 from '../../assets/images/6.jpg'
import image7 from '../../assets/images/7.jpg'
import image8 from '../../assets/images/8.jpg'
import image9 from '../../assets/images/9.jpg'
import { IImage } from "../../utils/interfaces";
import './carousel.css'; 

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
