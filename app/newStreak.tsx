import { Controller, useForm } from "react-hook-form";
import { Button, Input, Label, Stack, YStack } from "tamagui";
import { useRouter } from "expo-router";
import { useStreaksStore } from "app/streaks";
import { nanoid } from "nanoid";

type Inputs = {
  name: string;
  description: string;
};

export default function ModalScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>();
  const { addStreak } = useStreaksStore();
  const router = useRouter();

  function onSubmit(data: Inputs) {
    addStreak({
      ...data,
      id: nanoid(),
      iconEmoji: "🐶",
      streak: 0,
      completed: false,
      dates: [],
    });
    return router.replace("/(tabs)/streaks");
  }

  return (
    <YStack gap="$4" padding="$4">
      <Stack gap="$3">
        <Controller
          control={control}
          name="name"
          rules={{
            required: "Name is required",
          }}
          render={({ field: { value, onChange, onBlur } }) => (
            <YStack>
              <Label>Name</Label>
              <Input
                placeholder="Walk Max"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
              {errors.name && (
                <Label color="$red10">{errors.name.message}</Label>
              )}
            </YStack>
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({ field: { value, onChange, onBlur } }) => (
            <YStack>
              <Label>Description</Label>
              <Input
                placeholder="Walk Max around the park"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            </YStack>
          )}
        />
      </Stack>

      <Button
        onPress={handleSubmit(onSubmit)}
        bg="$primary"
        hoverStyle={{ bg: "$primaryHover" }}
        disabled={!isValid}
        disabledStyle={{ bg: "$gray8" }}
      >
        Submit
      </Button>
    </YStack>
  );
}
