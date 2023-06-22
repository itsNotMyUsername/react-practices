import { Box, Modal as ModalMUI, Stack } from "@mui/material";

const Modal = ({ isOpen, handleClose, top, right, children }) => {
  const boxStyle = {
    position: "absolute",
    top: { top },
    right: { right },
    width: 250,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: "0px 0px 4px 1px #BCBCBC;",
  };

  return (
    <ModalMUI
      open={isOpen}
      onClose={handleClose}
      disableAutoFocus={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      componentsProps={{
        backdrop: { style: { backgroundColor: "transparent" } },
      }}
    >
      <Box sx={boxStyle}>
        <Stack
          direction="column"
          sx={{
            "& :last-child": {
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            },
          }}
        >
          {children}
        </Stack>
      </Box>
    </ModalMUI>
  );
};

export default Modal;
