import React, { useEffect, useState } from "react";
import "../../css/sectiona.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import enquiry from "../../assets/images/enquiry-icon.png";
import delivery from "../../assets/images/delivery-icon.png";
import wishlist from "../../assets/images/wishilist-icon.png";
import { SimpleCarouselSlider } from "react-simple-carousel-image-slider";
import "react-simple-carousel-image-slider/dist/index.css";
import productimg1 from "../../assets/images/productimg1.png";
import productimg2 from "../../assets/images/productimg2.png";
import productimg3 from "../../assets/images/productimg3.png";
import MediaQuery from "react-responsive";
import {  Pane } from 'evergreen-ui';
import img from "../../assets/images/p1.png";


const images = [
  require("../../assets/images/productimg1.png"),
  require("../../assets/images/productimg2.png"),
  require("../../assets/images/productimg3.png"),
];

function SectionA() {
  const [quantity, setQuantity] = useState(1);

  const [subTotal, setSubTotal] = useState(170);;

  useEffect(() => {
    setSubTotal(170 * quantity);
  }, [quantity]);
  const [isShownPop, setIsShownPop] = React.useState(false)
  return (
    <>
      <div className="containerabc">
        <div className="slider-box1">
          <MediaQuery maxWidth={767}>
            <SimpleCarouselSlider
              images={images}
              autoplay={null}
              width="100%"
              height="15rem"
            />
          </MediaQuery>

          <MediaQuery minWidth={768}>
            <SimpleCarouselSlider
              images={images}
              autoplay={null}
              width="26rem"
              height="32rem"
            />
          </MediaQuery>

          <div>
            <img className="shop-slider-icon" src={productimg1} alt="img"></img>
            <img className="shop-slider-icon" src={productimg2} alt="img"></img>
            <img className="shop-slider-icon" src={productimg3} alt="img"></img>
          </div>
        </div>

        <div className="zero-box2">
          <h1 className="zerozero-title"> Zero Zero-hair removal cream</h1>
          <div className="ratting">
            <Stack spacing={3}>
              <Rating />
            </Stack>
            <p className="reviews500">500 Reviews</p>
          </div>
          <div className="ratting-below-line">
            Lorem lpsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </div>
          <br />
          <div className="MRP-all-taxes">
            <p className="MRP"> MRP ₹170.00 (₹1.70/ml)</p>
            <p className="all-taxes">(Inclusive of all taxes)</p>
            <br /> <br />
          </div>
          <hr />
          <br />
          <p className="highlight"> Highlights</p> <br /> <br />
          <ul className="highlight-lorem4line">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </li>

            <li>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </li>

            <li>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>

            <li>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
          </ul>{" "}
          <br /> <br />
          <sup className="icons">
            <img src={wishlist} height="20px" background="#363636" alt="" />
            <sup className="addtowishlist"> Add to wishlist </sup>
            <img src={delivery} height="20px" background="#363636" alt="" />
            <sup className="delivery-return"> Delivery & Returns</sup>
            <img src={enquiry} height="20px" background="#363636" alt="" />
            <sup className="enquiry "> Enquiry</sup>
          </sup>
          <br /> <br />
          <div className="counter-buttone">
            <div className="counter">
              <div
                className="minus"
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                <span>-</span>
              </div>
              <div className="amountindc">{quantity}</div>
              <div className="plus" onClick={() => setQuantity(quantity + 1)}>
                <span>+</span>
              </div>
            </div>{" "}
          <button className="buttone" onClick={() => setIsShownPop(true)}>  Add to cart</button>
          </div>
        </div>
      </div>
      <div className="About">
        <b className="aboutprodct-title">About this product</b>
        <ul className="aboutproduct-paragraph">
          <li>
            YOUR 5-MINUTE SALON: Get smooth, moisturized and exfoliated skin in
            just 5-10 minutes
          </li>
          <li>
            FRESHEST SMELL: No more ammonia smell, thanks to the removal of the
            ingredients causing it
          </li>
          <li>
            REMOVES SHORTEST OF HAIR: Removes short hair from legs, arms,
            underarms and bikini line
          </li>
          <li>
            LONG-LASTING SMOOTHNESS: Enriched with Aloe Vera, known for its
            soothing properties
          </li>
          <li>
            DERMATOLOGICALLY TESTED: Dermatologically tested and leaves skin
            moisturized for up to 24 hours
          </li>
          <li>EASY TO USE: Comes with a spatula for easy application</li>
        </ul>
      </div>

      {/************** PopUpCart *************/}

      {isShownPop ? <Pane >
        <div
          isShown={isShownPop}
          title="No footer"
          hasHeader={false}
          hasFooter={false}

        > <div className='cart'>
            <div className='top'>
              <h2 className='Head'>Your Cart</h2>
              <div className='close' onClick={() => setIsShownPop(false)}>X</div>
            </div>
            <div className='product'>
              <img src={img} alt="Not Found" />
              <div className='price'>
                <span>&nbsp;Zero Zero-hair removal &nbsp;cream</span>
                <span>&nbsp;Rs. 170.00</span>
              </div>
              <div className='quantity'>
                <div className='desc' onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}><span></span></div>
                <div className='amount'>{quantity}</div>
                <div className='enc' onClick={() => setQuantity(quantity + 1)}>+</div>
              </div>
            </div>
            <div className='subtotal'>
              <section>
                <span>SUBTOTAL</span>
                <span>RS. {subTotal}.00</span>
              </section>
              <p>Shipping & taxes calculated at checkout</p>
            </div>
            <button className='checkout' ><a href='/Checkout' className='alink'>Proceed To Checkout</a></button>
            <button className='checkout' ><a href='/cart' className='alink'>View Cart</a></button>
          </div>



        </div>
      </Pane> : ""}

      {/*//////////////PopUpCart //////////////*/}
    </>
  );
}

export default SectionA;
