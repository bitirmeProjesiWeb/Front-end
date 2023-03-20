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

import { NavLink } from "react-router-dom";

import { tokens } from "../../theme";

//iconlar
import { ChevronLeft, Menu } from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import QuizIcon from "@mui/icons-material/Quiz";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";

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
            elevation: "2",
            sx: { background: colors.primary[400] } }} // tema renk ayarı
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
            <ListItem button component={NavLink} to= "/admin">
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Anasayfa" />
            </ListItem>

            <Divider />

            <ListItem button component={NavLink} to= "/randevular">
              <ListItemIcon>
                <GroupsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Randevular" />
            </ListItem>

            <ListItem button component={NavLink} to= "/sporalanlari">
              <ListItemIcon>
                <SportsSoccerOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Spor Alanları" />
            </ListItem>

            <ListItem button component={NavLink} to= "/takvim">
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary="Takvim" />
            </ListItem>

            <ListItem button component={NavLink} to= "/soruveyorumlar">
              <ListItemIcon>
                <QuizIcon />
              </ListItemIcon>
              <ListItemText primary="Soru ve Yorumlar" />
            </ListItem>

            <Divider />
            
            <ListItem button component={NavLink} to= "/kurumyonetimi">
              <ListItemIcon>
                <StoreOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Kurum Yönetimi" />
            </ListItem>
          </List>
        </Drawer>
      </Box>
      <Box sx={{ flexGrow: 1, p: 3 }}>{children}</Box>
    </Box>
  );
}
