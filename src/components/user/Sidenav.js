import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Inbox, Mail, ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function Sidenav({ children }) {
  const [open, setOpen] = useState(true);
  const [pin, setPin] = useState(false);

  const drawerOpenHandle = () => {
    setOpen(!open);
  };

  const drawerPinHandle = () => {
    setPin(!pin);
    setOpen(!open)
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Button color="secondary" onClick={drawerOpenHandle} variant="outlined">
        {!open ? <ChevronRight /> : <ChevronLeft />}
      </Button>
      <Drawer
        variant={pin ? "temporary" : "permanent"}
        open={open}
        sx={
          open
            ? { width: "250px", transition: "0.27s" }
            : { width: "50px", overflowX: "hidden", transition: "0.27s" }
        }
      >
        <div>
          <Button
            size="large"
            color="secondary"
            onClick={drawerOpenHandle}
            variant="outlined"
            sx={!pin || open ?{ width: "80%" }:{}}
          >
            {!open ? <ChevronRight /> : <ChevronLeft />}
          </Button>
          <Checkbox onClick={drawerPinHandle} checked={!pin} sx={open?{}:{display:"none"}}/>
        </div>
        <Divider />
        <List
          sx={
            open
              ? { width: "250px", transition: "0.27s" }
              : { width: "50px", overflowX: "hidden", transition: "0.27s" }
          }
        >
          <ListItem button>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="Mail" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
