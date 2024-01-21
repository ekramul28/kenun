import Grid from '@mui/material/Grid';
import BannerText from '../../Components/BannerText';
// import Banner from '../BrandsSection/Banner';
const Banner = () => {
    return (
        <div className='pt-16 '>
            <Grid container spacing={2} >
                <Grid item xs={8} >
                    <BannerText image='banner1' text="Digital Watch"></BannerText>
                    {/* <Box className="banner1 h-[300px]  hover:bg-[0%] duration-[.6s] cursor-pointer " >
                        <h1 className=' text-white  pt-[250px] pr-10 text-end text-2xl font-bold ]'>
                            Digital Watch
                        </h1>
                    </Box> */}
                </Grid>
                <Grid item xs={4}>
                    <BannerText image='banner2' text="Alam Clock"></BannerText>
                </Grid>
                <Grid item xs={4}>
                    <BannerText image='banner3' text=" Classic watch"></BannerText>
                </Grid>
                <Grid item xs={8}>
                    <BannerText image='banner4' text=" Vector realistic watch"></BannerText>
                </Grid>
            </Grid>
        </div>
    );
};

export default Banner;