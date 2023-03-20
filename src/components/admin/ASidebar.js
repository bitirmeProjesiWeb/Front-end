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
    type: "listItem",
    icon: <HomeOutlined />,
    text: "Anasayfa",
    link: "/admin",
  },
  {},
  {
    type: "listItem",
    icon: <GroupsOutlined />,
    text: "Randevular",
    link: "/admin/randevular",
  },
  {
    type: "listItem",
    icon: <SportsSoccerOutlined />,
    text: "Spor Alanları",
    link: "/admin/spor-alanlari",
  },
  {
    type: "listItem",
    icon: <CalendarToday />,
    text: "Takvim",
    link: "/admin/takvim",
  },

  {
    type: "listItem",
    icon: <Quiz />,
    text: "Soru ve Yorumlar",
    link: "/admin/yorumlar",
  },
  {},
  {
    type: "listItem",
    icon: <StoreOutlined />,
    text: "Kurum Yönetimi",
    link: "/admin/kurum-yönetimi",
  },
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
            elevation: "1",
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
                <SidebarListItemCom item={item} />
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
