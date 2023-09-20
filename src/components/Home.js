import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center bg-gray-800  ">
        <h2 className="text-4xl text-white font-bold text-center">
          Hello Welcome
        </h2>

        <br />
        <div className="text-xl text-green-500 items-center justify-center">
          {user && user.email}
        </div>
      </div>

      <div
        className="text-center p-3 mt-5 text-lg shadow-lg hover:bg-slate-500 hover:text-slate-200 bg-slate-400  cursor-pointer"
        onClick={handleLogOut}
      >
        Logout
      </div>
    </div>
  );
};
export default Home;
