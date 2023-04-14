import React from "react";
import '../home.css';
import '../../../styles/global.css'

import { useCarousel } from "use-carousel-hook";
import 'semantic-ui-css/semantic.min.css';
import { Button, Progress } from 'semantic-ui-react';
import { Component } from 'react';

import fifthline1 from "../../../assets/images/fifthline1.png";
import fifthleft from "../../../assets/images/fifthleft.png";
import fifthright from "../../../assets/images/fifthright.png";
import news from "../../../assets/images/news.png";
import news1 from "../../../assets/images/news1.png";
import news2 from "../../../assets/images/news2.png";
import news3 from "../../../assets/images/news3.png";


function Card(props){
    return(
        <div className="fifth-news-card-div">
            <img className="fifth-news-img" src={props.image} />
            <p className="fifth-news-text">
                <span className="fifth-news-date">Date</span>
                <span className="fifth-news-date2">{props.date}</span>
            </p>
            <p className="fifth-news-text1">
                {props.text1}
            </p>
            <p className="fifth-news-text2">
                {props.text2}
            </p>
            <a href="#" className="fifth-news-a">
                Read more...{props.a}
            </a>
        </div>
    );
}


function Fifth() {
    const { ref, previous, next, setCurrent, reset } = useCarousel();

  return (
    <>
    <div className="fifth-sec"> 
    <div className="fifth-text-div">
        <p className="fifth-text">
          Community news
        </p>
        <p className="fifth-text1">
        Lorem Ipsum is simply dummy text printing
        </p>
      </div>

      <div className="fifth-line-div">
      <button
          onClick={() => previous()}
          style={{ background: "none", border: "none" }}
        >
          

          <img
            src={fifthleft}
            alt="fourthredline"
          />
          </button>
        
        <img src={fifthline1}/>
        <button
          onClick={() => next()}
          style={{ background: "none", border: "none" }}
        >
          <img
            src={fifthright}
            alt="fourthredline"
          />
          </button>
        
      </div>

      <div className="fifth-news-div">
      <ul ref={ref} className="carousel__list5">
        <li class="carousel__item5">
        <Card 
        image={news}
        date=" Nov 2022"
        text1 = "Lorem Ipsum is simply dummy text printing"
        text2 = "I must explain to you how all this mistaken idea of denouncing"
        a = ""
        />
        </li>
        <li class="carousel__item5">
        <Card 
        image={news1}
        date=" Nov 2022"
        text1 = "Lorem Ipsum is simply dummy text printing"
        text2 = "I must explain to you how all this mistaken idea of denouncing"
        a = ""
        />
        </li>
        <li class="carousel__item5">
        <Card 
        image={news2}
        date=" Nov 2022"
        text1 = "Lorem Ipsum is simply dummy text printing"
        text2 = "I must explain to you how all this mistaken idea of denouncing"
        a = ""
        />
        </li>
        <li class="carousel__item5">
        <Card 
        image={news3}
        date=" Nov 2022"
        text1 = "Lorem Ipsum is simply dummy text printing"
        text2 = "I must explain to you how all this mistaken idea of denouncing"
        a = ""
        />
        </li>
        <li class="carousel__item5">
        <Card 
        image={news1}
        date=" Nov 2022"
        text1 = "Lorem Ipsum is simply dummy text printing"
        text2 = "I must explain to you how all this mistaken idea of denouncing"
        a = ""
        />
        </li>
        <li class="carousel__item5">
        <Card 
        image={news2}
        date=" Nov 2022"
        text1 = "Lorem Ipsum is simply dummy text printing"
        text2 = "I must explain to you how all this mistaken idea of denouncing"
        a = ""
        />
        </li>
        <li class="carousel__item5">
        <Card 
        image={news3}
        date=" Nov 2022"
        text1 = "Lorem Ipsum is simply dummy text printing"
        text2 = "I must explain to you how all this mistaken idea of denouncing"
        a = ""
        />
        </li>
        <li class="carousel__item5">
        <Card 
        image={news}
        date=" Nov 2022"
        text1 = "Lorem Ipsum is simply dummy text printing"
        text2 = "I must explain to you how all this mistaken idea of denouncing"
        a = ""
        />
        </li>
      </ul>
      </div>
    </div>
    </>
       
  );
}

export default Fifth;


// <>
// <div className="fifth-sec"> 
// <div className="fifth-text-div">
//     <p className="fifth-text">
//       Community news
//     </p>
//     <p className="fifth-text1">
//     Lorem Ipsum is simply dummy text printing
//     </p>
//   </div>

//   <div className="fifth-line-div">
//   <img src={fifthleft}/>
//     <img src={fifthline1}/>
//     <img src={fifthright}/>
//   </div>

//   <div className="fifth-news-div">
//     <Card 
//     image={news}
//     date=" Nov 2022"
//     text1 = "Lorem Ipsum is simply dummy text printing"
//     text2 = "I must explain to you how all this mistaken idea of denouncing"
//     a = ""
//     />
//      <Card 
//     image={news1}
//     date=" Nov 2022"
//     text1 = "Lorem Ipsum is simply dummy text printing"
//     text2 = "I must explain to you how all this mistaken idea of denouncing"
//     a = ""
//     />
//      <Card 
//     image={news2}
//     date=" Nov 2022"
//     text1 = "Lorem Ipsum is simply dummy text printing"
//     text2 = "I must explain to you how all this mistaken idea of denouncing"
//     a = ""
//     />
//      <Card 
//     image={news3}
//     date=" Nov 2022"
//     text1 = "Lorem Ipsum is simply dummy text printing"
//     text2 = "I must explain to you how all this mistaken idea of denouncing"
//     a = ""
//     />
//   </div>
// </div>
// </>


