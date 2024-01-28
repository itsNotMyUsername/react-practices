import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Header from "../components/header/Header";
import React, { useEffect, useRef, useState } from "react";

const Root = ({ children }) => {
  const headerRef = useRef();
  const imageRef = useRef();
  const [top, setTop] = useState(0);

  // useEffect(() => {
  //   setTop(headerRef.current.getBoundingClientRect().bottom + 10);
  // }, [headerRef]);

  // useEffect(() => {
  //   console.log(imageRef.current.getBoundingClientRect());
  //   // setTop(imageRef.current.getBoundingClientRect().bottom + 10);
  // }, [imageRef]);

  return (
    <Box>
      <Grid container>
        <Box
          component="img"
          ref={imageRef}
          src="https://hips.hearstapps.com/hmg-prod/images/jogging-down-country-road-649479f378ec8.jpg?crop=1.00xw:0.751xh;0,0.0342xh&resize=1600:*"
          alt=""
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            aspectRatio: "auto 2500 / 1667",
          }}
        />
        {/* <Header innerRef={headerRef} /> */}
        {/* {React.cloneElement(children, { top: top })} */}
      </Grid>
    </Box>
  );
};

export default Root;
