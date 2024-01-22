import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CollectionCard = () => {
    const watches = {
        "name": "Classic Chronograph",
        "image1": "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9sZXh8ZW58MHx8MHx8fDA%3D",
        "image2": "https://images.unsplash.com/photo-1606744188285-d0a49e58f538?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9sZXh8ZW58MHx8MHx8fDA%3D",
        "image3": "https://images.unsplash.com/photo-1617714651073-17a0fcd14f9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9sZXh8ZW58MHx8MHx8fDA%3D",
        "price": 299.99,
        "rating": 4.5,
        "description": "A timeless chronograph watch with a sleek design.",
        "size": [
            42,
            43,
            44,
            45,
            46
        ],
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
            <div className="card w-96 shadow rounded-none">
                <figure><img className='h-60 image-full object-cover w-full mx-auto' src={watches.image1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <p>{watches.name}</p>
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>${watches.price}</p>

                    <div className="card-actions justify-end">
                        <div>
                            {
                                (watches.availability === 'In Stock') ?
                                    <p className='w-5 h-5 rounded-full bg-black'></p>
                                    : <p className='w-5 h-5 rounded-full bg-red-700'></p>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionCard;