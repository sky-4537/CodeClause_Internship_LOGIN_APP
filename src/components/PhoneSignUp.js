import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const PhoneSignUp = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const { setUpRecaptcha } = useUserAuth();

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");

    if (number === "" || number === undefined)
      return setError("Invalid Phone number");
    try {
      const response = await setUpRecaptcha(number);
      console.log(response);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };
  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-800 p-32 h-screen">
        <form
          onSubmit={getOtp}
          style={{ display: !flag ? "block" : "none" }}
          className="max-w-[400px] w-full mx-auto  bg-gray-900 p-32 px-8 rounded-lg"
        >
          <h2 className="text-xl text-white font-bold text-center">
            SIGN IN WITH PHONE
          </h2>
          {error && <div className="text-lg bg-red-400">{error}</div>}

          <div className="flex flex-col text-gray-400 py-2">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
          </div>
          <div id="recaptcha-container" />

          <div className="flex flex-row space-x-48">
            <Link to="/">
              <button className="bg-red-500 mt-4 p-2 text-sm font-semibold ">
                Cancel
              </button>
            </Link>
            <button
              className="bg-green-500 p-1 mt-4 text-xs font-semibold "
              type="submit"
            >
              Send OTP
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-800 p-32 h-screen">
        <form
          onSubmit={verifyOtp}
          style={{ display: flag ? "block" : "none" }}
          className="max-w-[400px] w-full mx-auto  bg-gray-900 p-32 px-8 rounded-lg"
        >
          <h2 className="text-xl text-white font-bold text-center">
            VERIFY OTP
          </h2>
          {error && <div className="text-lg bg-red-400">{error}</div>}

          <div className="flex flex-col text-gray-400 py-2">
            <input
              type="text"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          <div className="flex flex-row space-x-48">
            <Link to="/">
              <button className="bg-red-500 mt-4 p-2 text-sm font-semibold ">
                Cancel
              </button>
            </Link>
            <button
              className="bg-green-500 p-1 mt-4 text-xs font-semibold "
              type="submit"
            >
              Enter OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PhoneSignUp;
