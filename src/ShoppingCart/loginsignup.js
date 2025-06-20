import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

const Loginsignup = () => {
    const [action, setAction] = useState('Login');
    const navigate = useNavigate();

    const onLoginCLick = () => {
        // setAction("Login"); 
        navigate('/Product');    
    }
    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: 'blueviolet' }}>
            <div className='bg-white p-5'>
                <div>
                    <h1 className='text-primary text-center'>{action}</h1>
                </div>
                 {action === 'Login' ?<div></div>: <div className='input-group mb-3' >                   
                    <input type='text' className='form-control w-50 mx-auto' placeholder='Enter your name' />
                    <span className='input-group-text'> <i class="bi bi-person-circle"></i> </span>
                </div>}
                
                <div className="input-group mb-3 ">
                    <input type="email" className="form-control w-50 mx-auto" id="exampleFormControlInput1" placeholder="name@example.com" />
                    <span className='input-group-text'> <i class="bi bi-envelope"></i> </span>
                </div>
                <div className="input-group mb-3 ">
                    <input type="password" id="inputPassword5" className="form-control w-50 mx-auto" placeholder="password" aria-describedby="passwordHelpBlock" />
                    <span className='input-group-text'> <i class="bi bi-bag-fill"></i> </span>
                </div>
                <div id="passwordHelpBlock" className="form-text text-center mb-3" aria-hidden ="true">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
                <div>
                    <p  id= "lostpassword" className='mb-3'>Forgot password?<span>Click Here!</span> </p>
                </div>
                <div>
                    <button type='submit' className='w-50 mx-auto d-block mt-3 text-white'
                        style={{ backgroundColor: action === "Login" ? 'gray' : 'blueviolet' }} onClick={() => { setAction("Sign up") }} >Sign up</button>
                </div>
                <div>
                    <p className='text-center mt-3'>Already have an account? <a href="/" className='text-primary' onClick={onLoginCLick}> Login</a></p>
                </div>
            </div>
        </div >
    )
}

export default Loginsignup;