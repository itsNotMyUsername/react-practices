import { Stack } from "@mui/material";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Icon from "./Icon";

const Icons = () => {
  return (
    <Stack direction="row">
      <Icon>
        <PermMediaOutlinedIcon color="twitterBlue" />
      </Icon>
      <Icon>
        <GifBoxOutlinedIcon color="twitterBlue" />
      </Icon>
      <Icon>
        <PollOutlinedIcon color="twitterBlue" />
      </Icon>
      <Icon>
        <SentimentSatisfiedOutlinedIcon color="twitterBlue" />
      </Icon>
      <Icon>
        <PendingActionsOutlinedIcon color="twitterBlue" />
      </Icon>
      <Icon>
        <LocationOnOutlinedIcon color="twitterBlue" />
      </Icon>
    </Stack>
  );
};

export default Icons;
