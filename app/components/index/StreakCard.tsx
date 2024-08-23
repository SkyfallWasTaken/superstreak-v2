import { Check } from "@tamagui/lucide-icons";
import type { Streak } from "app/streaks";
import { Button, Card, H2, Separator, Text, useTheme, XStack } from "tamagui";

export function StreakCard(props: Streak) {
  const theme = useTheme();

  return (
    <Card
      elevate
      px="$1"
      py="$1"
      bordered
      animation="bouncy"
      hoverStyle={{ scale: 0.985 }}
      pressStyle={{ scale: 0.955 }}
      width="$full"
    >
      <Card.Header>
        <XStack gap="$3">
          <H2 fos="$8">{props.iconEmoji}</H2>
          <H2 fos="$8">{props.name}</H2>
        </XStack>
        <Text
          fos="$5"
          color={theme.orange11}
          mb={props.description && "$2"}
          fow="700"
        >
          {props.streak} days completed
        </Text>
        {props.description && <Text>{props.description}</Text>}
        <Separator mt={15} />
      </Card.Header>
      <Card.Footer px="$4" pb="$4">
        <XStack gap="$3" jc="center">
          <Button circular bg={theme.green11} icon={<Check size="$2" />} />
        </XStack>
      </Card.Footer>
    </Card>
  );
}
