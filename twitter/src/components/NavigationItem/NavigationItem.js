import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const NavigationItem = ({ name, icon }) => {
  return (
    <ListItem key={name} disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default NavigationItem;
