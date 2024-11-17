import React, { useState } from 'react'
import "./productdetail.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const {id} = useParams()
  const [quantity, setQuantity] = useState(1)
  
 const{data,loading,error} = useFetch(`/products/${id}?populate=*`)
 const dispatch = useDispatch()
 console.log(data)
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={import.meta.env.VITE_UPLOAD_URL+data?.img?.url} alt="" />
          <img src={import.meta.env.VITE_UPLOAD_URL+data?.img2?.url} alt="" />
        </div>
        <div className="mainImg">
          <img src={import.meta.env.VITE_UPLOAD_URL+data?.img?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.title}</h1>
        <span className='price'>{data?.price}</span>
        <p>{data?.desc}</p>
     <div className="quantity">
      <button onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}>-</button>
      {quantity}
      <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
     </div>
     <button className='add' onClick={()=>dispatch(addToCart({
      documentId:data.documentId,
      id:data.id,
      title:data.title,
      desc:data.desc,
      price:data.price,
      img:data.img.url,
      quantity,
     }
     ))}>
      <AddShoppingCartIcon/> ADD TO CART
     </button>
     <div className="links">
      <div className="item">
        <FavoriteBorderIcon/> ADD TO WISH LIST
      </div>
      <div className="item">
        <BalanceIcon/> ADD TO COMPARE
      </div>
     </div>
     <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
              </div>
      </div>
    </div>
  )
}

export default Product