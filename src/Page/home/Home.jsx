import AboutUs from "../About/About";
import Banner from "../Banner/Banner";
import ContactUs from "../Contact/Contact";

const Home = () => {

    return (
        <div className="dark:bg-slate-800">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;