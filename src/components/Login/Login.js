import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const loginSubmit = event =>{
        event.preventDefault();
        const formValue = event.target;
        const email = formValue.email.value;
        const password = formValue.password.value;
        loginUser(email,password)
        .then(result =>{
            alert("Login Successfull");
            formValue.reset();
        })
        .catch(error =>{
            const errorCode = error.code;
            const errorMessage = error.message;
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={loginSubmit}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" name="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;