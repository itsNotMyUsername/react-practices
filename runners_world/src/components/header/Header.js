import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useRef, useState } from "react";

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const HideableGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
}));

const ShowableGrid = styled(Grid)(({ theme }) => ({
  borderTop: "1px solid white",
  [theme.breakpoints.down("lg")]: {
    display: "flex",
  },
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      sx={{
        color: "inherit",
        minHeight: "35px",
        pt: 0,
        pb: 0,
      }}
      {...props}
    />
  );
}

const navItems = (
  <Tabs
    variant="scrollable"
    scrollButtons={false}
    sx={{ width: 1, minHeight: "inherit" }}
  >
    <LinkTab label="SHOES & GEAR"></LinkTab>
    <LinkTab label="TRAINING"></LinkTab>
    <LinkTab label="HEALTH & INJURIES"></LinkTab>
    <LinkTab label="MUST READ"></LinkTab>
    <LinkTab label="RUNNERS WORLD+"></LinkTab>
  </Tabs>
);

const Header = ({ innerRef }) => {
  const theme = useTheme();

  const handleHamburgerIconClick = () => {
    console.log("click");
  };

  return (
    <>
      <StyledGrid
        ref={innerRef}
        container
        xs={12}
        direction="row"
        columnSpacing={1}
        sx={{
          bgcolor: theme.palette.common.black,
          color: theme.palette.common.white,
          flexGrow: 1,
          pl: "10%",
          pr: "10%",
          justifyContent: "space-between",
          position: "fixed",
        }}
      >
        <StyledGrid>
          <MenuIcon
            xs={3}
            fontSize="large"
            onClick={handleHamburgerIconClick}
          />
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
        </StyledGrid>
        <HideableGrid xs>{navItems}</HideableGrid>
        <StyledGrid xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>SUBSCRIBE</Button>
          <Button>SIGN IN</Button>
        </StyledGrid>
      </StyledGrid>
      <ShowableGrid
        container
        xs={12}
        sx={{
          bgcolor: theme.palette.common.black,
          color: theme.palette.common.white,
          pl: "10%",
          pr: "10%",
        }}
      >
        {navItems}
      </ShowableGrid>
    </>
  );
};

export default Header;
