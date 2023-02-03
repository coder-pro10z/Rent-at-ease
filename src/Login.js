import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
const Login = () => {
  return (<>
    <div className="loginPage">
        
        <div className='inner_box'>
        </div>
             <div className='login_box'>
                <h1>Login</h1>
                <h3>Enter your username and password</h3>
    
                <input className="" type="text" placeholder='Username'></input>
                <br></br>
                <input className='' type="password" placeholder='Password'></input>
                <br></br>
                <Button> Login</Button>

        </div>
    </div>
  </>
  )
}

export default Login
