
const BrandsSection = () => {
    const allBrands = [
        {
            id: 1,
            // image: "https://i.ibb.co/YRmzGhh/Rolex-logo-PNG12-removebg-preview.png"
            image: "https://i.ibb.co/ZHwwRqq/Rolex-logo-PNG12.png"

        },
        {
            id: 2,
            image: "https://i.ibb.co/hMc0B3K/Longines-logo-PNG7-removebg-preview.png"

        },
        {
            id: 3,
            image: "https://i.ibb.co/PY9dvtW/Tag-heuer-logo-PNG1-removebg-preview.png"

        },
        {
            id: 4,
            // image: "https://i.ibb.co/mH0GF6d/Seiko-logo-PNG2-removebg-preview.png"
            image: "https://i.ibb.co/xzwCjL4/Seiko-logo-PNG2.png"

        },
        {
            id: 5,
            image: "https://i.ibb.co/51dqMss/Patek-Philippe-logo-PNG1-removebg-preview.png"

        },
        {
            id: 6,
            // image: "https://i.ibb.co/w4yBxkD/Omega-logo-PNG1-removebg-preview.png"
            image: "https://i.ibb.co/gZrSY2X/Omega-logo-PNG1.png"

        },
    ]
    return (
        <div className="dark:bg-white" >

            <div className="w-[90%] lg:w-[70%] mx-auto flex flex-wrap items-center  justify-center sm:justify-evenly h-[100px] sm:h-[150px] gap-2 sm:gap-0 ">
                {allBrands.map(({ id, image }) => (
                    <img key={id} src={image} alt="" className="h-[30%] lg:h-[40%]" />
                ))}
            </div>

        </div>
    );
};

export default BrandsSection;