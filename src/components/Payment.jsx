import { useEffect, useState } from "react";

const Payment = ()=>{
 

const initialPayment ={
    evc: false,
    zaad: false,
    sahal: false,

};

const [paymentMethod, setPaymentmethod]= useState(initialPayment);
const [updated, setUpdated]=  useState(false);

useEffect(()=>{

},[updated]);

    return(
    <div>
        <h2> pay with</h2>
        <div className={`payment-card ${paymentMethod.zaad && "selected"}`}
         onClick={()=> setPaymentmethod({...initialPayment, zaad: true}) }
        >
            
                <h3>ZAAD SERVICE</h3>

            
        </div>

        <div className={`payment-card ${paymentMethod.evc && "selected"}`}
                 onClick={()=> setPaymentmethod({...initialPayment, evc: true}) }

        >
          
                <h3>EVC PLUS</h3>

            
        </div>

        <div className={`payment-card ${paymentMethod.sahal && "selected"}`}
        onClick={()=> setPaymentmethod({...initialPayment, sahal: true}) }
        >
            
        
                <h3>SAHAL SERVICE</h3>

           
        </div>
        <form>
            <input type="text" className=" form-control" 
            placeholder="2526"
            />
            <button className="btn-proceed">proceed</button>
        </form>
    </div>
    );

};

export default Payment;