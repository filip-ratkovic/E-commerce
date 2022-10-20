import React from 'react'

function Login() {
  return (
    <div className="login-body">
      <div className="login-dropdown" >
        <main className="login-main">
          <div className="signup-conteiner">
          <h2 id="signup-title">Sign up</h2>
            <form action="">
              <input type="text" name="name" id="signName" placeholder="User name" />
              <input type="email" name="email" id="signEmail" placeholder="Email" />
              <input type="password" name="password" id="signPassword" placeholder="Password" /><br />
              <button className="btn-signup">Sign up</button>
            </form>
          </div>
          <div className="login-conteiner">
            <h2 id="login-title">Login</h2>
            <form action="">
              <input type="email" name="email" id="loginEmail" placeholder="Email" />
              <input type="password" name="password" id="loginPassword" placeholder="Password" /><br />
              <button className="btn-signup">Sign up</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Login