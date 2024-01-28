import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  whiteSpace: "nowrap",
  paddingRight: 20,
  "&:hover": {
    textDecoration: "underline",
  },
}));

const Nav = () => {
  return (
    <Grid
      container
      direction="row"
      xs={9}
      sx={{
        flexGrow: 5,
        display: "flex",
        alignItems: "center",
        overflowX: "scroll",
        flexWrap: "nowrap",
        pl: 2,
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <StyledLink to={"shoes"}>SHOES & GEAR</StyledLink>
      <StyledLink to={"training"}>TRAINING</StyledLink>
      <StyledLink to={"health-and-injuries"}>HEALTH & INJURIES</StyledLink>
      <StyledLink to={"must-read"}>MUST READ</StyledLink>
      <StyledLink to={"runners-world"}>RUNNERS WORLD+</StyledLink>
    </Grid>
  );
};

export default Nav;
