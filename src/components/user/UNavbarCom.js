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
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import React, { useContext, useState } from "react";
import { useData } from "../../context/Context";
import { NavLink } from "react-router-dom";

export default function UNavbarCom() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const { user, logoutHandle } = useData();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
              <Badge badgeContent="4">
                <NotificationsOutlined />
              </Badge>
            </IconButton>
            <IconButton>
              <SettingsOutlined />
            </IconButton>
            <IconButton onClick={handleClick}>
              <Avatar alt={user.userName} src={user.avatar} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem component={NavLink} to="/profile">
                Profil
              </MenuItem>
              <MenuItem onClick={logoutHandle}>Çıkış Yap</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, p: 3 }} />
    </Box>
  );
}
