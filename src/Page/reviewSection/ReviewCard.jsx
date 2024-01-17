import { Rating } from "@mui/material";

const ReviewCard = ({ Review }) => {
    const { name, description, image, rating, brand } = Review
    console.log(rating)
    return (
        <div className="w-[80%]  mx-auto  ">
            <div className="md:flex gap-4 ">
                <div className=" md:1/2 ">
                    <img src={image} alt="" className="object-cover  h-full" />
                </div>
                <div className="flex gap-3 justify-center items-center md:1/2">
                    <div className="dark:text-white my-3">

                        <Rating name={name} defaultValue={2} precision={rating} readOnly />
                        <p>{description}</p>
                        <h1 className="text-xl font-bold my-2">{name}</h1>
                        <h1>{brand}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;