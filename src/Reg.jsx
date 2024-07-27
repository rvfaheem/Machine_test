import React, { useState } from 'react'
import axios from 'axios' 

export const Reg = () => {

    const [data,setData] =useState('')

    let handleChange=(event)=>{
        setData({ ...data, [event.target.name] : event.target.value});
    }
    
    let handleSubmit=async(event)=>{
        event.preventDefault();
        let response = await axios.post(`http://localhost:4000/admin/register/`,{...data})
        console.log(response);
        setData(response.data)
    }

  return (
    <div class='Reg'>
        <h2>Registration Form</h2>
        <label>Name</label>
        <input  onChange={handleChange} type='text' name='name' /><br />
        <label>gmail</label>
        <input type="text" onChange={handleChange} name='email' /><br />
        <label>Password</label>
        <input type="text" onChange={handleChange} name='password' />

        <button type='Submit' onClick={handleSubmit}>Register</button>
    </div>
  )
}
