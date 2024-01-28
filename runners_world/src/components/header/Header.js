import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { styled, useTheme } from "@mui/material/styles";
import Logo from "./Logo";
import Buttons from "./Buttons";
import Nav from "./Nav";

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexGrow: 1,
  paddingLeft: "10%",
  paddingRight: "10%",
  justifyContent: "space-between",
  position: "fixed",
  marginLeft: 0,
  marginRight: 0,
  maxHeight: "37px",
  zIndex: 2,
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
}));

const HideableGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: theme.breakpoints.values.sm,
  // [theme.breakpoints.down("lg")]: {
  //   display: "none",
  // },
  // [theme.breakpoints.up("lg")]: {
  //   display: "flex",
  // },
}));

const ShowableGrid = styled(Grid)(({ theme }) => ({
  borderTop: "1px solid white",
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  paddingLeft: "10%",
  paddingRight: "10%",
  top: "50px",
  [theme.breakpoints.down("lg")]: {
    display: "flex",
  },
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

// const CenteredGrid

const Header = ({ innerRef }) => {
  const theme = useTheme();

  return (
    <>
      {/* <StyledGrid
        ref={innerRef}
        container
        xs={12}
        direction="row"
        columnSpacing={1}
      > */}
      <Grid
        container
        direction="row"
        sx={{
          bgcolor: "black",
          width: 1,
          color: theme.palette.common.white,
          display: "flex",
          alignItems: "center",
          ml: 0,
          mr: 0,
        }}
      >
        <Grid xs={1}></Grid>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          xs={8}
        >
          <Logo />
          <Nav />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          xs={2}
        >
          <Grid>buttons</Grid>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
      {/* <Logo /> */}
      {/* <Grid xs>{navItems}</Grid> */}
      {/* {navItems} */}
      {/* <Buttons /> */}
      {/* </StyledGrid> */}
      {/* <ShowableGrid container xs={12}>
        {navItems}
      </ShowableGrid> */}
    </>
  );
};

export default Header;
