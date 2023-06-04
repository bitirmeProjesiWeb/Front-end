<<<<<<< HEAD
import { Grid } from '@mui/material'
=======
import { Box, Typography, useTheme } from '@mui/material'
>>>>>>> adminPanel
import React from 'react'
import { tokens } from "../../theme";

export default function FooterCom() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
<<<<<<< HEAD
    <Grid container>

    </Grid>
=======
    <Box
    sx={{  backgroundColor: colors.primary[400] }}
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="60px"
    >
  <Typography variant="h6">
        © 2023 SportLife | Tüm hakları saklıdır.
      </Typography>
    </Box>
>>>>>>> adminPanel
  )
}
