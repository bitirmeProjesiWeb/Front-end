import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { ResponsivePie } from "@nivo/pie";
import { useData } from "../../context/Context";
import ACapacityChart from "./ACapacityChart";

const ACapacityBox = ({ title, subtitle, increase}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { aCapacityData} = useData();
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box
       mt="20px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="20px">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="20px">
        <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default ACapacityBox;
