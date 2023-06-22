import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link, Typography } from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ModalItem from "./ModalItem";
import Modal from "../Modal/Modal";
import { useState } from "react";

const PostCreatorModal = ({ isOpen, handleClose, top, right }) => {
  const [twitterCirclePeopleCounter, setTwitterCirclePeopleCounter] =
    useState(0);

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} top={top} right={right}>
      <Typography variant="h6" sx={{ fontWeight: 800, p: 1, pl: 1.5 }}>
        Choose audience
      </Typography>
      <ModalItem>
        <PublicOutlinedIcon fontSize="large" />
        <Typography variant="subtitle2" fontWeight={900}>
          Everyone
        </Typography>
      </ModalItem>
      <ModalItem>
        <PublicOutlinedIcon fontSize="large" />
        <Grid container direction="column">
          <Grid xs={12}>
            <Typography variant="subtitle2" fontWeight={900}>
              Twitter Circle
            </Typography>
          </Grid>
          <Grid container direction="row">
            <Grid sx={{ padding: 0 }}>{twitterCirclePeopleCounter} People</Grid>
            <Grid>
              <Link
                variant="text"
                color="customBlack.main"
                sx={{
                  padding: "2px 10px",
                  borderRadius: 4,
                  fontWeight: 900,
                  "&:hover": {
                    backgroundColor: "#DFE2E3",
                  },
                }}
              >
                Edit
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </ModalItem>
    </Modal>
  );
};

export default PostCreatorModal;
