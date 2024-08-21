import { ExternalLink } from "@tamagui/lucide-icons";
import {
  Anchor,
  Button,
  H2,
  Paragraph,
  Text,
  useMedia,
  XStack,
  YStack,
} from "tamagui";
import { StreakCard } from "app/components/index/StreakCard";
import { FlashList } from "@shopify/flash-list";
import { FlatList, View } from "react-native";

const Separator = () => <View style={{ height: 16 }} />; // Adjust height as needed

export default function StreaksScreen() {
  const media = useMedia();
  const isMobile = media.sm;

  const streaks = [
    {
      name: "Do the dishes",
      iconEmoji: "🍽️",
      description: "Wash the dishes in the kitchen",
      streak: 3,
      completed: false,
      id: 0,
    },
    {
      name: "Do the dishes",
      iconEmoji: "🍽️",
      description: "Wash the dishes in the kitchen",
      streak: 3,
      completed: false,
      id: 1,
    },
  ];
  const streakCards = streaks.map((streak) => (
    <StreakCard {...streak} key={streak.id} />
  ));
  //
  return (
    <YStack jc="center" gap="$8" pt="$6" px="$5">
      <H2>Tamagui + Expo</H2>

      <XStack gap="$3" jc="center">
        <Button
          onPress={() => {
            alert("Hello!");
          }}
        >
          Hello there
        </Button>
        <Button disabled o={0.5}>
          Hello there
        </Button>
      </XStack>

      {isMobile ? (
        <YStack gap="$4">
          <FlatList
            data={streaks}
            renderItem={({ item }) => <StreakCard {...item} key={item.id} />}
            ItemSeparatorComponent={Separator}
          />
        </YStack>
      ) : (
        <YStack gap="$4" padding="$4">
          <XStack gap="$4" flexWrap="wrap" justifyContent="space-between">
            {streakCards}
          </XStack>
        </YStack>
      )}
    </YStack>
  );
}
