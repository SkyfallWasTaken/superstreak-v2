import { Button, H2, ScrollView, useMedia, XStack, YStack } from "tamagui";
import { StreakCard } from "app/components/index/StreakCard";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import { useStreaksStore } from "app/streaks";

const Separator = () => <View style={{ height: 16 }} />; // Adjust height as needed

export default function StreaksScreen() {
  const media = useMedia();
  const isMobile = media.sm;
  const streaks = useStreaksStore((state) => state.streaks);

  const streakCards = streaks.map((streak) => (
    <StreakCard {...streak} key={streak.id} />
  ));

  return (
    <YStack jc="center" gap="$8" py="$5" px="$5">
      {isMobile ? (
        <ScrollView gap="$4">
          <FlashList
            data={streaks}
            renderItem={({ item }) => <StreakCard {...item} key={item.id} />}
            estimatedItemSize={174}
            ItemSeparatorComponent={Separator}
          />
        </ScrollView>
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
