import React from "react"
import './signin.css'

const SignIn = () =>
{
    return (
        <body className="text-center">
    
        <main className="form-signin w-100 m-auto">
          <form>
           
          <img class="mb-4" src="./GMLTLOGO.jpg" alt="" width="72" height="57"  />
            <h1 className="h3 mb-3 fw-normal">Please sign in to GMLT</h1>
        
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>
        
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </main> 
        
            
          </body>
    )

}

export default SignIn