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
import { ColorModeContext } from "../../theme";
import React, { useContext } from "react";

export default function NavbarCom({ open, drawer }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: "2px" }}>
      <CssBaseline />
      <AppBar position="absolute" color="inherit" open={open}>
        <Toolbar
          sx={{
            pr: "24px",
            marginLeft: drawer.width,
            transition: drawer.transition,
          }}
        >
          <Typography variant="h1" noWrap sx={{ flexGrow: 1 }}>
            spor lifesi
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
            <IconButton>
              <PersonOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, p: 3 }} />
    </Box>
  );
}
