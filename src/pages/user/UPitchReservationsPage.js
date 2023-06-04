import {
  Button,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../context/Context";
import { tokens } from "../../theme";
import { Box } from "@mui/system";
import BackdropComp from "../../components/common/BackdropComp";
import axios from "axios";

export default function UPitchReservationsPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { id } = useParams();
  const { user } = useData();

  const [filtered, setFiltered] = useState();
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const pr = await axios.get(`http://localhost:5000/pitches?id=${id}`);
      const rr = await axios.get(
        `http://localhost:5000/reservations?pitchId=${id}`
      );

      const pd = pr.data[0];
      const rd = rr.data;

      if (pd && rd) {
        const filteredSessions = pd.sessions.map((session) =>
          !rd.some(
            (reservation) =>
              reservation.date === date && session.id === reservation.sessionId
          )
            ? session
            : { ...session, emp: true }
        );

        setFiltered(filteredSessions);
      }
    };

    fetchData();
  }, [id, date, open]);

  const minDate = new Date().toISOString().slice(0, 10);
  const maxDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const handleDate = (event) => {
    const secilenDate = event.target.value;

    if (secilenDate >= minDate && secilenDate <= maxDate) {
      setDate(secilenDate);
    } else {
      setDate();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSessionId(parseInt(e.target.name));
    if (user) {
      setOpen(true);
    } else {
      alert("rezervasyon yapmak için giriş yapmalısınız");
    }
  };

  const handleAccept = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/reservations", {
      userId: user.id,
      pitchId: parseInt(id),
      sessionId: sessionId,
      date: date,
    });

    setOpen(false);
  };

  if (!filtered) {
    return <BackdropComp />;
  }

  return (
    <Grid container marginTop={4} spacing={4} justifyContent={"center"}>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: colors.primary[900],
            borderRadius: "10px",
            boxShadow: "0 0 20px 5px #aaccff",
            overflow: "scroll",
            width: "400px",
            height: "150px",
            p: 4,
          }}
        >
          <Typography>
            rezervasyon Yapmak İstediğinizden emin misiniz?
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "2rem",
              justifyContent: "end",
            }}
          >
            <Button
              color="error"
              variant="outlined"
              onClick={() => setOpen(false)}
              sx={{ marginRight: "2rem" }}
            >
              Vazgeç
            </Button>
            <Button color="success" variant="outlined" onClick={handleAccept}>
              Evet
            </Button>
          </Box>
        </Box>
      </Modal>
      <Grid item xs={8}>
        <Paper
          elevation={20}
          sx={{
            width: "100%",
            height: "100%",
            background: colors.primary[400],
            padding: "1rem",
          }}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <TextField
              type="date"
              value={date}
              onChange={handleDate}
              inputProps={{
                min: minDate,
                max: maxDate,
                style: {
                  color: date < minDate ? "red" : "inherit",
                },
              }}
            />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper
          elevation={20}
          sx={{
            width: "100%",
            height: "auto",
            background: colors.primary[400],
            padding: "1rem",
          }}
        >
          <Typography align="center" variant="h4">
            seanslar
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
            {date &&
              filtered.map((item) =>
                !item.emp ? (
                  <Button
                    name={item.id}
                    onClick={handleSubmit}
                    variant="outlined"
                    key={item.id}
                    sx={{ marginTop: "1rem" }}
                    color="info"
                  >
                    {item.sessionStart} - {item.sessionFinish}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    key={item.id}
                    sx={{ marginTop: "1rem" }}
                    color="error"
                    onClick={() => alert("dolu")}
                  >
                    {item.sessionStart} - {item.sessionFinish}
                  </Button>
                )
              )}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
