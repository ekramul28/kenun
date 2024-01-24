import Button from "../../Components/Button/Button";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CollectionCard = () => {
    const watches = {
        "name": "Classic Chronograph",
        "image1": "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9sZXh8ZW58MHx8MHx8fDA%3D",
        "image2": "https://images.unsplash.com/photo-1606744188285-d0a49e58f538?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9sZXh8ZW58MHx8MHx8fDA%3D",
        "image3": "https://images.unsplash.com/photo-1617714651073-17a0fcd14f9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9sZXh8ZW58MHx8MHx8fDA%3D",
        "price": 299.99,
        "rating": 4.5,
        "description": "A timeless chronograph watch with a sleek design.",
        "brand": "Rolex",
        "gender": "men",
        "availability": "In Stock"
    }
    // {
    //     "name": "Elegant Rose Gold",
    //     "image1": "https://images.unsplash.com/photo-1636639818651-d97365346a5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZ2luZXMlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    //     "image2": "https://images.unsplash.com/photo-1636639821444-479368c96514?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZ2luZXMlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    //     "image3": "https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZ2luZXMlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    //     "price": "$249.99",
    //     "rating": 4.2,
    //     "description": "A luxurious rose gold watch for women with a touch of elegance.",
    //     "size": [
    //         42,
    //         43,
    //         44,
    //         45,
    //         46
    //     ],
    //     "brand": "Longines",
    //     "gender": "women",
    //     "availability": "Out of Stock"
    // }

    return (
        <div >
            <div className="card  shadow rounded-none">
                <figure>
                    <img className=' image-full object-cover w-full mx-auto' src={watches.image1} alt="Shoes" />
                </figure>
                <div className="m-2  dark:bg-slate-900">
                    <h2 className="card-title">
                        <p>{watches.name}</p>
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p className="my-2">${watches.price}</p>
                    <div className="flex justify-between items-center">
                        <div >
                            <Link to="/collection/1">
                                <Button className="flex justify-center items-center gap-2">Details<FaArrowAltCircleRight></FaArrowAltCircleRight></Button>
                            </Link>
                        </div>
                        <div >
                            {
                                (watches.availability === 'In Stock') ?
                                    <p className='w-4 h-4 rounded-full dark:bg-sky-500 bg-black'></p>
                                    : <p className='w-4 h-4 rounded-full bg-red-700'></p>
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionCard;