import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import searchicon from "../src/assets/icons/searchicon.png";
import './css/searchbar.css';
import personicon from "../src/assets/icons/personicon.png";
import mallicon from "../src/assets/icons/mallicon.png";

import logo from './assets/images/logos.png'
import './App.css'
import Footer1 from './Components/home/footer';
import { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ExtendComp from './Components/ExtendComp';
import img from "../src/assets/images/p1.png";
import '../src/css/PopCart.css';
import { Dialog, Pane } from 'evergreen-ui';



const App = () => {


  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  /********PopupCart****** */
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(170);;

  useEffect(() => {
    setSubTotal(170 * quantity);
  }, [quantity]);
  const [isShownPop, setIsShownPop] = React.useState(false)

  /******************************Searchbar&icon*******************************/
  const [show,setShow] = useState(false)

        const ShowName =()=>{
          if(show === true){
            setShow(false)
          }else{
            setShow(true)
          }
        }

  /**************login*************/
  const [isShown, setIsShown] = React.useState(false)
  /**************forgotpass.*************/
  const [isShown9, setIsShown9] = React.useState(false)
  /**************resetpass.*************/
  const [isShown10, setIsShown10] = React.useState(false)
  /**************signup*************/
  const [isShown2, setIsShown2] = React.useState(false)
  /**************login*************/
  const [isShown1, setIsShown1] = React.useState(false)



  return (
    <div className='container'>


      <AppBar>
        <box className='navbar'>
          <p className='line'>Get 10% off on your first order use code Zero Zero 22</p>
        </box>

        <Toolbar disableGutters className='nav' >
          <div className="menu-icon" onClick={handleShowNavbar}>
            <MenuIcon />
          </div>

          <Link to='/'><img className='zeroimg' src={logo} alt="" /></Link>

          <Box className="navi"  >

            <section className={`navigations  ${showNavbar && 'active'}`}>
              <div className='ul'>
                <Link className='li' to='/'>Home</Link>
                <Link className='li' to='/Shop'>Shop</Link>
                <Link className='li' to='/aboutus'>About us</Link>
                <Link className='li' to='/blog'>Blog</Link>
                <Link className='li' to='/contactus'>Contact us</Link>

              </div>
            </section>
          </Box>

          <Box className="headericons"><div className="bar">
          {show && (<div className="bar"><input placeholder='Search' /></div>)}
            <IconButton onClick={ShowName}> <img src={searchicon} style={{ height: '17px' }}/></IconButton>

            <IconButton onClick={() => setIsShown(true)} > <img src={personicon} style={{ height: '17px' }} /></IconButton>


            <IconButton onClick={() => setIsShownPop(true)} >
              <img src={mallicon} style={{ height: '17px' }} />
            </IconButton></div>
          </Box>
        </Toolbar>
      </AppBar>


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


      {isShown ? <Pane >
        <Dialog
          isShown={isShown}
          title="No footer"
          onCloseComplete={() => setIsShown(false)}
          hasHeader={false}
          hasFooter={false}

        >

          <center>
            <form>
              <h3 style={{ fontSize: '30px', fontFamily: 'gill sans' }}> Log in </h3>
              <p style={{ marginTop: "3px", fontFamily: 'gill sans' }}>Please enter your details</p><br />


              <input style={{ height: '40px', width: '100%', fontFamily: 'gill sans' }} type="text" placeholder='Username' /><br /><br />


              <input style={{ height: '40px', width: '100%', fontFamily: 'gill sans' }} type="password" placeholder='Password' /><br />

              <p onClick={() => setIsShown9(true)} style={{ display: "flex", justifyContent: 'right', marginTop: "20px", fontFamily: 'gill sans', cursor: 'pointer' }}   >
                Forgot Password?</p>
              <br /><br />

              <button style={{ height: '35px', width: '70%', color: 'white', backgroundColor: '#C12222', border: 'none', fontSize: '100%', fontFamily: 'gill sans', cursor: 'pointer' }} onClick={alert}>
                Log in</button><br /><br />

              <p
                style={{ fontFamily: 'gill sans', display: "flex", justifyContent: "center" }} >
                Don’t have an account ? &ensp;
                <p onClick={() => setIsShown2(true)} style={{ color: '#C12222', cursor: 'pointer' }}><b>Sign up</b></p></p>

            </form>
          </center>

        </Dialog>
      </Pane> : ""}

      {isShown9 ?
        <Pane >
          <Dialog
            isShown={isShown9}
            title="No footer"
            onCloseComplete={() => setIsShown9(false)}
            hasHeader={false}
            hasFooter={false}
          >

            <center>
              <form>
                <h3 style={{ fontSize: '30px', fontFamily: 'gill sans' }}> Forgot Password </h3>
                <p style={{ marginTop: "3px", fontFamily: 'gill sans' }}>Please enter your mail id</p><br />

                <input style={{ height: '40px', width: '100%', fontFamily: 'gill sans' }} type="text" placeholder='Email id' /><br /><br />

                <button type='button'
                  onClick={() => setIsShown10(true)}
                  style={{ height: '35px', width: '70%', color: 'white', backgroundColor: '#C12222', border: 'none', fontSize: '100%', fontFamily: 'gill sans', cursor: 'pointer' }} >
                  Submit</button><br /><br />
              </form>
            </center>


          </Dialog>
        </Pane> : ""}

      {isShown10 ?
        <Pane >
          <Dialog
            isShown={isShown10}
            title="No footer"
            onCloseComplete={() => setIsShown10(false)}
            hasHeader={false}
            hasFooter={false}
          >

            <center>
              <form>
                <h3 style={{ fontSize: '30px', fontFamily: 'gill sans' }}> Reset Password </h3>
                <p style={{ marginTop: "3px", fontFamily: 'gill sans' }}>Please enter your new password</p><br />

                <input style={{ height: '40px', width: '100%', fontFamily: 'gill sans' }} type="text" placeholder='New Password' /><br /><br />

                <input style={{ height: '40px', width: '100%', fontFamily: 'gill sans' }} type="text" placeholder='Re-enter Password' /><br /><br />

                <button
                  style={{ height: '35px', width: '70%', color: 'white', backgroundColor: '#C12222', border: 'none', fontSize: '100%', fontFamily: 'gill sans', cursor: 'pointer' }}
                  onclick="alert('Password Updated Succesfully!')">
                  Submit</button><br /><br />
              </form>
            </center>


          </Dialog>
        </Pane> : ""}


      {isShown2 ?
        <Pane >
          <Dialog
            isShown={isShown2}
            title="No footer"
            onCloseComplete={() => setIsShown2(false)}
            hasHeader={false}
            hasFooter={false}
          >

            <center>
              <form>
                <h3 style={{ fontSize: '30px', fontFamily: 'gill sans' }}> Sign up </h3>
                <p style={{ marginTop: "3px", fontFamily: 'gill sans' }}>Please enter your details</p><br />

                <input style={{ height: '40px', width: '100%', fontFamily: 'gill sans' }} type="text" placeholder='Useename' /><br /><br />

                <input style={{ height: '40px', width: '100%', fontFamily: 'gill sans' }} type="text" placeholder='Password' /><br /><br />

                <input style={{ height: '40px', width: '100%', fontFamily: 'gill sans' }} type="text" placeholder='Email ID' /><br /><br />

                <button
                  style={{ height: '35px', width: '70%', color: 'white', backgroundColor: '#C12222', border: 'none', fontSize: '100%', fontFamily: 'gill sans', cursor: 'pointer' }}
                  onclick="alert('Password Updated Succesfully!')">
                  Submit</button><br /><br />

                <p
                  style={{ fontFamily: 'gill sans', display: "flex", justifyContent: "center" }} >
                  Already have an account ? &ensp;
                  <p onClick={() => setIsShown1(true)} style={{ color: '#C12222', cursor: 'pointer' }}><b>Log in</b></p></p>

              </form>
            </center>


          </Dialog>
        </Pane> : ""}

      {isShown1 ? <Pane >
        <Dialog
          isShown={isShown1}
          title="No footer"
          onCloseComplete={() => setIsShown1(false)}
          hasHeader={false}
          hasFooter={false}

        >

          <center>
            <form>
              <h3 style={{ fontSize: '30px', fontFamily: 'gill sans' }}> Log in </h3>
              <p style={{ marginTop: "3px", fontFamily: 'gill sans' }}>Please enter your details</p><br />


              <input style={{ height: '40px', width: '100%', fontFamily: 'gill sans' }} type="text" placeholder='Username' /><br /><br />


              <input style={{ height: '40px', width: '100%', fontFamily: 'gill sans' }} type="password" placeholder='Password' /><br />

              <p onClick={() => setIsShown9(true)} style={{ display: "flex", justifyContent: 'right', marginTop: "20px", fontFamily: 'gill sans', cursor: 'pointer' }}   >
                Forgot Password?</p>
              <br /><br />

              <button style={{ height: '35px', width: '70%', color: 'white', backgroundColor: '#C12222', border: 'none', fontSize: '100%', fontFamily: 'gill sans', cursor: 'pointer' }} onClick={alert}>
                Log in</button><br /><br />

              <p
                style={{ fontFamily: 'gill sans', display: "flex", justifyContent: "center" }} >
                Don’t have an account ? &ensp;
                <p onClick={() => setIsShown2(true)} style={{ color: '#C12222', cursor: 'pointer' }}><b>Sign up</b></p></p>

            </form>
          </center>

        </Dialog>
      </Pane> : ""}



      <ExtendComp />
      <Footer1 />
    </div>
  );

}

export default App;