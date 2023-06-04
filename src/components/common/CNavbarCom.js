import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  AppBar,
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
import { NavLink } from "react-router-dom";

export default function CNavbarCom() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: "2px" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="inherit"
        sx={{ background: colors.primary[400] }}
      >
        <Toolbar>
          <Typography variant="h1" noWrap sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={{textDecoration:"none", color:"inherit"}}>SporLife</NavLink>
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
              <Badge badgeContent={4}>
                <NotificationsOutlined />
              </Badge>
            </IconButton>
            <IconButton>
              <SettingsOutlined />
            </IconButton>
            <IconButton component={NavLink} to="/profile">
              <PersonOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, p: 3 }} />
    </Box>
  );
}
