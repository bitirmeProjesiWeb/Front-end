import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import React, { useContext } from "react";
import { useData } from "../../context/Context";
import { NavLink } from "react-router-dom";

export default function UNavbarCom() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const { user } = useData();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: "2px" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="inherit"
        sx={{ background: colors.primary[400] }}
      >
        <Toolbar>
          <Typography variant="h1" noWrap sx={{ flexGrow: 1 }}>
            SporLife
          </Typography>
          <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined />
              ) : (
                <LightModeOutlined />
              )}
            </IconButton>
            <IconButton>
              <Badge badgeContent="4">
                <NotificationsOutlined />
              </Badge>
            </IconButton>
            <IconButton>
              <SettingsOutlined />
            </IconButton>
            <IconButton component={NavLink} to="/profile">
              <Avatar alt={user.userName} src={user.avatar} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, p: 3 }} />
    </Box>
  );
}
