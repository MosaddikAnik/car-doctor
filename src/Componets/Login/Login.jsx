import React, { useContext } from "react";
import img from "../../../src/assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import Swal from "sweetalert2";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Default redirect path
  const fromPath = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Logged in user:", user);

        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          confirmButtonText: "Continue",
        }).then(() => {
          navigate(fromPath, { replace: true });
        });
      })
      .catch((error) => {
        console.error("Login error: please REGISTER!", error);
        Swal.fire({
          title: "Login Failed",
          text: "Login error: please REGISTER!",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="md:flex md:items-center md:justify-center min-h-screen gap-10 p-4">
      {/* Illustration */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Login illustration"
          className="h-full max-w-md mx-auto md:mx-0"
        />
      </div>

      {/* Login Form */}
      <div className="hero bg-base-200 md:w-1/2">
        <div className="hero-content flex-col w-full">
          <h1 className="text-4xl font-bold text-center lg:text-left mb-6">
            Login now!
          </h1>

          <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
                placeholder="Password"
                required
              />

              <div className="mt-2 text-right">
                <Link className="link link-hover text-sm" to="/forgot-password">
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Login
              </button>
            </form>

            <div className="pb-3 text-center">
              <p className="text-xl">
                Have an account?{" "}
                <span className="text-red-700 text-xl">
                  <Link to="/register">Register</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
