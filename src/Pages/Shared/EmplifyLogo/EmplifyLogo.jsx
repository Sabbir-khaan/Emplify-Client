import { Link } from "react-router";
import logo from "../../../assets/Logo/logo.svg";

const EmplifyLogo = () => {
  return (
    <Link to="/">
      <div className="flex font-dosis">
        <img className="lg:h-[3.5rem] h-[2.5rem]" src={logo} alt="" />
        <h1 className="lg:text-[2rem] text-2xl lg:mt-4 mt-2.5 font-medium">
          Emplify
        </h1>
      </div>
    </Link>
  );
};

export default EmplifyLogo;
