import { Box, Rating, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
//import { mockTransactions } from "../../data/mockData";
import AHeader from "../../components/admin/AHeader";
import ALineChart from "../../components/admin/ALineChart";
// import BarChart from "../../components/BarChart";
// import AProgressCircle from "../../components/admin/AProgressCircle";
// import AStatBox from "../../components/admin/AStatBox";
// import EmailIcon from "@mui/icons-material/Email";
// import Grid from "@mui/material/Grid";
import ABox from "../../components/admin/ABox";
import ACapacityBox from "../../components/admin/ACapacityBox";
import ACapacityChart from "../../components/admin/ACapacityChart";
import { useData } from "../../context/Context";

export default function HomePages() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { sortedReservations } = useData();

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <AHeader title="ANASAYFA" subtitle="Sportlife'a Hoşgeldiniz!" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="180px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box gridColumn="span 5">
          {/* 4LÜ BOX */}
          <Box
            // display="flex"
            // alignItems="center"
            justifyContent="center"
          >
            <Box
              display="grid"
              gridTemplateColumns="repeat(2, 1fr)"
              //gridGap="20px"
              //backgroundColor = {colors.primary[400]}
              gap="20px"
              gridAutoRows="80px"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                backgroundColor={colors.primary[400]}
              >
                <ABox
                  title="BUGÜNÜN RANDEVU SAYISI"
                  subtitle="8"
                  increase="Düne göre artış sayısı: 3"
                />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundColor={colors.primary[400]}
              >
                <ABox
                  title="ŞUANKİ RANDEVU"
                  subtitle="14.00 - 16.00"
                  increase="(Bağcılar Futbol Sahası)"
                />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundColor={colors.primary[400]}
              >
                <ABox
                  title="BUGÜN İPTAL EDİLEN RANDEVU"
                  subtitle="22.00-00.00"
                  increase="(Bağcılar Futbol Sahası)"
                />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundColor={colors.primary[400]}
              >
                <ABox
                  title="BUGÜN SIRADAKİ RANDEVU"
                  subtitle="16.30-18.30"
                  increase="(Bağcılar Futbol Sahası)"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 5"
          backgroundColor={colors.primary[400]}
          display="flex"
          //alignItems="center"
          //justifyContent="center"
        >
          {/* GÜNLÜK SAHA RANDEVU KAPASİTESİ */}
          <ACapacityBox
            title="GÜNLÜK SAHA RANDEVU KAPASİTESİ"
            subtitle="Bağcılar Spor Salonu"
            increase="%70"
          />
          
          <ACapacityChart isDashboard={true} />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          // justifyContent="center"
          flexDirection="column"
          pt={5}
          paddingLeft={2}
          paddingRight={2}
        >
          <Typography
            color={colors.grey[100]}
            variant="h5"
            fontWeight="600"
            textAlign="center"
            marginBottom={2}
          >
            Bağcılar Spor Sahası Memnuniyet Oranı
          </Typography>
          <Rating  name="disabled"  disabled />

        </Box>


        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          {/* AYLIK ALINAN RANDEVU CHARTI */}
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight="500"
                color={colors.grey[100]}
              >
                AYLIK RANDEVU TALEP TABLOSU
              </Typography>
              <Typography
                variant="h8"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Yıllık Toplam Randevu Sayısı: 2.111
              </Typography>
            </Box>
          </Box>
          <Box height="300px" m="-20px 0 0 0">
            <ALineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              YAKLAŞAN RANDEVULAR
            </Typography>
          </Box>
          {sortedReservations &&
            sortedReservations.map((reservation, i) => (
              <Box
                key={i}
                display="flex"
                justifyContent="space-between"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h6"
                    fontWeight="bold"
                  >
                    {reservation.pitchName}
                  </Typography>
                  {/* <Typography color={colors.grey[100]}>
                    {reservation.user}
                  </Typography> */}
                </Box>
                <Box color={colors.grey[100]} variant="h6">
                  {reservation.date}
                </Box>
                <Box color={colors.grey[100]} variant="h6">
                  {reservation.sessionTime}
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}
