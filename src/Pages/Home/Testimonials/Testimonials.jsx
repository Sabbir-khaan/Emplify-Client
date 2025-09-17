import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ayesha Rahman",
      role: "HR Executive",
      appreciation:
        "Emplify improved collaboration, and made project management effortless, helping our team stay productive, organized, and motivated every single day.",
    },
    {
      name: "Michael Lee",
      role: "Software Engineer",
      appreciation:
        "The platform keeps communication transparent and updates easy, making our development process faster, more efficient, and enjoyable for every team member daily.",
    },
    {
      name: "Fatima Noor",
      role: "Finance Manager",
      appreciation:
        "Emplify saves hours in contract and payroll management, making finance operations smooth, error-free, and helping us focus on strategic decisions every month.",
    },
    {
      name: "David Khan",
      role: "Operations Director",
      appreciation:
        "The system enhances employee engagement, growth tracking, operational efficiency, empowering teams to succeed while maintaining employee satisfaction",
    },
    {
      name: "Sophia Chen",
      role: "Product Designer",
      appreciation:
        "Intuitive design and user-friendly interface make Emplify enjoyable, allowing employees to adopt it quickly and improve workflow efficiency effortlessly every day.",
    },
    {
      name: "James Wilson",
      role: "Project Manager",
      appreciation:
        "Project tracking and goal alignment are effortless, deadlines are consistently met, and team productivity is improved thanks to Emplify’s streamlined tools.",
    },
  ];

  return (
    <section className="lg:max-w-[80%] mx-auto my-10 lg:my-28 bg-gray-100 rounded-2xl font-epunda">
      <div className="text-center lg:pb-18">
        <h2 className="lg:text-4xl text-3xl font-bold text-gray-800 lg:pt-16 pt-8 dark:text-white mb-4 lg:mb-10">
          Appreciation from Our Customers
        </h2>
        <p className="text-xl opacity-70">
          Our users consistently praise our service for its reliability, speed,
          and intuitive design. They love <br />
          simplifies tasks, boosts efficiency, and provides excellent support,
          making daily work seamless and enjoyable.
        </p>

        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card lg:mt-12 mt-4 bg-white rounded-xl shadow-md lg:p-20 p-10 transition-all duration-300 ease-in-out filter scale-90 hover:scale-100">
                <div className="text-7xl text-gray-600 text-start">“</div>
                <p className="text-gray-700 text-lg dark:text-gray-300 mb-6">
                  {t.appreciation}
                </p>
                <div className="h-1 w-16 mx-auto border-b-2 border-dashed border-gray-300 mb-3"></div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
