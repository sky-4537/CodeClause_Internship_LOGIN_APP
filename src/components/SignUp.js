import { Link, useNavigate } from "react-router-dom";
import img from "../assets/img.avif";
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
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
          <h2 className="text-4xl text-white font-bold text-center">SIGN UP</h2>
          {error && <div className="text-lg bg-red-400">{error}</div>}
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 hover:bg-gray-800 focus:outline-none"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 hover:bg-gray-800 focus:outline-none"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          ;
          <button className="w-full my-5 py-2 bg-teal-500 hover:bg-teal-700 text-white font-semibold rounded-lg">
            Sign Up
          </button>
        </form>
        <div className="text-sm  py-2 mx-auto mt-3 cursor-pointer text-white">
          Have An Account?
          <Link to="/" className="text-blue-400">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
