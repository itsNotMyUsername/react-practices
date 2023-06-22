import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Box)({
  padding: "12px",
  alignItems: "center",
  display: "flex",
  gap: "10px",
  "&:hover": {
    backgroundColor: "#F6F9F9",
  },
});

const ModalItem = ({ children }) => {
  return <Item>{children}</Item>;
};

export default ModalItem;
