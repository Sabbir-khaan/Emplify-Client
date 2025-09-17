import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Success from "../Success/Success";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Success></Success>
            <Testimonials></Testimonials>
            <Faq></Faq>
        </div>
    );
};

export default Home;