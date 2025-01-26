import { useState } from "react";



            

function Products (props){

    let [products,setProducts] = useState({
        "iPhone 13": 1500,
        "iphone 15": 2000,
        "Samsung 24": 1800
      });
    
    return(
        <>
         {Object.entries(products).map(([phone,price]) =>{
            return <p>{phone}, ${price}, with tax: ${calculateTax(price,props.tax)}</p>
         })}
         <button onClick={(e) => setProducts("")}>Delete product</button>
        </>
    )
}

function calculateTax (price,tax){
    return(
        ((price*tax)/100)+price
    )
}

export default Products