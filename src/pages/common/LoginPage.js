import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { useData } from "../../context/Context";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginHandle } = useData();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //todo login fonksiyonu
    if (email && password) {
      loginHandle({ email, password })
        ? navigate("/")
        : alert("böyle bir hesap bulunamadı");
    }
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
        <Typography variant="h2">
          Giriş Yap
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            color="warning"
            required
            fullWidth
            label="Email yada Kullanıcı Adı"
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
            Giriş Yap
          </Button>
          <Grid container>
            <Grid item xs>
              <Typography
                component={NavLink}
                to="/#"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Şifreni mi unuttun?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component={NavLink}
                to="/register"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Hesabın yok mu? Kayıt Ol
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
