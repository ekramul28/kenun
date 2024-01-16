import AboutUs from "../About/About";
import Banner from "../Banner/Banner";
import ContactUs from "../Contact/Contact";

const Home = () => {
    return (
        <div className="dark:bg-slate-800 ">
            <div className="max-w-7xl mx-auto">
                <Banner></Banner>
                <AboutUs></AboutUs>
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;