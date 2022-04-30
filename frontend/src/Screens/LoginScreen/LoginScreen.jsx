import React from 'react'
import { useState } from 'react';
import { loginUserSchema }  from '../../Validations/userValidation.js';
import { Button } from 'react-bootstrap';



const LoginScreen = () => {

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
    <div className="form-container">
       
          <form className="form" onSubmit={onFormSubmit}>
             <div className="form-control">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" placeholder="Email" required onChange={onInputChange} />
             </div>
             <div className="form-control">
                <label htmlFor="email">Password: </label>
                <input type="password" name="password" id="password" placeholder="Password" required onChange={onInputChange} />
             </div>
             <Button variant="primary" type="submit">Login</Button>
          </form>
    </div>
  )
}

export default LoginScreen;