import EmplifyLogo from "../../Shared/EmplifyLogo/EmplifyLogo";
import { Link, useLocation, useNavigate } from "react-router";
import Lottie from "lottie-react";
import registerLottie from "../../../assets/LottieAnimation/register.json";
import googleLogo from "../../../assets/Logo/google.png";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, googleSignInUser, updateUser } = useAuth();
  const [profilePic, setProfilePic] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (userData) => {
    console.log(userData);
    createUser(userData.email, userData.password)
      .then((result) => {
        console.log(result);
        const updateUserProfile = {
          displayName: userData.name,
          photoURL: profilePic,
        };
        updateUser(updateUserProfile)
          .then(() => {
            console.log("profile pic updated");
          })
          .catch((error) => {
            console.log(error);
          });
        navigate(location.state || "/");
        Swal.fire({
          title: "Registered Account Successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignInUser = () => {
    googleSignInUser()
      .then((result) => {
        console.log(result);
        navigate(location.state || "/");
        Swal.fire({
          title: "Registered Account Successfully",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    console.log(image);
    const formData = new FormData();
    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_key
    }`;
    formData.append("image", image);

    const res = await axios.post(imageUploadUrl, formData);
    setProfilePic(res.data.data.url);
  };

  return (
    <section className="lg:max-w-[80%] mx-auto font-dosis">
      <div className="mt-2 lg:mt-0 lg:ml-0 ml-4">
        <EmplifyLogo></EmplifyLogo>
      </div>
      <div
        className="lg:max-w-[60%] mx-auto gap-4 grid grid-cols-1 lg:grid-cols-2 mt-6 lg:mt-20 lg:p-6 p-4 border shadow-md border-gray-200 rounded-xl"
        data-aos="zoom-out-up"
      >
        <div>
          <div className="lg:p-8 p-2">
            <div className="flex items-center justify-center">
              <EmplifyLogo></EmplifyLogo>
              <h3 className="font-ubuntu font-bold text-xl md:text-[1.7rem] text-[#08325A]"></h3>
            </div>
            <h1 className="text-3xl font-ubuntu font-semibold text-center mt-2 lg:mt-4 mb-3 lg:mb-6">
              Create An Account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label opacity-70">Name</label>
              <input
                {...register("name")}
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-info w-full mt-2 rounded-lg mb-2"
              />
              <br />
              <label className="label opacity-70">Email</label>
              <input
                {...register("email")}
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="input input-info w-full mt-2 rounded-lg mb-2"
              />
              <label className="label opacity-70">Upload Your Photo</label>
              <input
                onChange={handleImageUpload}
                type="file"
                name="photo"
                className="input border border-gray-500 input-info w-full mt-2 rounded-lg mb-2"
              />
              <label className="label opacity-70">Password</label>
              <input
                {...register("password")}
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-info w-full mt-2 rounded-lg"
              />
              <button className="py-2 bg-[#08325A] w-full rounded-lg mt-8 text-white font-bold text-lg font-ubuntu">
                Register
              </button>
            </form>
            <div className="mt-6 border-b border-gray-300"></div>
            <div>
              <button
                onClick={handleGoogleSignInUser}
                className="flex items-center justify-center py-2 rounded-lg border border-gray-400 mt-6 w-full gap-2 font-bold bg-white font-ubuntu"
              >
                <img className="w-[32px]" src={googleLogo} alt="" /> Register
                With Google
              </button>
            </div>
            <h3 className="mt-4 ml-2 text-gray-500 text-center">
              Already Have an Account?{" "}
              <Link to={"/login"}>
                <button
                  className="text-[#08325A] underline font-bold font-ubuntu text-lg px-1"
                  variant="link"
                >
                  Login
                </button>
              </Link>
            </h3>
          </div>
        </div>
        <div>
          <Lottie
            style={{ width: "100%", height: "100%" }}
            animationData={registerLottie}
            loop={true}
          >
            {" "}
          </Lottie>
        </div>
      </div>
    </section>
  );
};

export default Register;
