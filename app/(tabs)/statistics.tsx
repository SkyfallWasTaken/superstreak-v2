import {
  Text,
  View,
  Card,
  Paragraph,
  H2,
  XStack,
  Button,
  Image,
  H3,
  useTheme,
} from "tamagui";
import { ContributionGraph } from "react-native-chart-kit";

interface ContributionChartValue {
  date: string;
  count: number;
}

export default function StatisticsScreen() {
  const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 30 },
  ];
  const chartConfig = {
    backgroundGradientFrom: "transparent",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "transparent",
    backgroundGradientToOpacity: 0,

    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    barPercentage: 0.5,
  };

  const date = new Date();
  const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const handleToolTip: any = {}; // Hack to keep TS happy. See https://github.com/indiespirit/react-native-chart-kit/issues/468

  return (
    <View flex={1} gap="$5" py="$5" px="$5" ai="center">
      <Card elevate bordered width="100%">
        <Card.Header padded>
          <H2>Total streak</H2>
          <Paragraph theme="alt2" size="$6">
            4 days - Keep it up!
          </Paragraph>
        </Card.Header>
      </Card>
      <Card elevate bordered width="100%">
        <Card.Header padded>
          <View style={{ width: "100%", alignItems: "center" }}>
            <ContributionGraph
              values={commitsData}
              endDate={endDate}
              numDays={105}
              height={220}
              width={375}
              chartConfig={chartConfig}
              tooltipDataAttrs={(_value) => handleToolTip}
            />
          </View>
        </Card.Header>
      </Card>
    </View>
  );
}
