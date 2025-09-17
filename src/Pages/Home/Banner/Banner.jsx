import bannerImage1 from "../../../assets/BannerImage/bannerImage1.jpg";
import bannerImage2 from "../../../assets/BannerImage/bannerImage2.jpg";
import bannerImage3 from "../../../assets/BannerImage/bannerImage3.jpg";

const Banner = () => {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-56 lg:min-h-[50rem] overflow-hidden md:h-96">
        <div
          className="hidden duration-700 ease-in-out bg-center bg-no-repeat bg-cover"
          data-carousel-item
          style={{ backgroundImage: `url(${bannerImage1})` }}
        >
          <div className="font-dosis mt-12 ml-10 lg:mt-50 lg:ml-50">
            <h1 className="text-white leading-7 lg:leading-18 text-3xl lg:text-7xl font-bold">
              Driving Company <br /> Success Through <br /> Smarter HR
            </h1>
            <p className="text-white leading-4 lg:leading-8 text-lg lg:text-3xl lg:mt-4 mt-2">
              Empower your workforce with seamless workflow <br /> tracking and
              efficient payroll management.
            </p>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 mt-2 lg:mt-5 font-medium rounded-lg text-sm lg:text-xl lg:px-6 px-3 lg:py-3 py-2.5 text-center me-2 mb-2"
            >
              Learn More
            </button>
          </div>
        </div>

        <div
          className="hidden duration-700 ease-in-out bg-center bg-cover"
          data-carousel-item
          style={{ backgroundImage: `url(${bannerImage2})` }}
        >
          <div className="font-dosis mt-12 ml-10 lg:mt-50 lg:ml-50">
            <h1 className="text-white leading-7 lg:leading-18 text-3xl lg:text-7xl font-bold">
              Stay Connected <br /> Stay Transparent.
            </h1>
            <p className="text-white leading-4 lg:leading-8 text-lg lg:text-3xl lg:mt-4 mt-2">
              Track employee progress, monitor tasks, and keep <br /> HR
              operations clear and organized
            </p>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 mt-2 lg:mt-5 font-medium rounded-lg text-sm lg:text-xl lg:px-6 px-3 lg:py-3 py-2.5 text-center me-2 mb-2"
            >
              Learn More
            </button>
          </div>
        </div>

        <div
          className="hidden duration-700 ease-in-out bg-center bg-cover"
          data-carousel-item
          style={{ backgroundImage: `url(${bannerImage3})` }}
        >
          <div className="font-dosis mt-12 ml-10 lg:mt-50 lg:ml-50">
            <h1 className="text-white leading-7 lg:leading-18 text-3xl lg:text-7xl font-bold">
              Empowering Teams <br /> Simplifying HR.
            </h1>
            <p className="text-white leading-4 lg:leading-8 text-lg lg:text-3xl lg:mt-4 mt-2">
              From contracts to payroll, Emplify keeps <br /> everything secure
              and stress-free.
            </p>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 mt-2 lg:mt-5 font-medium rounded-lg text-sm lg:text-xl lg:px-6 px-3 lg:py-3 py-2.5 text-center me-2 mb-2"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Banner;
