import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
} from "@mui/material";
import { useData } from "../../context/Context";
import { tokens } from "../../theme";
import axios from "axios";

export default function LoginPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { user, setUser } = useData();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      const u = await axios.get(
        `http://localhost:5000/users?email=${email}&password=${password}`
      );
      const ud = u.data[0];

      setUser(ud);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      alert("böyle bir hesap bulunamadı");
    }
  }, [user, navigate]);

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
          <Typography variant="h2" textAlign="center">
            Giriş Yap
          </Typography>
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
                  to="/forgotpassword"
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
        </Paper>
      </Box>
    </Container>
  );
}
