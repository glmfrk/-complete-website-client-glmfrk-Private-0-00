import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddServices = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data =>{
        const eventData = {
            serviceName: data.serviceName,
            serviceLength: data.serviceLength,
            serviceCost: data.serviceCost,
            cgpa: data.cgpa,
            serviceBio: data.serviceBio,
            imageURL:imageURL
        }
        const url = `http://localhost:4500/admin/add_service`
        console.log(eventData);
        fetch(url, {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log("server side loading",res))
    };

    const handleImgUp = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '13c0e89f1c0b2626270a9bad5f380772');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then((response) => {
            setImageURL(response.data.data.display_url);
            console.log(response.data.data.display_url);
        
          })
          .catch( (error) => {
            console.log(error);
          });
    }
    return (
        <div className="p-5 shadow" style={{height:"100vh"}}>
        <form className="p-5 font-weight-bold"  onSubmit={handleSubmit(onSubmit)}>
            
      
        <div className="row mb-3">           
            <div className="col-md-6">
                <label for="imgUpload" class="form-label">Upload Image</label>
                <input onChange={handleImgUp}  name="exampleRequired"  type="file" className="form-control" id="imgUpload"  />                     
            </div>
            
            <div className="col-md-6">
                <label for="serviceLevel" class="form-label">Service Title</label>
                <input name="serviceName" type="text" className="form-control" placeholder="Service Name" {...register("serviceName")}  /> 
               
            </div>
            
        </div>
        <div className="row mb-3">           
            <div className="col-md-4">
                <label for="serviceLength" class="form-label">Service Length</label>
                <input name="serviceLength"  type="text" className="form-control" id="serviceLength" placeholder="Enter Service Length" {...register("serviceLength")}   />                     
            </div>
            <div className="col-md-4">
                <label for="serviceCost" class="form-label">Service Free</label>
                <input name="serviceCost"  type="number" className="form-control" id="serviceCost" placeholder="Service Cost" {...register("serviceCost")}  />                     
            </div>
            
            <div className="col-md-4">
                <label for="qualifiction" class="form-label">Qualifiction or CGPA</label>
                <input name="cgpa" type="text" className="form-control" id="qualifiction" {...register("cgpa")}   /> 
            </div>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea name="serviceBio"  class="form-control" id="exampleFormControlTextarea1" rows="3"  {...register("serviceBio")}  ></textarea>
        </div>

        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        
        <input type="button" className="btn btn-success " type="submit" />
        </form>
    </div>
    );
};

export default AddServices;