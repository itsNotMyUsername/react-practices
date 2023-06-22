import { Box } from "@mui/material";
import { useRef } from "react";

const Icon = ({ children }) => {
  const inputRef = useRef();
  const handleIconClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <input type="file" id="file" ref={inputRef} style={{ display: "none" }} />
      <Box
        onClick={handleIconClick}
        sx={{
          borderRadius: "20px",
          p: 1,
          "&:hover": {
            backgroundColor: "#DFE2E3",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Icon;
