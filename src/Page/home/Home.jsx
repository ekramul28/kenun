import AboutUs from "../About/About";
import Banner from "../Banner/Banner";
import BrandsSection from "../BrandsSection/BrandsSection";
import ContactUs from "../Contact/Contact";
import Review from "../reviewSection/Review";

const Home = () => {
    return (
        <div className="dark:bg-slate-800 ">
            <div >
                <div className="max-w-7xl mx-auto">
                    <Banner></Banner>
                    <BrandsSection></BrandsSection>
                </div>
                <div className="w-full">
                    <Review></Review>
                </div>
                <div className="max-w-7xl mx-auto">
                    <AboutUs></AboutUs>
                    <ContactUs></ContactUs>
                </div>
            </div>
        </div>
    );
};

export default Home;