import React,{useState}from 'react';

import icons from '../../constants/icons';

import Carousel from 'react-multi-carousel';

import images from '../../constants/images';

import 'react-multi-carousel/lib/styles.css';

import sixthredcir from '../../assets/images/sixthredcir.png';
import sixthredline from '../../assets/images/sixthredline.png';
import sixthline from '../../assets/images/sixthline.png';
import '../../css/Home.css'
import '../../css/HomeRespo.css'
import { useCarousel } from 'use-carousel-hook';



const Avaible = () => {

    const { ref, previous, next, setCurrent, reset } = useCarousel();


    const data = [
        {
            image: icons.grofers,
            link: '/',
        },
        {
            image: icons.amazon,
            link: '/',
        },
        {
            image: icons.metro,
            link: '/',
        },
        {
            image: icons.bigbasket,
            link: '/',
        },
        {
            image: icons.flipkart,
            link: '/',
        },
        {
            image: icons.ratnadeep,
            link: '/',
        },
        {
            image: icons.foodhall,
            link: '/',
        },
        {
            image: icons.paytmmall,
            link: '/',
        },
        {
            image: icons.swiggyinstamart,
            link: '/',
        },
        {
            image: icons.whsmith,
            link: '/',
        },
    ]

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

    return (<div className='avaible'>
        <h2>We are available on</h2>
        {/* <section>
        <Carousel
                responsive={responsive}
                arrows={true}
                autoPlay={false}
                infinite
                autoPlaySpeed={2000}
            >
                {
                    data.map(item => (
                        <a href={item.link} target='_blank'>
                            <img src={item.image} alt="#"/>
                        </a>
                    ))
                }
            </Carousel>
            
        </section> */}

       <div >
        <div style={{ display:"flex",marginTop:"2%", paddingBottom:"25px"}}>
       <ul ref={ref} className="carousel__list">
                <li className="carousel__item">
                  <img className="carousel__img" src={icons.grofers} alt=''/>
                </li>
                <li className="carousel__item">
                  <img className="carousel__img"  src={icons.amazon} alt=''/>
                </li>
                <li className="carousel__item">
                  <img className="carousel__img" src={icons.flipkart} alt=''/>
                </li>
                <li className="carousel__item">
                  <img className="carousel__img" src={icons.paytmmall} alt=''/>
                </li>
                <li className="carousel__item">
                  <img className="carousel__img" src={icons.bigbasket} alt=''/>
                </li>
                <li className="carousel__item">
                  <img className="carousel__img" src={icons.whsmith} alt=''/>
                </li>
                <li className="carousel__item">
                  <img className="carousel__img" src={ icons.swiggyinstamart} alt=''/>
                </li>
                <li className="carousel__item">
                  <img className="carousel__img" src={ icons.foodhall} alt=''/>
                </li>
                <li className="carousel__item">
                  <img className="carousel__img" src={ icons.metro} alt=''/>
                </li>
                <li className="carousel__item">
                  <img className="carousel__img" src={ icons.bigbasket} alt=''/>
                </li>
                <li className="carousel__item">
                  <img className="carousel__img" src={icons.grofers} alt=''/>
                </li>
                <li className="carousel__item">
                  <img className="carousel__img"  src={icons.amazon} alt=''/>
                </li>
            </ul>
            </div>
            <div style={{marginTop:"2%", marginLeft:"44%",marginBottom:"2%"}}>
       <button type='submit' style={{background:'none', border:'none'}} onClick={() => previous()}>
         <img 
     style={{cursor:'pointer'}}
     src={sixthline}
     type="submit"
         />
     </button>
      <button type='submit' style={{background:'none', border:'none'}} onClick={() => next()}>
        <img style={{maxWidth:"50%",marginLeft:"8%",cursor:'pointer'}} src={sixthredline} alt="fourthredline"/>
        <img style={{maxWidth:"50%", marginTop:"-20%",marginLeft:"-19%",cursor:'pointer',marginBottom:"-15%"}} src={sixthredcir} alt="fourthredcir"/>
        </button>
        </div>
        </div>

    </div>);
}

export default Avaible;