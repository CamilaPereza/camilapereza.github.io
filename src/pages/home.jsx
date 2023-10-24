import { Grid } from "@mui/material";

import img1 from "../assets/img/banner-2.jpg";

const HomePage = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url("${img1}")`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="mySlides fade">
        {/* <div className="numbertext">1 / 3</div> */}
        <img src={img1} style={{ width: "100%", height: "100%" }} />
        {/* <div className="text">Caption Text</div> */}
      </div>
      {/* <div>
        <img src={img1} />
      </div> */}
    </Grid>
  );
};

export default HomePage;
