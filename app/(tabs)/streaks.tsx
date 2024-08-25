import { Button, H2, ScrollView, YStack, View, Text } from "tamagui";
import { StreakCard } from "app/components/index/StreakCard";
import { FlashList } from "@shopify/flash-list";
import { useStreaksStore } from "app/streaks";
import { useRouter } from "expo-router";

const Separator = () => <View style={{ height: 16 }} />; // Adjust height as needed

export default function StreaksScreen() {
  // const media = useMedia();
  // const isMobile = media.sm;
  const streaks = useStreaksStore((state) => state.streaks);

  const router = useRouter();
  const flashList = (
    <FlashList
      data={streaks}
      renderItem={({ item }) => <StreakCard {...item} key={item.id} />}
      estimatedItemSize={174}
      ItemSeparatorComponent={Separator}
    />
  );

  return (
    <YStack jc="center" gap="$8" py="$5" px="$5">
      {streaks.length !== 0 ? (
        <ScrollView gap="$4">{flashList}</ScrollView>
      ) : (
        <View>
          <H2>No streaks... yet</H2>
          <Text>Do something awesome!</Text>
          <Button mt="$4" onPress={() => router.navigate("/newStreak")}>
            Add a new streak
          </Button>
        </View>
      )}
    </YStack>
  );
}
