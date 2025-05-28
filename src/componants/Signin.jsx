import React, { useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';

const Signin = () => {

    const {signinuser} = useContext(AuthContext);

    const handlesignin = e =>
    {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
         const password = form.password.value;
          console.log(email ,password);

          signinuser(email,password)
          .then(result =>
          {
            console.log(result.user);

            const user = 
            {
                email,
                lastLoggetAt: result.user?.metadata?.lastSignInTime
            }


  
                 fetch('http://localhost:5000/user',
                {
                    method : 'PATCH',
                    headers:
                    {
                        'content-type':'application/json'
                    },
                    body :JSON.stringify(user)
                }
            )
            .then(res=>res.json())
            .then(data=>
            {
                console.log(data);
            }
            )



        }
          )
          .catch(error =>
          {
            console.error(error);
          }
          )
    }
    return (
        <div>
            <h1> This is sign in section</h1>


            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col  ">
    <div className="text-center  ">
      <h1 className="text-5xl font-bold">Login now!</h1>
       
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handlesignin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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

export default Signin;