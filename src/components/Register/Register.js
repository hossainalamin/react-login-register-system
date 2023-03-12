import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const registerSubmit = event =>{
        event.preventDefault();
        const formValue = event.target;
        const email = formValue.email.value;
        const password = formValue.password.value;
        const name = formValue.name.value;
        createUser(email, password)
        .then(result => {
            alert('Hello');
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
                <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={registerSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required/>
                    </div>
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
                        <Link to="/login" className="label-text-alt link link-hover">Already, Have an account?</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;<h2>This is register</h2>