import React from 'react';
import { useForm } from "react-hook-form";
import creaditCart from '../../../images/credit-card.png'

const OrderService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log('data submit', data)
        fetch('http://localhost:4500/addUser',{
            method:'POST',
            headers: {'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                alert('Successfully')
            }
            else{
              console.log(success)  
            }
        })
    }

    return (
       <div className="row">
           <div className="col-md-8">
           <form className="p-5"  onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3 row d-flex dashFrom">                    
                    <input name="userName" type="text" className="form-control font-weight-bold" id="userName" placeholder="Your Name"  required  {...register("userName")} />                 
                </div>
                <div class="mb-3 row d-flex dashFrom">                    
                    <input name="addAdmin" type="email" className="form-control font-weight-bold" id="addAdmin" placeholder="addadmin@admin.com"  required  {...register("addAdmin")} />                 
                </div>
                <div class="mb-3 row d-flex dashFrom">                    
                    <input name="serviceName" type="text" className="form-control font-weight-bold" id="serviceName" placeholder="Service Title"  required  {...register("serviceName")} /> 
                </div>
                <div className="mb-3 row d-flex font-weight-bold dashFrom">
                    <div className="form-check mr-3">
                        <input className="form-check-input" type="radio" name="creaditCart" id="creaditCart1" value="Creadit Cart" {...register("creaditCart")}/>
                        
                        <label className="form-check-label mr-2" for="creaditCart1">
                            <img className=" mr-2"  src={creaditCart} alt="creadit cart" height="20" /> 
                            Creadit Cart
                        </label>
                        
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="stripe" id="stripe1" value="Stripe" {...register("stripe")}/>
                        <label className="form-check-label" for="stripe1">
                            
                            Stripe
                        </label>
                    </div>
                  
                </div>
                <div className="mb-3 row d-flex dashFrom">
                    <input name="cardNumber" type="number" className="form-control font-weight-bold" id="serviceName" placeholder="Card Number"  required  {...register("cardNumber")} /> 
                </div>
                <div className="mb-3 row d-flex dashFrom">
                    <div className="col">
                        <input name="orderDate" type="date" className="form-control font-weight-bold" id="orderDate" value="Order Date" required  {...register("orderDate")} /> 
                    </div>
                    <div className="col">
                    <input name="CVC" type="text" className="form-control font-weight-bold" id="CVC" value="CVC" required  {...register("CVC")} /> 
                    </div>
                </div>
                <div className="mb-3 row d-flex dashFrom">
                    <div className="col">
                        <p className="font-weight-bold">Your Service charged will be<span> $1000</span></p>
                    </div>       
                </div>
                <input type="button" className="btn btn-success " type="submit" />
                
            </form>
           </div>
       </div>
    );
};

export default OrderService;