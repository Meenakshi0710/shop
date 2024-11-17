import React, { useState } from 'react'
import List from '../../components/list/List'
import { useParams } from 'react-router-dom'
import "./product.scss"
import useFetch from '../../hooks/useFetch'

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, SetmaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)
  const [selectedsubcat, setSelectedsubcat] = useState([])
  const{data,loading,error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
 

  const handleChange = (e) =>{
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedsubcat(isChecked ? [...selectedsubcat,value] : selectedsubcat.filter((item) => item !== value))
  }
  console.log(selectedsubcat)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map(item =>(
 <div className="inputItem" key={item.id}>
 <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
 <label htmlFor={item.id}>{item.title}</label>
 </div>
          ))}
        
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type='range' min={0} max={10000} onChange={(e) => SetmaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name='price' onChange={e => setSort("asc")}/>
            <label htmlFor='asc'>Price(lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='asc' value="desc" name='price' onChange={e => setSort("desc")}/>
            <label htmlFor='asc'>Price(highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="categoryimg" src="/img/2.jpg" alt="" />
        <List catId = {catId} maxPrice = {maxPrice} sort = {sort} subcat = {selectedsubcat}/>
      </div>
    </div>
  )
}

export default Products