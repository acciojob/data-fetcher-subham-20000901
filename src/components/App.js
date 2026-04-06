
import React from "react";
import './../styles/App.css';
import {useState,useEffect} from "react";


const App = () => {
  const API_KEY = "https://dummyjson.com/products"
  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetch(API_KEY)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data.products);
    });
  
  },[]);
 
  return (
    <div>
       {products.map((product,index) => (
        <pre key={index}>{JSON.stringify(product, null, 2)}</pre>
       ))}
    </div>
  )
}

export default App;
