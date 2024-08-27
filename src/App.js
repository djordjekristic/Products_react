import { useState } from "react";
import Products from "./Components/Products"



function App (){
    
    let [tax,setTax] = useState(0);
    return(
        <>
        <div className="container m-5">
          <div className="form-control">
        <input type="nummber" placeholder="tax value" onInput={(e) => setTax(e.target.value)}/>
          </div>
        <Products tax={tax}/>
          
        </div>
        
        </>
    )
}
export default App