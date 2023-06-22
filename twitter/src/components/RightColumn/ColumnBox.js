import Box from "@mui/material/Box";

const ColumnBox = ({ children }) => {
  return (
    <Box
      sx={{
        bgcolor: "grey.100",
        borderRadius: 5,
        pt: 2,
        pb: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default ColumnBox;
