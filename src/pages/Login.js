import React from 'react'
import './Login.css';
const Login = () => {
  return (
    <div className = 'page-container'>
        <div id = 'first-half'>

        </div>
        <div id = 'second-half'>
            <form>
                <label htmlFor = 'pass'>password</label>
                <input type = 'password' id = 'pass'></input>
                <label htmlFor = 'username'>username</label>
                <input type = 'username' id = 'user'></input>
            </form>
        </div>
       
    </div>
  )
}

export default Login;