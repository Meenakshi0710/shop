import React from 'react'
import "./cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import {makePaymentRequest, makeRequest} from "../../makeRequest"


const Cart = () => {
    const dispatch = useDispatch();
   const products =  useSelector(state=>state.cart.products)
   console.log(products);
    const totalPrice = ()=>{
        let total = 0;
        products.forEach(item => {
            total += item.quantity*item.price
        });
return total.toFixed(2);
    }
    const stripePromise = loadStripe('pk_test_51QKFkaSENZ73DdbEM18YMU0yeo5RRlQsgs5UhrGQ80cuJGn5aqvx0EalBIL2GBZ5yhY4hwT2egznKLjmVbRAV2EE00keMYu0Rt')
       const handlePayment = async ()=>{
    
    try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
              products,
            });
            console.log(res);
            const { error } = await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
              });
          
              if (error) {
                console.error("Stripe Checkout Error:", error.message);
              }
            } catch (error) {
              console.log("Checkout Error:", error.response?.data || error.message);
            }
          };
  return (
    <div className='cart'>
        <h1>Proucts in your Cart</h1>
        {products?.map(item =>(
            <div className='item' key={item.id}>
                <img src={import.meta.env.VITE_UPLOAD_URL+item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">{item.quantity} * ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete' onClick = {()=>dispatch(removeCart(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>{totalPrice()}</span>
        </div>
        <button onClick = {handlePayment}>Proceed to checkout</button>
        <span className='reset' onClick={()=>dispatch(resetCart())}>Reset cart</span>
    </div>
  )
}

export default Cart