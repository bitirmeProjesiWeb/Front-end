import React, { useState } from "react";
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
  Divider,
} from "@mui/material";
import { tokens } from "../../theme";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("------");
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //todo login fonksiyonu
    if (email && code) {
      navigate("/");
    }
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
            Şifremi Sıfırla
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {code === "------" ? (
              <Box>
                <TextField
                  margin="normal"
                  color="warning"
                  required
                  fullWidth
                  label="Email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  disabled={!email}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="info"
                >
                  Kod Gönder
                </Button>
                <Box display="flex" justifyContent="space-between">
                  <TextField
                    margin="normal"
                    color="warning"
                    type="text"
                    required
                    value={code[0]}
                    onChange={(e) => setCode(e.target.value)}
                    sx={{ width: "50px", "& input": { textAlign: "center" } }}
                  />
                  <TextField
                    margin="normal"
                    color="warning"
                    type="text"
                    required
                    value={code[1]}
                    onChange={(e) => setCode(e.target.value)}
                    sx={{ width: "50px", "& input": { textAlign: "center" } }}
                  />
                  <TextField
                    margin="normal"
                    color="warning"
                    type="text"
                    required
                    value={code[2]}
                    onChange={(e) => setCode(e.target.value)}
                    sx={{ width: "50px", "& input": { textAlign: "center" } }}
                  />
                  <TextField
                    margin="normal"
                    color="warning"
                    type="text"
                    required
                    value={code[3]}
                    onChange={(e) => setCode(e.target.value)}
                    sx={{ width: "50px", "& input": { textAlign: "center" } }}
                  />
                  <TextField
                    margin="normal"
                    color="warning"
                    type="text"
                    required
                    value={code[4]}
                    onChange={(e) => setCode(e.target.value)}
                    sx={{ width: "50px", "& input": { textAlign: "center" } }}
                  />
                  <TextField
                    margin="normal"
                    color="warning"
                    type="text"
                    required
                    value={code[5]}
                    onChange={(e) => setCode(e.target.value)}
                    sx={{ width: "50px", "& input": { textAlign: "center" } }}
                  />
                </Box>
              </Box>
            ) : (
              <Box>
                <TextField
                  margin="normal"
                  color="warning"
                  required
                  fullWidth
                  type="password"
                  label="Yeni Şifre"
                  autoComplete="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <TextField
                  margin="normal"
                  color="warning"
                  required
                  fullWidth
                  type="password"
                  label="Yeni Şifre Tekrar"
                  autoComplete="password"
                  value={rePass}
                  onChange={(e) => setRePass(e.target.value)}
                />
                <Button
                  disabled={!pass}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="info"
                >
                  Onayla
                </Button>
              </Box>
            )}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
