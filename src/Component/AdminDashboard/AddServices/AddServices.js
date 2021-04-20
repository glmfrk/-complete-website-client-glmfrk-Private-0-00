import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const ServicesBook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);

    const handleBlur = event =>{
        const newInfo = {...info}
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }
    const handleFileUp = event =>{
        const newFile = event.target.files[0];
        setFile(newFile);
    }
    const onSubmit = () => {     
        const formData = new FormData()
        formData.append('file', file);
        formData.append('serviceName', info.serviceName);
        formData.append('times', info.times);
        formData.append('serviceCost', info.serviceCost);
        formData.append('cgpa', info.cgpa);
        formData.append('serviceBio', info.serviceBio);
      
        fetch('http://localhost:4500/admin/add_service',{
            method:'POST',
            body:formData
        })
        .then(response => response.json())
        .then(success => {
          if(success){
            alert('Successfully')
          }
          else{
            console.log(success)  
          }
          
        })
        .catch(error => {
          console.error(error)
        })
      }

    // const onSubmit = data => {
    //     console.log('data submit', data)
    //     fetch('http://localhost:4500/admin/add_service',{
    //         method:'POST',
    //         headers: {'content-type':'application/json'},
    //         body:JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(success => {
    //         if (success) {
    //             alert('Successfully')
    //         }
    //         else{
    //           console.log(success)  
    //         }
    //     })

    // }
    return (
        <div className="p-5 shadow" style={{height:"100vh"}}>
            <form className="p-5 font-weight-bold"  onSubmit={handleSubmit(onSubmit)}>

            <div className="row mb-3">           
                <div className="col-md-6">
                    <label for="imgUpload" class="form-label">Upload Image</label>
                    <input onChange={handleFileUp} name="imgUpload" type="file" className="form-control" id="imgUpload"  />                     
                </div>
                
                <div className="col-md-6">
                    <label for="serviceLevel" class="form-label">Service Title</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="serviceName" placeholder="Service Name"  /> 
                   
                </div>
                
            </div>
            <div className="row mb-3">           
                <div className="col-md-4">
                    <label for="serviceLength" class="form-label">Service Length</label>
                    <input onBlur={handleBlur}  name="times" type="text" className="form-control" id="serviceLength" placeholder="Enter Service Length"   />                     
                </div>
                <div className="col-md-4">
                    <label for="serviceCost" class="form-label">Service Free</label>
                    <input onBlur={handleBlur}  name="serviceCost" type="number" className="form-control" id="serviceCost" placeholder="Service Cost" />                     
                </div>
                
                <div className="col-md-4">
                    <label for="qualifiction" class="form-label">Qualifiction or CGPA</label>
                    <input onBlur={handleBlur}  name="cgpa" type="text" className="form-control" id="qualifiction"   /> 
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea onBlur={handleBlur}  name="serviceBio"  class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
            </div>

            {errors.exampleRequired && <span>This field is required</span>}
            
            <input type="button" className="btn btn-success " type="submit" />
            </form>
        </div>
    );
};

export default ServicesBook;