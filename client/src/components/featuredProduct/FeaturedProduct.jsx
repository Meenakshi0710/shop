import React, { useEffect, useState } from "react";
import "./featuredProduct.scss";
import Card from "../card/Card";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const FeaturedProduct = ({ type }) => {
 
 const{data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
 console.log(data);
  return (
    <div className="featuredProduct">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          repudiandae, quidem iusto provident ex vel saepe perspiciatis possimus
          modi id illum incidunt quaerat, minima laudantium enim reprehenderit
          repellat. Eum, beatae.
        </p>
      </div>
      <div className="bottom">
        {error ? "Something went wrong" : (loading ? "loading" : (data?.map((item) => <Card item={item} key={item.id} />)))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
