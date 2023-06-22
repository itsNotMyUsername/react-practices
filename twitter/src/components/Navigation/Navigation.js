import {
  Home,
  Search,
  NotificationsNone,
  MailOutline,
  Reorder,
  TurnedInNot,
  Verified,
  PermIdentity,
  MoreHoriz,
} from "@mui/icons-material";
import NavigationItem from "../NavigationItem/NavigationItem";
import { Drawer, List, Toolbar } from "@mui/material";

const drawerWidth = 240;

const Navigation = () => {
  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          {[
            { name: "Home", icon: <Home /> },
            { name: "Explore", icon: <Search /> },
            { name: "Notifications", icon: <NotificationsNone /> },
            { name: "Messages", icon: <MailOutline /> },
            { name: "Lists", icon: <Reorder /> },
            { name: "Bookmarks", icon: <TurnedInNot /> },
            { name: "Verified", icon: <Verified /> },
            { name: "Profile", icon: <PermIdentity /> },
            { name: "More", icon: <MoreHoriz /> },
          ].map((obj) => (
            <NavigationItem name={obj.name} icon={obj.icon} />
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navigation;
