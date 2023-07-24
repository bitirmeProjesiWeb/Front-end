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
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ListItem button component={NavLink} to={item.link}>
      <ListItemIcon sx={{ color: colors.sidebarTypographyColor[400] }}>{item.icon}</ListItemIcon>
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
            background: colors.sidebarAccent[400],
            borderRadius: "2%",
            ml: "0.5vh",
            mt: "0.5vh",
            mb: "0.5vh",
            width: "auto",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            color: colors.sidebarTypographyColor[400],
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
              sx={{ margin: "5px", color: colors.sidebarTypographyColor[400] }}
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
