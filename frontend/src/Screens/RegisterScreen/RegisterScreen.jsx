import React from 'react'
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerUserSchema } from '../../Validations/userValidation';
import { Button } from 'react-bootstrap';

const RegisterScreen = () => {

  const [userData, setUserData] = useState({});



  const onInputChange = (event) => {
    event.persist();

    setUserData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })

  }

  const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(userData);
  }

  return (
    <div className="container">
        <form className="form" onSubmit={onFormSubmit}>
           <div className="form-control">
               <label htmlFor="firstname">First name: </label>
               <input type="text" name="firstname" id="firstname" placeholder="First name" required onChange={onInputChange} />
           </div>
           <div className="form-control">
               <label htmlFor="lastname">Last name: </label>
               <input type="text" name="lastname" id="lastname" placeholder="Last name" required onChange={onInputChange} />
           </div>
           <div className="form-control">
               <label htmlFor="username">Username: </label>
               <input type="text" name="username" id="username" placeholder="Username" required onChange={onInputChange} />
           </div>
           <div className="form-control">
               <label htmlFor="email">Email: </label>
               <input type="email" name="email" id="email" placeholder="Email" required onChange={onInputChange} />
           </div>
           <div className="form-control">
               <label htmlFor="password">Password: </label>
               <input type="password" name="password" id="password" placeholder="Password" required onChange={onInputChange} />
           </div>
           <Button variant="primary" type="submit">Register</Button>
        </form>
    </div>
   
  )
}

export default RegisterScreen