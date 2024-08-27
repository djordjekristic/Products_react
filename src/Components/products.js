
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Products (props){

    
        
    

    let [phones,setPhones] = useState(
        {"iphon 14": 1200,
        "samsung 12": 1100,
        "huawei 40": 1300}) 
    let [newPhoneName,setNewPhoneName] = useState("");
    let [newPhonePrice,setNewPhonePrice] = useState("");
    let [infoMessage,setInfoMessage] = useState()


    function addPhone (){
        if(newPhoneName === ""){
            return
        }
        if(newPhonePrice === ""){
            return
        }

        let newPhone = {[newPhoneName]:parseInt(newPhonePrice)}

        setPhones(currentPhones =>({
            ...currentPhones,
            ...newPhone
        }))
       
    }

    function search (e){

        let searchTerm = e.currentTarget.value.toLowerCase(); 
       
        let keys = Object.keys(phones);
        
        for(let key in keys){
            let keyName = keys[key].toLocaleLowerCase();

            if(searchTerm === keyName){
              setInfoMessage('product is find')
              break;
              
           
            }else{
                setInfoMessage('finding...')
                
            }
        }
    }


    return(
        <>
         
         <div className="d-flex justify-content-center">
         {Object.entries(phones).map( ([phone,price]) => (
           <div>
            <h3 className="m-3">{phone}</h3>
            <p className="m-5 mt-1">${taxCalculate(price,props.tax)}</p>
           </div>
           
         )
        )}
         </div>
         <div className="container">
        <h3>Add new product</h3>
        <div >
            <div className="form-control">
               <input onInput={e => setNewPhoneName(e.target.value)} placeholder="phone name" type="text"/> 
            </div>
            <div className="form-control">
               <input onInput={e => setNewPhonePrice(e.target.value)} placeholder="phone price" type="number"/>
            </div>
              <button className="btn btn-primary" onClick={addPhone}>Create product</button>

        </div>
        </div>
        <div className="form-control">
            <p>{infoMessage}</p>
           <input onInput={search} type="text" placeholder="search"/>
        </div>
        <button className="btn btn-danger" onClick={(e) => setPhones('')}>Delete</button>
        
        </>
    )
    function taxCalculate (price,tax){
        return ((price*tax)/100)+price
        
    }
}

export default Products