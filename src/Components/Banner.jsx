import { Grid, Box } from '@mui/material';
import Slider from 'react-slick';
import { bannerData } from '../Assets/data';

import '../Assets/CSS/Banner.css';

const Banner = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    className: 'slider-class'
  };

  return (
    <Box marginBottom="1rem">
      <Slider {...settings}>
        {bannerData.map((data) => (
          <Box key={data.id} className="banner-container ">
            <Grid container>
              <Grid item md={6} className="banner-content banner-img ">
                <img src={data.img} alt="" className=" " />
              </Grid>
              <Grid
                md={6}
                width="100%"
                className="banner-content banner-content-title"
              >
                <Box padding="3rem">
                  <h1>{data.title}</h1>
                  <p>{data.desc}</p>
                  <button>Shop Now</button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Banner;
