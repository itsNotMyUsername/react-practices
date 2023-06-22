import { Box, Button, TextField, Typography } from "@mui/material";
import ColumnBox from "./ColumnBox";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TrendItem from "./TrendItem";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useRef, useState } from "react";

const Column = () => {
  const [term, setTerm] = useState("");
  const [width, setWidth] = useState(0);
  const boxRef = useRef();

  const trendItems = [
    {
      id: 1,
      title: "Trending In Poland",
      subtitle: "Gratulacje",
      info: "1,807 Tweets",
    },
    {
      id: 2,
      title: "Trending In Poland",
      subtitle: "Gratulacje",
      info: "1,807 Tweets",
    },
  ].map((item) => {
    return <TrendItem key={item.id} item={item} />;
  });

  const handleSearchTerm = (e) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    setWidth(boxRef.current.getBoundingClientRect().width);
  });

  return (
    <Grid container sx={{ p: 0.75, pr: "15%" }} spacing={1.5}>
      <Grid
        xs={12}
        sx={{
          position: "fixed",
          top: 0,
          width: width,
          bgcolor: "#fff",
          zIndex: 1,
        }}
      >
        <Box>
          <TextField
            placeholder="Search Twitter"
            variant="outlined"
            size="small"
            fullWidth
            onChange={handleSearchTerm}
            value={term}
            sx={{ bgcolor: "grey.100", borderRadius: "15px" }}
            InputProps={{
              style: {
                borderRadius: "15px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Grid>
      <Grid ref={boxRef} flexBasis="100%" sx={{ mt: "55px" }}>
        <ColumnBox>
          <Box sx={{ pl: 2, pr: 2 }}>
            <Typography variant="h5" gutterBottom>
              Get Verified
            </Typography>
            <Typography variant="h6" gutterBottom>
              Subscribe to unlock new features.
            </Typography>
            <Button
              variant="contained"
              color="customBlack"
              sx={{ borderRadius: 4 }}
              disableElevation
            >
              Get Verified
            </Button>
          </Box>
        </ColumnBox>
      </Grid>
      <Grid flexBasis="100%">
        <ColumnBox>
          <Typography variant="h5" gutterBottom sx={{ padding: "0 10px" }}>
            Trends For You
          </Typography>
          {trendItems}
        </ColumnBox>
      </Grid>
    </Grid>
  );
};

export default Column;
