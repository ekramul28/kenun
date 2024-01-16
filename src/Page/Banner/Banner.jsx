import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
const Banner = () => {
    return (
        <div className='pt-16'>
            <Grid container spacing={2} >
                <Grid item xs={8}>
                    <Box className="banner1 h-[300px] hover:duration-700 " >
                        <h1 className=' text-white  pt-[250px] pr-10 text-end text-2xl font-bold ]'>
                            Digital Watch
                        </h1>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className="banner2 h-[300px]">
                        <h1 className=' text-white pt-[250px] pr-10 text-end text-2xl font-bold'>
                            Alam Clock
                        </h1>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className="banner3 h-[300px]">
                        <h1 className=' text-white pt-[250px] pr-10 text-end text-2xl font-bold'>
                            Classic watch
                        </h1>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box className="banner4 h-[300px]" >
                        <h1 className=' text-white pt-[250px] pr-10 text-end text-2xl font-bold'>
                            Vector realistic watch
                        </h1>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Banner;