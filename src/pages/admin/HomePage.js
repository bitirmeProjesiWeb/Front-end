import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
//import { mockTransactions } from "../../data/mockData";
import AHeader from "../../components/admin/AHeader";
import ALineChart from "../../components/admin/ALineChart";
// import BarChart from "../../components/BarChart";
import AProgressCircle from "../../components/admin/AProgressCircle";
import AStatBox from "../../components/admin/AStatBox";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid";
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
          alignItems="center"
          justifyContent="center"
        >
          {/* GÜNLÜK SAHA RANDEVU KAPASİTESİ */}
          <ACapacityBox title="asdasdasd" subtitle="sdfdsfsdf" />
          <ACapacityChart isDashboard={true} />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          SATICI PUANIM
          {/* <StatBox
          title="32,441"
          subtitle="New Clients"
          progress="0.30"
          increase="+5%"
          icon={
            <PersonAddIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        /> */}
        </Box>
        {/* <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      > */}
        {/* <StatBox
          title="1,325,134"
          subtitle="Traffic Received"
          progress="0.80"
          increase="+43%"
          icon={
            <TrafficIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        /> */}
        {/* </Box> */}

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
              Yaklaşan Randevular
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
                    variant="h5"
                    fontWeight="600"
                  >
                    {reservation.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {reservation.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{reservation.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${reservation.cost}
                </Box>
              </Box>
            ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            {/* <ProgressCircle size="125" /> */}
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            {/* <BarChart isDashboard={true} /> */}
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            {/* <GeographyChart isDashboard={true} /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
