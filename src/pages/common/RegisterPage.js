import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //todo register fonksiyonu
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Container maxWidth="sm">
      <AppBar
        position="static"
        sx={{ background: colors.primary[400], marginTop: "5rem" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "cyan",
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              color="warning"
              required
              fullWidth
              label="Şifre"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              disabled={!email || !password}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              color="warning"
              required
              fullWidth
              label="Şifre"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              color="warning"
              required
              fullWidth
              label="Telefon"
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <Button
              disabled={!email || !password}
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
