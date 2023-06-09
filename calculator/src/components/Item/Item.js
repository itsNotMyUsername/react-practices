import Grid from "@mui/material/Unstable_Grid2";
import "./Item.css";

const Item = ({ onClick, value, classes, size }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Grid xs={size} onClick={handleClick}>
      <div className={classes}>{value}</div>
    </Grid>
  );
};

export default Item;
