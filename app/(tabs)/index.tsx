import { ExternalLink } from "@tamagui/lucide-icons";
import { Anchor, Button, H2, Paragraph, Text, XStack, YStack } from "tamagui";
import { StreakCard } from "app/components/index/StreakCard";

export default function TabOneScreen() {
  return (
    <YStack f={1} ai="center" gap="$8" px="$10" pt="$5">
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

      <StreakCard name="Do the dishes" iconEmoji="🍽️" streak={3} completed={false} />

      <XStack
        ai="center"
        jc="center"
        fw="wrap"
        gap="$1.5"
        pos="absolute"
        b="$8"
      >
        <Paragraph fos="$5">Add</Paragraph>

        <Paragraph fos="$5" px="$2" py="$1" col="$blue10" bg="$blue5" br="$3">
          tamagui.config.ts
        </Paragraph>

        <Paragraph fos="$5">to root and follow the</Paragraph>

        <XStack
          ai="center"
          gap="$1.5"
          px="$2"
          py="$1"
          br="$3"
          bg="$purple5"
          hoverStyle={{ bg: "$purple6" }}
          pressStyle={{ bg: "$purple4" }}
        >
          <Anchor
            href="https://tamagui.dev/docs/core/configuration"
            textDecorationLine="none"
            col="$purple10"
            fos="$5"
          >
            Configuration guide
          </Anchor>
          <ExternalLink size="$1" col="$purple10" />
        </XStack>

        <Paragraph fos="$5" ta="center">
          to configure your themes and tokens.
        </Paragraph>
      </XStack>
    </YStack>
  );
}
