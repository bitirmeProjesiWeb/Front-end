import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Box,
  Container,
  Typography,
} from "@mui/material";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //todo register fonksiyonu
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Kayıt Ol
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
      </Box>
    </Container>
  );
}
