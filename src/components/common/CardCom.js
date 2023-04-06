import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme";

export default function CardCom({
  pitchId,
  image,
  pitchTitle,
  description,
  price,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Card
      sx={{
        width: "370px",
        margin: "30px",
        ":hover": {
          transform: "scale(1.03)",
          boxShadow:
            " 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)",
        },
        background: colors.primary[400],
      }}
    >
      <CardMedia sx={{ height: "200px" }} image={image} title={pitchTitle} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {pitchTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          ücret: {price} ₺
        </Typography>
      </CardContent>
      <Button
        component={NavLink}
        to={`/pitchdetail/${pitchId}`}
        style={{ margin: "10px" }}
        size="medium"
        variant="outlined"
        color="info"
      >
        incele
      </Button>
      <Button
        style={{ margin: "10px", float: "right" }}
        size="medium"
        variant="outlined"
        color="success"
      >
        rezerve et
      </Button>
    </Card>
  );
}
