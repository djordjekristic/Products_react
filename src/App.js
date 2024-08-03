import Products from "./Components/products"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

function App (){

   let [tax,setTax] = useState(0);
   

   return(


      
      <>
      <div className="container" >
         <Products tax={tax}/>
         <div className="d-flex justify-content-end mt-3">
             <input type="text" placeholder="tax" onInput={(e) => setTax(e.target.value)}/>
         </div>
       
      
      </div>
      
       
  
      </>
   )


    
   
  
}

export default App