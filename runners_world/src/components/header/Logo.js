import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MenuIcon from "@mui/icons-material/Menu";

const Logo = () => {
  const handleHamburgerIconClick = () => {
    console.log("click");
  };

  return (
    <Grid xs={3} sx={{ display: "flex", alignItems: "center" }}>
      <MenuIcon fontSize="large" onClick={handleHamburgerIconClick} />
      <Box
        sx={{
          marginLeft: 1,
          width: "9rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="https://www.runnersworld.com/_assets/design-tokens/runnersworld/static/images/logos/logo.bac833a.svg?primary=%2523ffffff"
          fetchpriority="high"
          alt="Logo"
          height="auto"
          width="auto"
        />
      </Box>
    </Grid>
  );
};

export default Logo;
