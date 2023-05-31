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
  Tab,
  Tabs,
  AppBar,
  useTheme,
  Paper,
} from "@mui/material";
import { tokens } from "../../theme";

export default function RegisterPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [user, setUser] = useState({
    id:1,
    email: "",
    password: "",
    tel: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value === 0) {
      if (user.email && user.password) {
        const eu = await axios.get(
          `http://localhost:5000/users?email=${user.email}`
        );

        if (eu.data[0]) {
          alert("bu e-posta adresi kullanılmaktadır");
        } else {
          try {
            const response = await axios.post(
              "http://localhost:5000/users",
              user
            );
            console.log(response.data); // Eklenen kullanıcının yanıtını konsolda gösterir
          } catch (error) {
            console.error(error);
          }
        }
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <AppBar
        position="static"
        color="inherit"
        sx={{ background: colors.primary[400], marginTop: "5rem" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: colors.primary[100],
            },
          }}
        >
          <Tab label="Kullanıcı" sx={{ fontSize: "16px" }} />
          <Tab label="Saha Sahibi" sx={{ fontSize: "16px" }} />
        </Tabs>
      </AppBar>
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
        </Typography>
        {value === 0 ? (
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
            <Button
              disabled={!user.email || !user.password}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="info"
            >
              Kayıt Ol
            </Button>
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
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
              label="Telefon"
              type="tel"
              value={user.tel}
              onChange={(e) => setUser({ ...user, tel: e.target.value })}
            />
            <Button
              disabled={!user.email || !user.password || !user.tel}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="info"
            >
              Kayıt Ol
            </Button>
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
        )}
      </Paper>
    </Container>
  );
}
