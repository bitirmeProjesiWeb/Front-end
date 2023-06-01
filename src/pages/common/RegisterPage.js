import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  TextField,
  Button,
  Grid,
  Box,
  Container,
  Typography,
  useTheme,
  Paper,
  Divider,
  Checkbox,
  FormControlLabel,
  CircularProgress,
} from "@mui/material";
import { tokens } from "../../theme";

export default function RegisterPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [user, setUser] = useState({
    id: 0,
    name: "",
    lastName: "",
    email: "",
    password: "",
    avatar: "http://localhost:3000/images/no-profile.png",
    tel: "",
    role: "user",
  });
  const [isAdmin, setIsAdmin] = useState();
  const [regStatus, setRegStatus] = useState("none");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !user.name ||
      !user.lastName ||
      !user.email ||
      !user.password ||
      !rePassword
    ) {
      alert("gerekli alanları doldurunuz");
    } else {
      setRegStatus("loading");

      const eu = await axios
        .get(`http://localhost:5000/users?email=${user.email}`)
        .catch(() => setRegStatus("error"));

      if (eu.data[0]) {
        alert("bu e-posta adresi kullanılmaktadır");
        setRegStatus("none");
      } else {
        await axios
          .post("http://localhost:5000/users", user)
          .then(() => setRegStatus("success"))
          .catch(() => setRegStatus("error"));
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={20}
          sx={{
            width: "100%",
            height: "100%",
            background: colors.primary[400],
            padding: "5rem",
          }}
        >
          <Typography component="h1" textAlign={"center"} variant="h5">
            Kayıt Ol
            <Divider sx={{ marginY: "1rem" }} />
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <TextField
                margin="normal"
                color="warning"
                required
                label="İsim"
                autoComplete="name"
                autoFocus
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <TextField
                margin="normal"
                color="warning"
                required
                label="Soy İsim"
                autoComplete="lastName"
                autoFocus
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </Box>
            <TextField
              margin="normal"
              color="warning"
              required
              fullWidth
              label="Email Adresi"
              autoComplete="email"
              autoFocus
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <TextField
              margin="normal"
              color="warning"
              required
              fullWidth
              label="Şifre"
              type="password"
              autoComplete="current-password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <TextField
              margin="normal"
              color="warning"
              required
              fullWidth
              label="Şifre Tekrar"
              type="password"
              autoComplete="current-password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            <TextField
              margin="normal"
              color="warning"
              fullWidth
              label="Telefon"
              type="tel"
              value={user.tel}
              onChange={(e) => setUser({ ...user, tel: e.target.value })}
            />
            <FormControlLabel
              label={"Saha Sahibi misiniz?"}
              control={
                <Checkbox
                  color="default"
                  value={isAdmin}
                  onChange={() => setIsAdmin(!isAdmin)}
                />
              }
            />

            {regStatus === "success" ? (
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="success"
              >
                Kayıt Başarılı
              </Button>
            ) : regStatus === "error" ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="error"
              >
                Bir Sorun Oluştu Tekrar Deneyin
              </Button>
            ) : regStatus === "loading" ? (
              <Button
                disabled
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="warning"
              >
                <CircularProgress size={24} />
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="info"
              >
                Kayıt ol
              </Button>
            )}
            <Grid container>
              <Grid item>
                <Typography
                  component={NavLink}
                  to="/login"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  Hesabın var mı? Giriş Yap
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
