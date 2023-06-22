import { Drawer, List } from "@mui/material";
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

const drawerWidth = 240;

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          minWidth: drawerWidth,
          width: "calc(20%)",
          "& .MuiDrawer-paper": {
            minWidth: drawerWidth,
            width: "calc(20%)",
            boxSizing: "border-box",
          },
        }}
      >
        {/* <Toolbar /> */}
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
            <NavigationItem key={obj.name} name={obj.name} icon={obj.icon} />
          ))}
        </List>
      </Drawer>
      {children}
    </div>
  );
};

export default Layout;
