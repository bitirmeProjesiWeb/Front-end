import {
  Avatar,
  Badge,
  Grid,
  IconButton,
  Input,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import { useData } from "../../context/Context";
import { Edit } from "@mui/icons-material";
export default function ProfilePages() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { user } = useData();
  return (
    <Grid container justifyContent={"center"} marginTop={4} spacing={4}>
      <Grid item>
        <Paper
          elevation={20}
          sx={{
            background: colors.primary[400],
            padding: "1rem",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <IconButton
                sx={{
                  width: 60,
                  height: 60,
                  border: "2px solid ",
                  color: colors.primary[400],
                  backgroundColor: colors.primary[600],
                  ":hover": {
                    backgroundColor: colors.primary[400],
                    color: colors.primary[600],
                  },
                }}
              >
                <Edit sx={{ fontSize: 35 }} />
              </IconButton>
            }
          >
            <Avatar
              alt={user.name}
              src={user.avatar}
              sx={{
                width: 250,
                height: 250,
                margin: "1rem",
              }}
            />
          </Badge>
          <Typography
            variant="h1"
            fontFamily={"'Andika'"}
            color={colors.primary[200]}
          >
            {user.userName}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper
          elevation={20}
          sx={{
            background: colors.primary[400],
            padding: "3rem",
            borderRadius: "20px",
          }}
        >
          <Typography
            marginBottom={"1rem"}
            variant="h4"
            fontFamily={"'Andika'"}
          >
            Adı Soyadı:
            <Input
              type="text"
              sx={{ "& input": { textAlign: "center" }, font: "inherit" }}
              value={user.name + " " + user.lastname}
              readOnly
            />
          </Typography>
          <Typography
            marginBottom={"1rem"}
            variant="h4"
            fontFamily={"'Andika'"}
          >
            e-Mail:
            <Input
              type="text"
              sx={{ "& input": { textAlign: "center" }, font: "inherit" }}
              value= {user.email}
              readOnly
            />
          </Typography>
          <Typography variant="h4" fontFamily={"'Andika'"}>
            Üyelik Türü : {user.rol === "admin" ? "Yönetici" : "Kullanıcı"}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
