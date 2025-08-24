import React, { useContext } from "react";
import img from "../../../src/assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";

const Register = () => {
      const {createUser} = useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email,password)
    .then(result=>{
         const loggedUser = result.user
         console.log(loggedUser)
    })
  };
  return (
    <div className="md:flex md:items-center  md:justify-center min-h-screen gap-10">
      <div className="md:w-1/2">
        <img
          src={img}
          alt="Login illustration"
          className=" h-full max-w-md mx-auto md:mx-0"
        />
      </div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col w-full">
          <h1 className="text-4xl font-bold text-center lg:text-left mb-6">
            Register Now!
          </h1>
          <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <label className="label">Name</label>
              <input
                type="name"
                name="name"
                className="input input-bordered"
                placeholder="name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
                placeholder="Password"
              />
              <button className="btn btn-neutral mt-4 w-full">sign in</button>
            </form>
            <div className="pb-5 p-2 text-center">
              <p className="">
                Already have an account? please{" "}
                <span className=" text-red-700">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
