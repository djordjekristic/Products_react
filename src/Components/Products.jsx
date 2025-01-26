import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"



            

function Products (props){

    let [products,setProducts] = useState({
        "iPhone 13": 1500,
        "iphone 15": 2000,
        "Samsung 24": 1800
      });

      let[newProductName,setNewProductName] = useState("");
      let[newProductPrice,setNewProductPrice] = useState("");
      let[infoMessage,setInfoMessage] = useState();

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

      function search (e){
          let searchTerm = e.currentTarget.value.toLowerCase();
          let productNames = Object.keys(products);
          
          for(let product in productNames){
            let productName = productNames[product].toLocaleLowerCase();

            if(searchTerm === productName){
                setInfoMessage("uspesno ste nasli proizvod");
                break
                
            }else{
                setInfoMessage("niste nasli proizvod")
            }
          }
          

      }
    
    return(
        <>
        <div className="d-flex justify-content-center">
         {Object.entries(products).map(([phone,price]) =>{
            return(
            <div className="m-2">
                <h3 className="mx-2">{phone}</h3>
                <p>${calculateTax(price,props.tax)}</p>
            </div>
            )
            
         })}
         </div>
         <div>
         <p>{infoMessage}</p>
         <input className="form-control"  type="text" placeholder="search" onInput={search} /><br/>
         </div>
         
         <hr/>
         <h4>Add new product</h4>
         <input placeholder="Product name" type="text" onInput={(e) => setNewProductName(e.target.value)} />
         <input placeholder="Product price" type="number" onInput={(e) => setNewProductPrice(e.target.value)} />
         <button onClick={addProduct}>Add new product</button><br/>
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