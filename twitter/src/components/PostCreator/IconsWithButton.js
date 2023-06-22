import { Box, Button, Stack } from "@mui/material";
import Icons from "./Icons";

const IconsWithButton = ({ showButton }) => {
  return (
    <Stack justifyContent="space-between" direction="row" sx={{ p: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Icons />
      </Box>
      <Box>
        <Button
          variant="contained"
          size="small"
          disabled={!showButton}
          color="twitterBlue"
          sx={{ borderRadius: "15px", textTransform: "none" }}
        >
          Tweet
        </Button>
      </Box>
    </Stack>
  );
};

export default IconsWithButton;
