import { Check, Trash2 } from "@tamagui/lucide-icons";
import { useStreaksStore, type Streak } from "app/streaks";
import { Button, Card, H2, Separator, Text, useTheme, XStack } from "tamagui";
import DeleteConfirmSheet from "./DeleteConfirmSheet";
import { useState } from "react";
import { formatDateToMMDDYYYY } from "app/util";

export function StreakCard(props: Streak) {
  const theme = useTheme();
  const store = useStreaksStore();
  const [openDeleteSheet, setOpenDeleteSheet] = useState(false);

  const dates = useStreaksStore(
    (state) => state.streaks.find((s) => s.id === props.id)?.dates || []
  );

  return (
    <>
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
            <Button
              circular
              icon={<Trash2 size="$1.5" color="$gray8" />}
              bg="$colorTransparent"
              ml="auto"
              onPress={() => setOpenDeleteSheet(true)}
            />
          </XStack>
          <Text
            fos="$5"
            color={theme.orange11}
            mb={props.description && "$2"}
            fow="700"
          >
            {props.streak || "No"} days completed
          </Text>
          {props.description && <Text>{props.description}</Text>}
          <Separator mt={15} />
        </Card.Header>
        <Card.Footer px="$4" pb="$4">
          <XStack gap="$3" jc="center">
            <Button
              circular
              bg={theme.green11}
              disabled={
                dates[dates.length - 1] === formatDateToMMDDYYYY(new Date())
              }
              disabledStyle={{ bg: theme.gray3 }}
              icon={<Check size="$2" />}
              onPress={() =>
                store.updateStreak(props.id, {
                  streak: props.streak + 1,
                  dates: [...dates, formatDateToMMDDYYYY(new Date())],
                })
              }
            />
          </XStack>
        </Card.Footer>
      </Card>
      <DeleteConfirmSheet
        open={openDeleteSheet}
        onOpenChange={setOpenDeleteSheet}
        id={props.id}
      />
    </>
  );
}
