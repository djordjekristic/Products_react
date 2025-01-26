import { useState } from "react";



            

function Products (props){

    let [products,setProducts] = useState({
        "iPhone 13": 1500,
        "iphone 15": 2000,
        "Samsung 24": 1800
      });

      let[newProductName,setNewProductName] = useState("");
      let[newProductPrice,setNewProductPrice] = useState("");

      function addProduct(){
        if(newProductName === ""){
            return;
        }
        if(newProductPrice === ""){
            return;
        }
        
        let newProduct = {[newProductName] : parseInt(newProductPrice)}

        setProducts(currentProducts => ({
            ...currentProducts,
            ...newProduct
        }))
      }
    
    return(
        <>
         {Object.entries(products).map(([phone,price]) =>{
            return <p>{phone}, ${price}, with tax: ${calculateTax(price,props.tax)}</p>
         })}
         <button onClick={(e) => setProducts("")}>Delete product</button>
         <hr/>
         <input placeholder="Product name" type="text" onInput={(e) => setNewProductName(e.target.value)} />
         <input placeholder="Product price" type="number" onInput={(e) => setNewProductPrice(e.target.value)} />
         <button onClick={addProduct}>Add new product</button>

        </>
    )
}

function calculateTax (price,tax){
    return(
        ((price*tax)/100)+price
    )
}

export default Products