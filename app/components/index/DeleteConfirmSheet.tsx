import { Sheet, type SheetProps } from "tamagui";
import { useStreaksStore } from "app/streaks";
import { Button, H2, Text, Paragraph, YStack } from "tamagui";

export default function (props: SheetProps & { id: string }) {
  const { removeStreak } = useStreaksStore();

  return (
    <Sheet
      animation="medium"
      modal
      snapPoints={[40]}
      dismissOnSnapToBottom
      {...props}
    >
      <Sheet.Overlay
        animation="medium"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />

      <Sheet.Handle />
      <Sheet.Frame
        flex={1}
        justifyContent="center"
        alignItems="center"
        gap="$5"
      >
        <Sheet.ScrollView>
          <YStack p="$5" gap="$4">
            <H2>Danger, Robinson!</H2>
            <Paragraph size="$6">
              This will permanently delete the streak and its progress.{" "}
              <Text fontWeight="bold">Are you sure</Text> you want to continue?
            </Paragraph>
            <Button
              bg="$red10"
              onPress={() => {
                removeStreak(props.id);
                props.onOpenChange?.(false);
              }}
            >
              Yes, delete this streak
            </Button>
            <Button
              onPress={() => {
                props.onOpenChange?.(false);
              }}
            >
              Cancel deletion
            </Button>
          </YStack>
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
}
