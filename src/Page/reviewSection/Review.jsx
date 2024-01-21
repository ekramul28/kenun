import ReviewCard from './ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
    Autoplay, Pagination, Navigation, Scrollbar,
    EffectCube,
} from 'swiper/modules';

const Review = () => {
    const AllReview = [
        {
            "id": 1,
            "name": "Elegance Elite",
            "description": "A sophisticated timepiece with a classic design, perfect for formal occasions.",
            "image": "https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?size=626&ext=jpg&ga=GA1.2.480160555.1688190912&semt=sph",
            "rating": 5.0,
            "brand": "Timeless Watches"
        },
        {
            "id": 2,
            "name": "TechMaster 2000",
            "description": "A futuristic smartwatch with advanced features, blending style and functionality.",
            "image": "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.480160555.1688190912&semt=sph",
            "rating": 4.7,
            "brand": "Innovate Tech"
        },
        {
            "id": 3,
            "name": "Adventure Explorer",
            "description": "A rugged and durable watch designed for outdoor enthusiasts, built to withstand tough conditions.",
            "image": "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?size=626&ext=jpg&ga=GA1.2.480160555.1688190912&semt=sph",
            "rating": 3.5,
            "brand": "Explorer Gear"
        },
        {
            "id": 4,
            "name": "SportSync Pro",
            "description": "The ultimate sports companion, featuring precise timekeeping and fitness tracking capabilities.",
            "image": "https://img.freepik.com/free-photo/surprised-happy-bearded-man-shirt-pointing-away_171337-5021.jpg?size=626&ext=jpg&ga=GA1.2.480160555.1688190912&semt=sph",
            "rating": 4.5,
            "brand": "Athlete's Choice"
        },
        {
            "id": 5,
            "name": "Fashion Fusion",
            "description": "A trendy and stylish watch that seamlessly combines fashion and functionality.",
            "image": "https://img.freepik.com/free-photo/happy-good-looking-man-glasses-pointing-finger-left_176420-21192.jpg?size=626&ext=jpg&ga=GA1.1.480160555.1688190912&semt=sph",
            "rating": 5.0,
            "brand": "StyleCraft Timepieces"
        }
    ]

    return (
        <div className='w-full  bg-gray-200  dark:bg-slate-900'>
            <div className='max-w-7xl mx-auto'>

                <h1 className='font-bold text-2xl text-center pt-8 dark:text-white'>Word's Of Satisfaction</h1>
                <div className='flex justify-center items-center h-[600px]'>

                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // navigation={true}
                        modules={[Autoplay, Pagination, Navigation, Scrollbar, EffectCube]}
                        className="mySwiper"

                    >
                        <div >
                            {
                                AllReview.map(Review => (
                                    <SwiperSlide key={Review.id}>
                                        <ReviewCard Review={Review}></ReviewCard>
                                    </SwiperSlide>

                                ))
                            }
                        </div>

                        {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Review;