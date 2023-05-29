import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  // Typography,
  useTheme,
} from "@mui/material";

import { tokens } from "../../theme";

//iconlar
import {
  CalendarToday,
  ChevronLeft,
  GroupsOutlined,
  HomeOutlined,
  Menu,
  Quiz,
  SportsSoccerOutlined,
  StoreOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const sidebarListItems = [
  {
    key: 1,
    type: "listItem",
    icon: <HomeOutlined />,
    text: "Anasayfa",
    link: "/admin",
  },
  {},
  {
    key: 2,
    type: "listItem",
    icon: <GroupsOutlined />,
    text: "Randevular",
    link: "randevular",
  },
  {
    key: 3,
    type: "listItem",
    icon: <SportsSoccerOutlined />,
    text: "Spor Alanları",
    link: "sporAlanlari",
  },
  {
    key: 4,
    type: "listItem",
    icon: <CalendarToday />,
    text: "Takvim",
    link: "takvim",
  },

  {
    key: 5,
    type: "listItem",
    icon: <Quiz />,
    text: "Soru ve Yorumlar",
    link: "yorumlar",
  },
  {},

];

function SidebarListItemCom({ item }) {
  return (
    <ListItem button component={NavLink} to={item.link}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItem>
  );
}

export default function ASidebar({ children, open, setOpen, drawer }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const drawerOpenHandle = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Drawer
          PaperProps={{
            elevation: 1,
            sx: { background: colors.primary[400] },
          }} // tema renk ayarı
          variant="permanent"
          open={open}
          style={drawer}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton
              edge="start"
              sx={{ margin: "5px" }}
              onClick={drawerOpenHandle}
            >
              {!open ? <Menu /> : <ChevronLeft />}
            </IconButton>
          </Toolbar>
          <Divider />

          <List style={drawer}>
            {sidebarListItems.map((item) =>
              item.type === "listItem" ? (
                <SidebarListItemCom key={item.key} item={item} />
              ) : (
                <Divider />
              )
            )}
          </List>
        </Drawer>
      </Box>
      <Box sx={{ flexGrow: 1, p: 3 }}>{children}</Box>
    </Box>
  );
}
