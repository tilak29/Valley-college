import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import '../../css/Cart.css';
import images from "../../assets/images/productimg2.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UpdateIcon from '@mui/icons-material/Update';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
   
       

    const [quantity, setQuantity] = useState(1);
    const [contries, setContries] = useState([]);
    const [selectedContry, setSelectedContry] = useState('India');
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedStates] = useState('Maharashtra');
    const [isMobile, setIsMobile] = useState(false);
    const [isNavigate, setIsNavigate] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        getContries();
        resize();
    }, []);

    useEffect(() => {
        getStates();
    }, [selectedContry]);

    const initialValues = {
        zipCode: '',
    };

    const validationSchema = yup.object({
        zipCode: yup.string().required('Plaese enter valid postal/ zip code').min(6, 'Plaese enter valid postal/ zip code').max(6, 'Plaese enter valid postal/ zip code').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Plaese enter valid postal/ zip code'),
    })

    const { errors, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: () => {
            if (isNavigate) {
                navigate('/shop/checkout');
            }
        }
    })

    const getContries = async () => {
        const headers = {
            headers: {
                'X-CSCAPI-KEY':
                    'ek5ON1NSQnB2cFhUdnViaVpNUUNGTUhhTVhBVVJCSWlISHg2YUkwVw==',
            },
        };

        const { data } = await axios.get('https://api.countrystatecity.in/v1/countries/', headers);

        const result = [];
        data.forEach(item => {
            result.push({ value: item.name, code: item.iso2 });
        });
        setContries(result);
    };

    const headers = {
        headers: {
            'X-CSCAPI-KEY':
                'ek5ON1NSQnB2cFhUdnViaVpNUUNGTUhhTVhBVVJCSWlISHg2YUkwVw==',
        },
    };

    const getStates = async () => {

        const contryCode = contries.find(x => x.value === selectedContry) ? contries.find(x => x.value === selectedContry).code : 'IN';

        const { data } = await axios.get('https://api.countrystatecity.in/v1/countries/' + contryCode + '/states', headers);

        const result = [];
        data.forEach(item => {
            result.push({ value: item.name });
        });
        setStates(result);
    };

    const resize = () => {
        if (document.body.offsetWidth <= 660) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    window.addEventListener('resize', resize);
    
        return (<div className='container'>
            <div className='product-cart'>
                <h2 className='YourCart'><ShoppingCartIcon fontSize="large"/>Your Cart</h2>
                <div className='main-container'>
                    <div className='section-a'>
                        {!isMobile && (
                            <>
                                <div className='header'>
                                    <span>Product</span>
                                    <span>Price</span>
                                    <span>Quantity</span>
                                    <span>Total</span>
                                </div>
    
                                <div className='product'>
                                    <section className='first'>
                                        <img src={images} alt="" />
                                        <span>Zero Zero-hair removal cream</span>
                                    </section>
                                    <section className='second'>
                                        <span>Rs. 170.00</span>
                                    </section>
                                    <section className='third'>
                                        <div className='quantity'>
                                            <div className='desc' onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}><span></span></div>
                                            <div className='amount1'>{quantity}</div>
                                            <div className='enc' onClick={() => setQuantity(quantity + 1)}><b>+</b></div>
                                        </div>
                                    </section>
                                    <section className='fourth'>
                                        <span>Rs. {170 * quantity}.00</span>
                                    </section>
                                </div>
                            </>
                        )}
                    </div>
    
                    {
                        isMobile && (
                            <>
                                <div className='product mobile'>
                                    <img src={images} alt="" />
                                    <section>
                                        <span><b>Zero Zero-hair removal cream</b></span>
                                        <span>Rs. 170.00</span>
                                        <div className='quantity'>
                                            <div className='desc' onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}><span></span></div>
                                            <div className='amount1'>{quantity}</div>
                                            <div className='enc' onClick={() => setQuantity(quantity + 1)}><b>+</b></div>
                                        </div>
                                    </section>
                                </div>
                                <div className='total'>
                                    <span>Total</span>
                                    <span>Rs. {170 * quantity}.00</span>
                                </div>
                            </>
                        )
                    }
    
                    <div className='actions'>
                        <a href="/Shop" className='an'><span ><div ><ShoppingCartIcon fontSize="large"/></div> Continue Shopping</span></a>
                        <a href="" className='an'><span><div ><UpdateIcon fontSize="large"/> </div> Update</span></a>
                    </div>
                    <main>
                        <section>
                            <p>Special Instructions for Seller with Your Order</p>
                            <textarea />
                        </section>
                        <section>
                            <p>Get Shipping Estimate</p>
                            <div className='row'>
                                <span>Country</span>
                                <select value={selectedContry} onChange={data => setSelectedContry(data.currentTarget.value)}>
                                    {contries.map(item => (
                                        <option>{item.value}</option>
                                    ))}
                                </select>
                            </div>
    
                            <div className='row'>
                            <span>State</span>
                            <select onChange={data => setSelectedStates(data.currentTarget.value)} value={selectedState}>
                                {states.map(item => (
                                    <option>{item.value}</option>
                                ))}
                            </select>
                        </div>
    
                            <div className='row'>
                                <span>Postal/ Zip code</span>
                                <input type='text' onChange={handleChange('zipCode')} />
                                {errors.zipCode && <div className='err'>{errors.zipCode}</div>}
                            </div>
                            <div className='row'>
                                <button onClick={() => { setIsNavigate(false); handleSubmit();}} >Calculate Shipping</button>
                            </div>
                        </section>
                        <section className='third'>
                            <div className='row'>
                                <span>Subtotal</span> <span>Rs. {170 * quantity}.00</span>
                            </div>
                            <div className='row'>
                                <span>You’re saving :</span> <span>Rs.{18 * quantity}.00</span>
                            </div>
                            <div className='row'>
                                <span>Shipping & taxes calculated at checkout</span>
                            </div>
                            <a href='/Checkout'><button>Proceed To Checkout</button></a>
                        </section>
                    </main>
                </div>
            </div>
        </div >);
    
}

export default Cart;