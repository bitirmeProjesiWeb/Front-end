import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

export default function FooterCom() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{ backgroundColor: colors.primary[400] }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="60px"
    >
      <Typography variant="h6">
        © 2023 SportLife | Tüm hakları saklıdır.
      </Typography>
    </Box>
  );
}
