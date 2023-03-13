import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const signOutCurrentUser = ()=>{
        signOutUser()
        .then(() => {
            alert('Logout Successfull');
          }).catch((error) => {
            // An error happened.
          });
    }
    
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {user?.email && <span>Welcome {user.email}</span>}
                {user?.email ?
                    <button className='btn btn-sm' onClick={signOutCurrentUser}>Sign Out</button>
                    :
                    <Link to="/login">
                    <button className='btn btn-sm'>Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Header;