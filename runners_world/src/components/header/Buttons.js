import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
}));

const Buttons = () => {
  return (
    <StyledGrid xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button>SUBSCRIBE</Button>
      <Button>SIGN IN</Button>
    </StyledGrid>
  );
};

export default Buttons;
