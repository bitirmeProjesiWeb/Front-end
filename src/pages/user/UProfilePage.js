import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  List,
  ListItem,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { tokens } from "../../theme";
import { useData } from "../../context/Context";
import { Edit } from "@mui/icons-material";
import BackdropComp from "../../components/common/BackdropComp";
import axios from "axios";

export default function ProfilePages() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [reservations, setReservations] = useState();
  const [pitches, setPitches] = useState();

  const { user } = useData();

  useEffect(() => {
    const fetchData = async () => {
      const pr = await axios.get(`http://localhost:5000/pitches`);

      const rr = await axios.get(
        `http://localhost:5000/reservations?userId=${user.userId}`
      );

      const pd = pr.data;
      const rd = rr.data;

      setPitches(pd);
      setReservations(rd);
    };

    fetchData();
  }, [user]);

  const tarih = new Date(Date.now()).toISOString().slice(0, 10);

  if (!reservations || !pitches) {
    return <BackdropComp />;
  }

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
        <Grid item xs={12}>
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
                value={user.email}
                readOnly
              />
            </Typography>
            <Typography variant="h4" fontFamily={"'Andika'"}>
              Üyelik Türü : {user.rol === "admin" ? "Yönetici" : "Kullanıcı"}
            </Typography>
          </Paper>
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={4} marginTop={"2rem"}>
            <Paper
              elevation={20}
              sx={{
                background: colors.primary[400],
                padding: "2rem",
                marginRight: "2rem",
                borderRadius: "20px",
              }}
            >
              <Typography
                variant="h4"
                color="lightgreen"
                textAlign="center"
                fontFamily={"'Andika'"}
              >
                Aktif Randevular
              </Typography>
              <List>
                {reservations
                  .filter((reservation) => reservation.date >= tarih)
                  .map((reservation, i) => (
                    <ListItem key={i}>
                      {pitches
                        .filter((item) => item.pitchId === reservation.pitchId)
                        .map((pitch, i) => (
                          <Paper
                            key={i}
                            sx={{
                              padding: "1rem",
                              width: "100%",
                              backgroundColor: colors.primary[400],
                            }}
                          >
                            <Typography variant="h5">
                              {pitch.pitchTitle}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                              Tarih: {reservation.date}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                              Seans:
                              {pitch.sessions.map(
                                (session) =>
                                  session.sessionId === reservation.sessionId &&
                                  session.sessionStart +
                                    " - " +
                                    session.sessionFinish
                              )}
                            </Typography>
                            <Box
                              display="flex"
                              marginTop="1rem"
                              justifyContent="space-between"
                            >
                              <Button variant="outlined" color="info">
                                İncele
                              </Button>
                              <Button variant="outlined" color="error">
                                İptal Et
                              </Button>
                            </Box>
                          </Paper>
                        ))}
                    </ListItem>
                  ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={4} marginTop={"2rem"}>
            <Paper
              elevation={20}
              sx={{
                background: colors.primary[400],
                padding: "2rem",
                marginX: "1rem",
                borderRadius: "20px",
              }}
            >
              <Typography
                variant="h4"
                color="gray"
                textAlign="center"
                fontFamily={"'Andika'"}
              >
                Geçmiş Randevularım
              </Typography>
              <List>
                {reservations
                  .filter((reservation) => reservation.date <= tarih)
                  .map((reservation, i) => (
                    <ListItem key={i}>
                      {pitches
                        .filter((item) => item.pitchId === reservation.pitchId)
                        .map((pitch, i) => (
                          <Paper
                            key={i}
                            sx={{
                              padding: "1rem",
                              backgroundColor: colors.primary[400],
                              width: "100%",
                            }}
                          >
                            <Typography variant="h5">
                              {pitch.pitchTitle}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                              Tarih: {reservation.date}
                            </Typography>
                            <Typography variant="h6" color="textSecondary">
                              Seans:
                              {pitch.sessions.map(
                                (session) =>
                                  session.sessionId === reservation.sessionId &&
                                  session.sessionStart +
                                    " - " +
                                    session.sessionFinish
                              )}
                            </Typography>
                            <Box
                              display="flex"
                              marginTop="1rem"
                              justifyContent="space-between"
                            >
                              <Button variant="outlined" fullWidth color="info">
                                İncele
                              </Button>
                            </Box>
                          </Paper>
                        ))}
                    </ListItem>
                  ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={4} marginTop={"2rem"}>
            <Paper
              elevation={20}
              sx={{
                background: colors.primary[400],
                padding: "2rem",
                marginLeft: "2rem",
                borderRadius: "20px",
              }}
            >
              <Typography
                variant="h4"
                color="goldenrod"
                textAlign="center"
                fontFamily={"'Andika'"}
              >
                Öneriler
              </Typography>
              <List>
                {reservations.map((reservation, i) => (
                  <ListItem key={i}>
                    {pitches
                      .filter((item) => item.pitchId === reservation.pitchId)
                      .map((pitch, i) => (
                        <Paper
                          key={i}
                          sx={{
                            padding: "1rem",
                            backgroundColor: colors.primary[400],
                            width: "100%",
                          }}
                        >
                          <Typography variant="h5">
                            {pitch.pitchTitle}
                          </Typography>
                          <Typography variant="h6" color="textSecondary">
                            Daha önce {pitch.pitchId} kere rezervasyon
                            yaptırdınız.
                          </Typography>
                          <Box
                            display="flex"
                            marginTop="1rem"
                            justifyContent="space-between"
                          >
                            <Button variant="outlined" color="info">
                              İncele
                            </Button>
                            <Button variant="outlined" color="warning">
                              Rezervasyon Yap
                            </Button>
                          </Box>
                        </Paper>
                      ))}
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
