import React from 'react'
import '../Component/Form.css'
import {Link} from 'react-router-dom'
import {useState } from 'react';

const Form = () => {
 const [formData, setFormData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
 })
const handleChange =(event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
}
  return (
    <div className='form-container'>
      <h1>Send form data to a table</h1>
      <fieldset>
        <form>
            <label html for = 'email'>
                <span>Email</span>
                <span><input type='text' name='email' onChange={handleChange} /></span>
                </label>
                <label html for = 'email'>
                <span>First Name</span>
                <span><input type='text' name='firstname' onChange={handleChange}/></span>
                </label>
                <label html for = 'email'>
                <span>Last Name</span>
                <span><input type='text' name='lastname' onChange={handleChange}/></span>
                </label>
                <label html for = 'email'>
                <span>Phone no</span>
                <span><input type='tel' name='phoneno' onChange={handleChange}/></span>
                </label>
                <label html for = 'email'>
                <span>Password</span>
                <span><input type='password' name='password' onChange={handleChange}/></span>
                </label>
                <div className='button'><Link to='/table' className='link' state={formData}>Submit</Link></div>
        </form>
      </fieldset>
    </div>
  ) 
}

export default Form
