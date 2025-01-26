import { useState } from "react";
import Products from "./Components/Products"
import "bootstrap/dist/css/bootstrap.min.css"


function clickOnButton (){
  console.log("work");
}





function App (){

  let [name,setName] = useState("djole");
  let [tax,setTax] = useState(20);

  function changeTax(e){
    setTax(e.target.value);
  }
  return(
    <div className="container">
    <input type="number" className="m-2" onInput={changeTax} placeholder="tax"/>
    <Products tax={tax}/>
    
    <br/>
    
    
    
    
    </div>
  )
}
export default App