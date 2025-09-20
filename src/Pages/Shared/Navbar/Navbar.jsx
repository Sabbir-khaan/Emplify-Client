import { Link } from "react-router";
import EmplifyLogo from "../EmplifyLogo/EmplifyLogo";
import userLogo from "../../../assets/Logo/user.png";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = useAuth();

  const handleLogoutUser = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: "Logout Successful",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav>
      <div className=" flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="flex justify-center gap-2 items-center">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="text-sm mt-2 lg:mt-0 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <EmplifyLogo></EmplifyLogo>
        </div>
        <div className="md:order-2 space-x-1.5">
          {user ? (
            <>
              <img
                className="w-[2.5rem] h-[2.6rem] inline rounded-full mb-1"
                src={user? user.photoURL:userLogo}
                alt="User Image"
              />
              <button
                onClick={handleLogoutUser}
                type="button"
                className="text-white bg-[#08325A] cursor-pointer font-medium rounded-lg px-5 py-2 text-center"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="login">
                <button
                  type="button"
                  className="text-white bg-[#08325A] cursor-pointer font-medium rounded-lg px-5 py-2 text-center"
                >
                  Login
                </button>
              </Link>
              <Link to="register">
                <button
                  type="button"
                  className="text-white bg-[#08325A] cursor-pointer font-medium rounded-lg px-5 py-2 text-center"
                >
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link to="/">
              <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Home
              </li>
            </Link>
            <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Contact Us
            </li>
            {user && (
              <Link to="/dashboard"><li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Dashboard
              </li></Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
