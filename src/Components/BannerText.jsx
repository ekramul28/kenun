import { Box } from "@mui/material";

const BannerText = ({ image, text }) => {
    return (
        <div>
            <Box className={`${image} h-[300px]  hover:bg-[50%] duration-[.6s] cursor-pointer `}>
                <h1 className=' text-white  pt-[250px] pr-10 text-end text-2xl font-bold ]'>
                    {text}
                </h1>
            </Box>

        </div>
    );
};

export default BannerText;