import React from 'react';
import { useForm } from "react-hook-form";

const UserReview = () => {
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
        <div className="p-5 shadow" style={{height:"100vh"}}>
            <div className="row">
                <div className="col-md-8">
                <form className="p-5 font-weight-bold"  onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3 row dashFrom">
                    <label for="userImage" class="form-label text-white ">Your Name</label>
                    <input name="userImage" type="file" className="form-control " id="userImage" placeholder="Your Name"    {...register("userImage")} /> 
                </div>
                <div class="mb-3 row dashFrom">
                    <label for="userName" class="form-label text-white ">Your Name</label>
                    <input name="userName" type="text" className="form-control " id="userName" placeholder="Your Name"    {...register("userName")} /> 
                </div>
                <div class="mb-3 row dashFrom">
                    <label for="Designation" class="form-label text-white ">Companys'name Designation</label>
                    <input name="Designation" type="text" className="form-control " id="Designation" placeholder="Companys'name Designation"    {...register("Designation")} /> 
                </div>
             
             
                <div class="mb-3 row dashFrom">
                <label for="exampleFormControlTextarea1" class="form-label text-white ">Description</label>
                <textarea name="userComments" class="form-control text-white" placeholder="Description" id="exampleFormControlTextarea1" rows="3" {...register("userComments")}></textarea>
            </div>

                {errors.exampleRequired && <span>This field is required</span>}
            
            <input type="button" className="btn btn-success " type="submit" />
            </form>
                </div>
            </div>
        </div>
    );
};

export default UserReview;