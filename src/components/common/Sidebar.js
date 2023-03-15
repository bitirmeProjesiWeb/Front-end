 import React, { useState } from 'react';
 import "../../styles/Sidebar.css";
 import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material/';
 import { Inbox , Mail, Menu, Close } from '@mui/icons-material';
export default function Sidebar() {
  const [isPinned, setIsPinned] = useState(false);

  const togglePin = () => {
    setIsPinned(!isPinned);
  };

  return (
    <div className='con'>
    <div className={`sidebar ${isPinned ? 'pinned' : ''}`}>
      <div className="toggle-pin" onClick={togglePin}>
        {isPinned ? <Menu/>:<Close/> }
      </div>
      <List className='menu'>
    <ListItem button className='menu-item'>
      <ListItemIcon><Inbox /></ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button className='menu-item'>
      <ListItemIcon><Mail/></ListItemIcon>
      <ListItemText primary="Mail" />
    </ListItem>
  </List>
    </div>
    <div className='main'>
      masafasfasca
    </div>
    </div>
  );
};

