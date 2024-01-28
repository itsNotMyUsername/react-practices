import { Box } from "@mui/material";
import Header from "./header/Header";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useRef, useState } from "react";

function App({ children }) {
  const [top, setTop] = useState(0);
  const headerRef = useRef();

  // useEffect(() => {
  //   setTop(headerRef.current.getBoundingClientRect().bottom + 10);
  // }, [headerRef]);

  return (
    <Box>
      <Grid container>
        <Header innerRef={headerRef} />
        {React.cloneElement(children, { top: top })}
      </Grid>
    </Box>
  );
}

export default App;
