import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import "./Navbar.scss"
import Cart from '../cart/Cart';
import { useSelector } from 'react-redux';
const Navbar = () => {
   const [open, setOpen] = useState(false)
   const products =  useSelector(state=>state.cart.products)

  return (
    <div className='navbar'>
        <div className='wrapper'>
        <div className='left'>
            <div className='item'>
                <img src='/img/en.png' alt=''/>
                <KeyboardArrowDownIcon/>
            </div>
            <div className='item'>
                <span>USD</span>
                <KeyboardArrowDownIcon/>
            </div>
            <div className='item'>
               <Link className = "link" to = "/prductso/1">Men</Link>
            </div>
            <div className='item'>
               <Link className = "link" to = "/prductso/2">Women</Link>
            </div>
            <div className='item'>
               <Link className = "link" to = "/prductso/3">Children</Link>
            </div>
            <div className='item'>
               <Link  className = "link" to = "/prductso/4">Accessories</Link>
            </div>
        </div>
        <div className='center'>
            <Link className = "link" to="/">MY STORE</Link>
        </div>
        <div className='right'>
        <div className='item'>
               <Link className = "link" to = "/">Home</Link>
            </div>
            <div className='item'>
               <Link className = "link" to = "/">About</Link>
            </div>
            <div className='item'>
               <Link className = "link" to = "/">Contact</Link>
            </div>
            <div className='item'>
               <Link className = "link" to = "/">Store</Link>
            </div>
            <div className='icons'>
                <SearchIcon/>
                <FavoriteBorderOutlinedIcon/>
                <PersonOutlineIcon/>
                <div className='cartIcon' onClick={()=>setOpen(!open)}>
                <ShoppingCartOutlinedIcon/>
                <span>{products.length}</span>
                </div>
            </div>
        </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar