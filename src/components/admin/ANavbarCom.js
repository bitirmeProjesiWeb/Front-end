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
  colors,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { ColorModeContext } from "../../theme";
import React, { useContext } from "react";

//tema
import { tokens } from "../../theme";

export default function ANavbarCom({ open, drawer }) {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: "2px"}}  >
      <CssBaseline />
      <AppBar position="absolute" color="inherit" open={open} sx = {{backgroundColor: colors.primary[600]}}>
        <Toolbar
          sx={{
            pr: "24px",
            marginLeft: drawer.width,
            transition: drawer.transition,
          }}
        >
          <Typography variant="h3" noWrap sx={{ flexGrow: 1 }}>
            SportLife
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
              {/* badgeContent : bildirim sayısı */}
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
