import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useData } from "../../context/Context";

function ACommentBox() {
  const { aComments } = useData();

  return (
    <List
      sx={{
        width: "100%",
        //  maxWidth: 360,
        // bgcolor: "background.paper",
      }}
    >
      {aComments.map((item) => (
        <React.Fragment key={item.commentId}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" />
            </ListItemAvatar>
            <ListItemText
              primary={item.username}
              secondary={
                <React.Fragment>
                  {/* <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.username}
                  </Typography> */}
                  {item.subcomment}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}

export default ACommentBox;
