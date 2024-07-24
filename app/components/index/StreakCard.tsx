import { Check } from "@tamagui/lucide-icons";
import { Button, Card, H2, Text, useTheme, XStack } from "tamagui";

export interface StreakCardProps {
  name: string;
  iconEmoji: string;
  streak: number;
  completed: boolean;
}

export function StreakCard(props: StreakCardProps) {
  const theme = useTheme();

  return (
    <Card elevate px="$1" py="$1" bordered>
      <Card.Header>
        <XStack gap="$3">
          <H2 fos="$8">{props.iconEmoji}</H2>
          <H2 fos="$8">{props.name}</H2>
        </XStack>
        <Text fos="$5" color={theme.orange11} fow="700">
          {props.streak} days completed
        </Text>
      </Card.Header>
      <Card.Footer padded>
        <XStack gap="$3" jc="center">
          <Button circular bg={theme.green11} icon={<Check size="$2" />} />
        </XStack>
      </Card.Footer>
    </Card>
  );
}
