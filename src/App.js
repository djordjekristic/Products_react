import { useState } from "react";
import Products from "./Components/Products"


function clickOnButton (){
  console.log("work");
}





function App (){

  let [name,setName] = useState("djole");
  let [tax,setTax] = useState(20);

  function changeTax(e){
    setTax(e.target.value);
  }

  function changeName(e){
    setName(e.target.value)
  }
  return(
    <>
    <Products tax={tax}/>
    <Products tax="30"/>
    <Products tax="40"/>
    <br/>
    <button onClick={clickOnButton}>{name}</button>
    <input type="text" onInput={changeName}/>
    <input type="number" onInput={changeTax} placeholder="tax"/>
    
    </>
  )
}
export default App