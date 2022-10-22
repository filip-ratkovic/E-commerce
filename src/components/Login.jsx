import { useEffect } from 'react';
import {React, useState} from 'react'

function Login() {
const [loginUp, setLoginUp] = useState(false);

const loginUpHandler = () => {
  if(loginUp) {
    setLoginUp(curent => !curent);
  }else {
    setLoginUp(curent => !curent);
  }
}

useEffect(() => {

},[])

  return (
    <div className="login-body">
      <div className="login-dropdown" >
        <main className="login-main">
          <div className="signup-conteiner">
          <h2 id="signup-title" onClick={loginUpHandler} >Sign up</h2>
            <form action="">
              <input type="text" name="name" id="signName" placeholder="User name" required/>
              <input type="email" name="email" id="signEmail" placeholder="Email" required />
              <input type="password" name="password" id="signPassword" placeholder="Password"  required/><br />
              <button className="btn-signup">Sign up</button>
            </form>
          </div>
          <div className=  {`login-conteiner ${loginUp ? "loginUp-active" : ""}`}>
            <h2 id="login-title" onClick={loginUpHandler}>Login</h2>
            <form action="">
              <input type="email" name="email" id="loginEmail" placeholder="Email" required />
              <input type="password" name="password" id="loginPassword" placeholder="Password" required /><br />
              <button className="btn-signup">Login</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Login