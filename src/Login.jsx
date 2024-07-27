import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const [data,setData]=useState('')
    const Navigate=useNavigate()

    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
        console.log(data);
    }

    let handleSubmit=async(event)=>{
        event.preventDefault()
      

        let response=await axios.post('http://localhost:4000/user/login',data);
        console.log(response);
        if(response.data){
            localStorage.setItem('id',response.data._id)
            localStorage.setItem('email',response.data.email)
            if(response.data.userType=='admin'){
                console.log('ok')
                Navigate('/admin')
            }
            else if(response.data.userType=="user"){
                console.log('ok')
            }
        }
        setData(data)
        console.log(data);
    }
  return (
    <div class='Reg'>
        <h4>Login</h4>
        <label>Gmail</label>
        <input type='text' onChange={handleChange} name='email' placeholder='G-mail' />

        <label>Password</label>
        <input type='password' onChange={handleChange} name='passsword' placeholder='Enter your Password' />

        <button onClick={handleSubmit} >Login</button> 
    </div>
  )
}
