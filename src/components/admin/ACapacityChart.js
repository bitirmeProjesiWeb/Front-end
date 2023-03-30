import { useData } from "../../context/Context";

import { ResponsivePie } from "@nivo/pie";

const ACapacityChart = ({
  isCustomLineColors = false,
  isDashboard = false,
}) => {
  const { aCapacityData } = useData();
  return (
    <ResponsivePie
      data={aCapacityData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      startAngle={-90}
      endAngle={90}
      innerRadius={0.5}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={2}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
    //   colors={{ scheme: 'blues' }}
      enableArcLinkLabels={false}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0}
      isInteractive={false}
    />
  );
};

export default ACapacityChart;
