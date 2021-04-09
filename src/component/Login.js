import React from 'react';


function Login(props) {

  const {
    email ,
  setEmail ,
  password ,
  setPassword ,
  emailError ,
  
  passwordError ,
  handleLogin ,
  handleSignUp ,
  hasAccount ,
  setHasAccount ,
  clearInputs,
  clearErrors
} = props;

function toggleHasAccount(){
  setHasAccount(!hasAccount);
}

    return (
<>
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Authentication</h5>
            <div className="form-signin">
              <div className="form-label-group">
                <input
                type="text"
                autoFocus
                required
                value = {email}
                onChange = {(e)=>{setEmail(e.target.value);clearErrors();}}
                id="inputEmail" className="form-control" placeholder="Email address"/>
                <label for="inputEmail">Email address</label>
                {emailError!==''? <p style={{textAlign:'center'}} className="text-danger">{emailError}</p>: null}
              </div>

              <div className="form-label-group">
                <input
                required
                value={password}
                onChange = {(e)=> {setPassword(e.target.value);clearErrors();}}
                type="password" id="inputPassword" className="form-control" placeholder="Password"/>
                <label for="inputPassword">Password</label>
                {passwordError!==''? <p style={{textAlign:'center'}} className="text-danger">{passwordError}</p>:null}
              </div>
              <div className="form-label-group">
              {hasAccount? (
                        <>
                        <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={handleSignUp}>Sign Up</button> <button className="btn btn-lg btn-secondary btn-block text-uppercase" onClick={clearInputs}>Clear</button>
                        <p>Have an account? <span className="text-warning" style={{cursor:'pointer'}} onClick={toggleHasAccount}>Sign In</span></p>
                        </>
                    ):(
                        <>
                        <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={handleLogin}>Sign In</button> <button className="btn btn-lg btn-secondary btn-block text-uppercase" onClick={clearInputs}>Clear</button>
                        <p>Don't have an account? <span className="text-warning" style={{cursor:'pointer'}} onClick={toggleHasAccount}>Sign Up</span></p>
                        </>
                    )}
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}

export default Login;