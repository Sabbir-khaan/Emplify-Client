import socialIcon1 from "../../../assets/SocialImage/facebook.png";
import socialIcon2 from "../../../assets/SocialImage/x.jpg";
import socialIcon3 from "../../../assets/SocialImage/linkedin.png";
import socialIcon4 from "../../../assets/SocialImage/youtube.png";
import EmplifyLogo from "../EmplifyLogo/EmplifyLogo";

const Footer = () => {
  return (
    <footer className="bg-[#08325A] mt-20">
      <footer className="lg:flex justify-around pt-8 lg:pt-12 lg:max-w-[90%] mx-auto text-white">
        <div className="ml-10 lg:ml-0">
          <EmplifyLogo></EmplifyLogo>
          <p className="w-86 lg:mt-6 mt-4 opacity-80">
            Empowering teams with smarter HR tools, from workflow updates to
            payroll and contracts, Emplify keeps everything connected and
            simple.
          </p>
        </div>
        <div>
          <h1 className="text-xl ml-10 lg:ml-0 mt-6 lg:mt-0 uppercase font-semibold opacity-80">
            Our Services
          </h1>
          <div className="opacity-80 lg:mt-4 mt-2 space-y-1 ml-10 lg:ml-0">
            <p>Employee Management</p>
            <p>Payroll Security</p>
            <p>Performance Insights</p>
            <p>Team Communication</p>
            <p>Automated Reports</p>
            <p>Customer Support</p>
          </div>
        </div>
        <div className="ml-10 lg:ml-0">
          <h1 className="text-xl uppercase mt-6 lg:mt-0  font-semibold opacity-80">
            About Us
          </h1>
          <div className="opacity-80 lg:mt-4 mt-2 space-y-1">
            <p>Our Mission</p>
            <p>Trusted Partners</p>
            <p>Secure Platform</p>
            <p>Global Team</p>
            <p>FAQ</p>
            <p>Innovation Focus</p>
          </div>
        </div>
        <nav>
          <h6 className="text-xl text-center uppercase font-semibold opacity-80">
            Social
          </h6>
          <div className="flex gap-4 justify-center items-center mt-4 lg:mt-8">
            <a href="https://www.facebook.com/PaglirHubby" target="_blank">
              <img className="h-[36px]" src={socialIcon1} alt="" />
            </a>
            <a href="https://x.com/SourovHossain17" target="_blank">
              <img className="h-[36px] rounded-full" src={socialIcon2} alt="" />
            </a>
            <a href="https://www.instagram.com/sourov_hossain/" target="_blank">
              <img className="h-[36px]" src={socialIcon3} alt="" />
            </a>
            <a
              href="https://www.youtube.com/@ShabbirKhan-qn5ky/shorts"
              target="_blank"
            >
              <img src={socialIcon4} alt="" />
            </a>
          </div>
        </nav>
      </footer>
      <h1 className="text-white mt-8 text-center pb-10 font-saira">
        Copyright © 2025 Emplify, All Rights Reserved
      </h1>
    </footer>
  );
};

export default Footer;
