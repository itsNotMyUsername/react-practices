import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import "./TrendItem.css";

const typographyStyle = {
  pt: 0.5,
  pb: 0.5,
  width: "100%",
  "&:hover": {
    bgcolor: "#eee",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
};

const TrendItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);
  const dotsRef = useRef();

  const handleThreeDotsClick = () => {
    const rect = dotsRef.current.getBoundingClientRect();
    setTop(rect.bottom);
    setRight(window.innerWidth - rect.right);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      <div className="item">
        <Stack direction="row" justifyContent="space-between">
          <div>
            <Typography variant="subtitle2">{item.title}</Typography>
            <Typography variant="h6">{item.subtitle}</Typography>
            <Typography variant="subtitle2">{item.info}</Typography>
          </div>
          <div>
            <MoreHorizIcon ref={dotsRef} onClick={handleThreeDotsClick} />
          </div>
        </Stack>
      </div>
      <Modal isOpen={isOpen} handleClose={handleClose} top={top} right={right}>
        <Typography variant="span" sx={typographyStyle}>
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <SentimentVeryDissatisfiedIcon sx={{ p: 0.5 }} /> I'm not interested
            in this
          </Box>
        </Typography>
        <Typography variant="span" sx={typographyStyle}>
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <SentimentVeryDissatisfiedIcon sx={{ p: 0.5 }} /> This trend is
            harmful or spam
          </Box>
        </Typography>
      </Modal>
    </Box>
  );
};

export default TrendItem;
