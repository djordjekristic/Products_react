import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'



function Products (props){

    
    let [products, setProducts] = useState( 
        {
            'iphon 14': 1000,
            'iphon 15': 1200,
            'samsung 23': 1500
        }
    
    )
    function search (e){
        const searchTerm = e.currentTarget.value.toLowerCase();
        const productsNames = Object.keys(products);

        for(let product in productsNames){
            let productName = productsNames[product].toLowerCase()

            if(productName === searchTerm){
                setInfomessage('product is hier')
                break;
            } else{
                setInfomessage('product is not hier')
            }
        }
        
        
      }

    let [newProductName, setNewProductName] = useState("")
    let [newProductPrice, setNewProductPrice] = useState("")
    let [infomessage,setInfomessage] = useState();
    function createProduct (e){
         if (newProductName === ""){
            return
         }
         if (newProductPrice === ""){
            return
         }
         let newProduct = {[newProductName]:parseInt(newProductPrice)}

        setProducts(currentProducts => ({
            ...currentProducts,
            ...newProduct
        }))
    }

        
     
    return(
        <>
        
        <div className="d-flex justify-content-center">
        {Object.entries(products).map(([phone,price])=>(
        <div>
             <h3 className="mt-3">{phone}</h3>
            <p className="m-3">${price}</p>
            <p className="m-3">Price with tax: ${CalculateTax(price,props.tax)}</p>
        </div>    
            
           
        ))}
        
        </div>
        
        
        
        <div>
            <div className="form-control">
               <input type="text" onInput={(e) => setNewProductName(e.target.value)} placeholder="new product name" />
               
            </div>
            <div className="form-control">
                <input type="number" onInput={(e) => setNewProductPrice(e.target.value)} placeholder="new product price" />
            </div>
            
            
            <button className="btn btn-primary mb-3" onClick={createProduct}>Add new product</button>
           <div>
             <button className="btn btn-danger"  onClick={ () => setProducts({})} >Delete</button>
            </div> 

            

        </div>
        <div className="form-control">
                <input type="text" onInput={search} placeholder="search" />
                <p className="text-success">{infomessage}</p>
        </div>

        </>
    )
}
function CalculateTax (price,tax){
  return ((price*tax)/100)+price
}

export default Products