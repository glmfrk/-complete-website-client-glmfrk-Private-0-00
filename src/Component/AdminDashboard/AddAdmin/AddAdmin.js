import React from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
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
        <div>
             <form className="p-5"  onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3 row d-flex dashFrom">
                    <label for="addAdmin" class="form-label text-white font-weight-bold">Admin Email</label>
                    <input name="addAdmin" type="email" className="form-control font-weight-bold" id="addAdmin" placeholder="addadmin@admin.com"  required  {...register("addAdmin")} /> 
                </div>
                <input type="button" className="btn btn-success " type="submit" />
            </form>
        </div>
    );
};

export default AddAdmin;