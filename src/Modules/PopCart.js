import React, { useEffect, useState } from 'react';
import img from "../assets/images/p1.png";
import '../css/PopCart.css';

const Cart = () => {

    const [quantity, setQuantity] = useState(1);
    const [subTotal, setSubTotal] = useState(170);;

    useEffect(() => {
        setSubTotal(170 * quantity);
    }, [quantity]);

    const [popup, SetPop] = useState(false);
     const handleClickclose = () => {
        SetPop(!popup);
     }

    return (!popup ? (
        <div className='cart'>
            <div className='top'>
                <h2 className='Head'>Your Cart</h2>
                <div className='close' onClick={handleClickclose}>X</div>
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
        </div>) : <></>
    );
}

export default Cart;