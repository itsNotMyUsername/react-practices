import "./SearchBar.css";
import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

class SearchBar extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    if (!value) return;
    this.props.onSearchSubmit(value);
  };

  render() {
    return (
      <Box className="searchBar">
        <form onSubmit={this.onSubmit}>
          <TextField
            id="search"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            fullWidth
          />
        </form>
      </Box>
    );
  }
}

export default SearchBar;
