import GoogleButton from "react-google-button";

import img from "../assets/img.avif";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import GithubButton from "react-github-login-button";
import { FacebookLoginButton } from "react-social-login-buttons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn, githubSignIn, facebookSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGithubSignIn = async (e) => {
    e.preventDefault();
    try {
      await githubSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl text-white font-bold text-center">SIGN IN</h2>
          {error && <div className="text-lg bg-red-400">{error}</div>}

          <div className="flex flex-col text-gray-400 py-2">
            <label>User Name</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 hover:bg-gray-800 focus:outline-none"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 hover:bg-gray-800 focus:outline-none"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <button className="w-full my-5 py-2 bg-teal-500 hover:bg-teal-700 text-white font-semibold rounded-lg">
            Sign In
          </button>
        </form>
        <div className="flex flex-col items-center jc ">
          <div className=" my-5 mx-auto">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
          <div className=" mx-auto">
            <GithubButton onClick={handleGithubSignIn} />
          </div>
          <div className="  my-5 mx-auto">
            <FacebookLoginButton onClick={handleFacebookSignIn} />
          </div>
          <Link to="/phonesignup">
            <div>
              <button className="p-1 text-lg items-center justify-center  mb-3 bg-green-700">
                Sign In with Phone
              </button>
            </div>
          </Link>
        </div>
        <div className="text-sm mx-auto text-white">
          New User?{" "}
          <Link to="/signup" className="text-blue-400">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
