import { Link, useLocation, useNavigate } from "react-router";
import EmplifyLogo from "../../Shared/EmplifyLogo/EmplifyLogo";
import Lottie from "lottie-react";
import loginLottie from "../../../assets/LottieAnimation/login.json";
import googleLogo from "../../../assets/Logo/google.png";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit } = useForm();
  const { signInUser, googleSignInUser } = useAuth();

  const onSubmit = (userData) => {
    console.log(userData);
    signInUser(userData.email, userData.password)
      .then((result) => {
        if (result) {
          navigate(location.state || "/");
          Swal.fire({
            title: "Logged In Successfully",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignInUser = () => {
    googleSignInUser()
    .then(result=>{
        console.log(result);
        navigate(location.state|| "/")
    })
    .catch(error=>{
        console.log(error);
    })
  };

  return (
    <section className="lg:max-w-[80%] mx-auto font-dosis">
      <div className="mt-2 lg:mt-0 lg:ml-0 ml-4">
        <EmplifyLogo></EmplifyLogo>
      </div>
      <div
        className="lg:max-w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 mt-6 lg:mt-20 lg:p-6 p-4 border shadow-md border-gray-200 rounded-xl"
        data-aos="zoom-out-up"
      >
        <div>
          <div className="lg:p-10">
            <div className="flex items-center justify-center">
              <EmplifyLogo></EmplifyLogo>
              <h3 className="font-ubuntu font-bold text-xl md:text-[1.7rem] text-[#08325A]"></h3>
            </div>
            <h1 className="text-3xl font-ubuntu font-semibold text-center mt-4 mb-6">
              Welcome Back
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label opacity-70">Email Address</label>
              <input
                {...register("email")}
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-info w-full mt-2 rounded-lg mb-3"
                required
              />
              <br />
              <label className="label opacity-70">Password</label>
              <input
                {...register("password")}
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-info w-full mt-2 rounded-lg"
                required
              />
              <button className="py-2 bg-[#08325A] w-full rounded-lg mt-8 text-white font-bold text-lg font-ubuntu">
                Log In
              </button>
            </form>
            <div className="mt-6 border-b border-gray-300"></div>
            <div>
              <button
              onClick={handleGoogleSignInUser}
               className="flex items-center justify-center py-2 rounded-lg border border-gray-400 mt-6 w-full gap-2 font-bold bg-white font-ubuntu">
                <img className="w-[32px]" src={googleLogo} alt="" /> Log In With
                Google
              </button>
            </div>
            <h3 className="mt-4 ml-2 text-gray-500 text-center">
              Don't Have an Account?{" "}
              <Link to={"/register"}>
                <button
                  className="text-[#08325A] underline font-bold font-ubuntu text-lg px-1"
                  variant="link"
                >
                  Register
                </button>
              </Link>
            </h3>
          </div>
        </div>
        <div>
          <Lottie
            style={{ width: "100%", height: "100%" }}
            animationData={loginLottie}
            loop={true}
          >
            {" "}
          </Lottie>
        </div>
      </div>
    </section>
  );
};

export default Login;
