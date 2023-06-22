import { Box, Tabs, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import { useEffect, useRef, useState } from "react";
import TabPanel from "../TabPanel/TabPanel";
import { styled } from "@mui/material/styles";
import "./Content.css";

const Content = () => {
  const [value, setValue] = useState(0);
  const [forYouWidth, setForYouWidth] = useState(0);
  const [followingWidth, setFollowingWidth] = useState(0);
  const forYouRef = useRef();
  const followingRef = useRef();

  useEffect(() => {
    setForYouWidth(forYouRef.current.getBoundingClientRect().width);
    setFollowingWidth(followingRef.current.getBoundingClientRect().width);
  }, [forYouRef, followingRef]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const styledTabsWidth = () => {
    if (value === 0) {
      return forYouWidth;
    } else if (value === 1) {
      return followingWidth;
    }
  };

  const StyledTabs = styled(Tabs)(({ theme }) => ({
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      height: "4px",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: styledTabsWidth(),
      width: "100%",
      backgroundColor: theme.palette.twitterBlue.main,
      borderRadius: "2px",
    },
  }));

  return (
    <div>
      <Typography variant="h5" sx={{ p: 2 }}>
        Home
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <StyledTabs
            variant="fullWidth"
            centered
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              children: <span className="MuiTabs-indicatorSpan" />,
            }}
          >
            <Tab
              label={<span ref={forYouRef}>For You</span>}
              {...a11yProps(0)}
              sx={{ textTransform: "none" }}
            />
            <Tab
              label={<span ref={followingRef}>Following</span>}
              {...a11yProps(1)}
              sx={{ textTransform: "none" }}
            />
          </StyledTabs>
        </Box>
        <TabPanel value={value} index={0}></TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
      </Box>
    </div>
  );
};

export default Content;
