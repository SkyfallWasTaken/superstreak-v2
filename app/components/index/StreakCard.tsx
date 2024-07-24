import { Check } from "@tamagui/lucide-icons";
import { Button, Card, H2, Separator, Text, useTheme, XStack } from "tamagui";

export interface StreakCardProps {
  name: string;
  iconEmoji: string;
  description: string | null;
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
