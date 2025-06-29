import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    // const [action, setAction] = useState('Login');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [valid, setValid] = useState(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPasword(e.target.value);
        console.log(e.target.value);
    }

    const navigate = useNavigate();
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let isvalid = true;
        let validationError = {}
        if (email === "" || email === null) {
            isvalid = false;
            validationError.email = "Email is required"
        } else if (!/\S+@+\S+\.\S+/.test(email)) {
            isvalid = false;
            validationError.email = "Email is not valid"
        }
        if (password === "" || password === null) {
            isvalid = false;
            validationError.password = "Password is required"
        } else if (password?.length < 6) {
            isvalid = false;
            validationError.password = "Password length atleast 6 char"
        }
         setValid(isvalid);
        if (Object.keys(validationError).length === 0) {
            alert("Login Successfully");
            navigate('/Product');
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: 'blueviolet' }}>
            <div className='bg-white p-5'>
                <div>
                    <h1 className='text-primary text-center'>Login</h1>
                </div>
                {
                    valid ? <></> :
                        <span className='text-danger'>
                            <p style={{ color: 'red', marginRight: 10 }}>Invalid email format</p>
                        </span>
                }
                <div className="input-group mb-3 ">
                    <input type="email" value={email} className="form-control w-50 mx-auto" id="exampleFormControlInput1"
                        placeholder="name@example.com" onChange={handleEmailChange} />
                    <span className='input-group-text'> <i class="bi bi-envelope"></i> </span>

                </div>
                <div className="input-group mb-3 ">
                    <input type="password" value={password} id="inputPassword5" className="form-control w-50 mx-auto"
                        placeholder="password" aria-describedby="passwordHelpBlock" onChange={handlePasswordChange} />
                    <span className='input-group-text'> <i class="bi bi-bag-fill"></i> </span>
                </div>
                <div id="passwordHelpBlock" className="form-text text-center mb-3" aria-hidden="true">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
                <div>
                    <p id="lostpassword" className='mb-3'>Forgot password?<span>Click Here!</span> </p>
                </div>
                <div>
                    <button type='submit' className='form-text text-center mb-3 btn btn-primary' onClick={handleLoginSubmit}>Submit</button>
                </div>
            </div>
        </div >
    )
}

export default Login;