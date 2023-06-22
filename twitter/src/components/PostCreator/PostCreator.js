import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import { useEffect, useRef, useState } from "react";
import { Button, Divider, Link, TextField, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import IconsWithButton from "./IconsWithButton";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

import PostCreatorModal from "./PostCreatorModal";

const PostCreator = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [top, setTop] = useState("0px");
  const [right, setRight] = useState("0px");
  const [selected, setSelected] = useState("Everyone");
  const [showScope, setShowScope] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showButton, setShowButton] = useState(false);

  const dropdownRef = useRef();
  const linkRef = useRef();
  const inputRef = useRef();

  const handleDropdownClick = (e) => {
    if (!dropdownRef.current) {
      return;
    }

    const rect = dropdownRef.current.getBoundingClientRect();
    setTop(rect.bottom + 10 + "px");
    setRight(window.innerWidth - rect.right);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleInputClick = (e) => {
    setShowScope(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue) {
      setShowButton(true);
      return;
    }
    setShowButton(false);
  }, [inputValue]);

  const button = showScope && (
    <Button
      ref={dropdownRef}
      size="medium"
      variant="outlined"
      onClick={handleDropdownClick}
      endIcon={<KeyboardArrowDownIcon />}
      sx={{
        textTransform: "none",
        borderRadius: "10px",
        width: "fit-content",
        maxWidth: "60%",
        height: "20px",
        mb: 1,
        color: "twitterBlue.main",
      }}
    >
      {selected}
    </Button>
  );

  const link = showScope && (
    <>
      <Link
        href="#"
        underline="none"
        ref={linkRef}
        sx={{ pb: 1, display: "flex", alignItems: "center" }}
        color="primary.light"
      >
        <PublicOutlinedIcon fontSize="small" sx={{ pr: 0.75 }} />
        <Typography variant="span">Everyone can reply</Typography>
      </Link>
      <Divider />
    </>
  );

  return (
    <Grid container spacing={1}>
      <Grid xs={3}>
        <Avatar alt="avatar" src="https://i.pravatar.cc/300" />
      </Grid>
      <Grid xs>
        <FormControl fullWidth>
          {button}
          <PostCreatorModal
            isOpen={isModalOpen}
            handleClose={handleModalClose}
            top={top}
            right={right}
          />

          <TextField
            ref={inputRef}
            placeholder="What is happening?!"
            size="normal"
            onClick={handleInputClick}
            onChange={handleInputChange}
            value={inputValue}
            sx={{ p: 1 }}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
          />
          {link}
          <IconsWithButton showButton={showButton} />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default PostCreator;
