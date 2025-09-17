import successImage1 from "../../../assets/SuccessImage/success1.jpg";
import successImage2 from "../../../assets/SuccessImage/success2.jpg";
import successImage3 from "../../../assets/SuccessImage/success3.jpg";
import successImage4 from "../../../assets/SuccessImage/success4.jpg";

const Success = () => {
  const stats = [
    {
      title: "Strong Team Culture",
      desc: "We’ve built a workplace where collaboration, innovation, and growth thrive. Our supportive culture empowers employees to share ideas, overcome challenges, and create a positive environment that drives long-term success together.",
      img: successImage1,
    },
    {
      title: "Successful Projects",
      desc: "Our track record includes delivering innovative, high-quality projects across industries. Guided by dedication and client focus, we ensure timely results that create meaningful impact and foster trust with every partnership formed.",
      img: successImage2,
    },
    {
      title: "Award Winning Service",
      desc: "Recognized with multiple awards for excellence, our services consistently exceed expectations. These achievements reflect our team’s dedication, passion, and innovative spirit, driving global recognition and long-lasting client satisfaction worldwide.",
      img: successImage3,
    },
    {
      title: "Sustainable Growth",
      desc: "We’ve achieved steady, responsible growth by balancing business goals with employee well-being. Our forward vision prioritizes sustainability, innovation, and people, ensuring a thriving workplace and continued organizational progress.",
      img: successImage4,
    },
  ];

  return (
    <section className="lg:mt-26 mt-10 font-epunda">
      <div className="lg:max-w-[90%] mx-auto px-3">
        <h2 className="lg:text-5xl text-4xl font-bold text-center lg:mb-10">
          Our Company Services
        </h2>

        {stats.map((item, index) => (
          <div
            key={index}
            className="lg:flex flex-col-reverse md:flex-row rounded justify-around mt-8 lg:mt-20"
          >
            <div>
              <img className="lg:w-[40rem] lg:h-[22rem] rounded" src={item.img} />
            </div>

            <div className="lg:-ml-20 lg:mt-8">
              <h3 className="lg:text-[2.5rem] text-3xl font-semibold mt-3">{item.title}</h3>
              <p className="lg:text-xl opacity-70 text-lg lg:w-xl mt-2 lg:mt-4">{item.desc}</p>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 mt-4 lg:mt-6 font-medium rounded-lg text-sm lg:px-5 px-3 lg:py-2.5 py-2 text-center me-2 mb-2"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Success;
