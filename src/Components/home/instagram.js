import React from 'react';
import Carousel from 'react-multi-carousel';

import images from '../../constants/images';

import 'react-multi-carousel/lib/styles.css';

const Instagram = () => {

    const imgs = [];

    for (let i = 0; i < 8; i++) {
        imgs.push({ image: images['instagram' + (i + 1)] })
    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 7
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (<div className='instagram'>
        <a href='https://www.instagram.com/' target='_blank'>
            <img src={images.instagramId} id='instagram-id' alt="" />
            <Carousel
                responsive={responsive}
                arrows={false}
                autoPlay={false}
                infinite
                autoPlaySpeed={900}
            >
                {
                    imgs.map(item => (
                        <img src={item.image} />
                    ))
                }
            </Carousel>
        </a>
    </div>);
}

export default Instagram;