import React,{useState} from 'react'

const Cart = () => {
  const[count,setCount]=useState(2);
  const inc=()=>{
    setCount(count+1);
  }
  const dec=()=>{
    if(count>0)
    setCount(count-1);
  }

  return (
    <div ><br/><br/>
        <section className="rght">
        <div className='dcx'>
       <button onClick={dec} className=' min'>-</button>
      {count}
      <button onClick={inc} className='max'>+</button>
      </div>

{/* <div>
      <button onClick={inc} >+</button>
      {count}
      <button onClick={dec}>-</button>
    </div> */}




      {/* <div className='desc' onClick={() => { if (count > 1) setCount(count - 1) }}><span>-</span></div>
                <div className='amount'>{count}</div>
                <div className='enc' onClick={() => setCount(count + 1)}><span>+</span></div>   */}



      <button className='box'>Add to cart</button>
      </section>
      
    </div>
  
  )
}

export default Cart;



