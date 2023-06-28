import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const FullWidthGridRow = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const Shoes = ({ top }) => {
  return (
    <Grid
      container
      direction="row"
      rowSpacing={3}
      sx={{
        p: "20px 10% 0 10%",
        minWidth: 1,
        position: "absolute",
        top: { top },
      }}
    >
      <FullWidthGridRow xs={12}>
        <Typography variant="h3" noWrap>
          RUNNING SHOES & GEAR
        </Typography>
      </FullWidthGridRow>
      <FullWidthGridRow
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="span"
          sx={{
            width: 0.05,
            minWidth: 0.05,
            height: 16,
            bgcolor: "#59E7ED",
          }}
        />
        <Typography
          variant="h2"
          sx={{
            width: 0.75,
            textAlign: "center",
          }}
        >
          OUR FAVORITE RUNNING ESSENTIALS
        </Typography>
      </FullWidthGridRow>
      <FullWidthGridRow xs={12}>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/shoes-of-2023-lead-1670262817.jpg?crop=1xw:1xh;center,top&resize=1120:*"
          alt=""
        />
      </FullWidthGridRow>
    </Grid>
  );
};

export default Shoes;
