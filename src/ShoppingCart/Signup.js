import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        paseord: '',
        cpassword: ''
    });
    const [error, setError] = useState({});
    const [valid, setValid] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let isvalid = true;
        let validationError = {}
        if (formData.fname === "" || formData.fname === null) {
            isvalid = false;
            validationError.fname = "First name is required"
        }
        if (formData.lname === "" || formData.lname === null) {
            isvalid = false;
            validationError.lname = "Last name is required"
        }
        if (formData.email === "" || formData.email === null) {
            isvalid = false;
            validationError.email = "Email is required"
        } else if (!/\S+@+\S+\.\S+/.test(formData.email)) {
            isvalid = false;
            validationError.email = "Email is not valid"
        }
        if (formData.password === "" || formData.password === null) {
            isvalid = false;
            validationError.password = "Password is required"
        } else if (formData?.password?.length < 6) {
            isvalid = false;
            validationError.password = "Password length atleast 6 char"
        }
        if (formData.cpassword !== formData.password) {
            isvalid = false;
            validationError.cpassword = "Confirm Password is not match"
        }
        setError(validationError);
        setValid(isvalid);
        
        if (Object.keys(validationError).length === 0) {
            alert("Signup Successfully");
            navigate('/Login');
        }
    }

    return (
        <div >
            <div class="container-fluid">
                <div class="row" style={{ backgroundColor: 'blueviolet' }}>
                    <div class="col-md-6 offset-md-3 ">
                        <div class="signup-form">
                            <form class="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
                                <h4 class="mb-5 text-secondary">Create Your Account</h4>
                                {
                                    valid ? <></> :
                                        <span className='text-danger'>
                                            {error.fname},{error.lname},{error.email},{error.password},{error.cpassword}
                                        </span>
                                }
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label>First Name<span class="text-danger">*</span></label>
                                        <input type="text" name="fname" class="form-control" placeholder="Enter First Name"
                                            onChange={(event) => setFormData({ ...formData, fname: event.target.value })} />
                                    </div>

                                    <div class="mb-3 col-md-6">
                                        <label>Last Name<span class="text-danger">*</span></label>
                                        <input type="text" name="Lname" class="form-control" placeholder="Enter Last Name"
                                            onChange={(event) => setFormData({ ...formData, lname: event.target.value })} />
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label>Email<span class="text-danger">*</span></label>
                                        <input type="email" name="email" class="form-control" placeholder="Enter Email"
                                            onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
                                    </div>

                                    <div class="mb-3 col-md-12">
                                        <label>Password<span class="text-danger">*</span></label>
                                        <input type="password" name="password" class="form-control" placeholder="Enter Password"
                                            onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label>Confirm Password<span class="text-danger">*</span></label>
                                        <input type="password" name="confirmpassword" class="form-control" placeholder="Confirm Password"
                                            onChange={(event) => setFormData({ ...formData, cpassword: event.target.value })} />
                                    </div>
                                    <div class="col-md-12">
                                        <button class="btn btn-primary float-end">Signup Now</button>
                                    </div>
                                </div>
                            </form>
                            <p class="text-center mt-3 text-white">If you have account, Please <Link to="/Login" >Login Now</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Signup;