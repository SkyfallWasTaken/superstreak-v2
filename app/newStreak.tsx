import { useState } from "react";
import {
  Anchor,
  Button,
  Input,
  Label,
  Paragraph,
  Stack,
  View,
  XStack,
  YStack,
} from "tamagui";

export default function ModalScreen() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form data:", formData);
  };

  return (
    <YStack gap="$4" padding="$4">
      <Stack gap="$3">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={(text) => handleChange("name", text)}
        />
      </Stack>

      <Stack gap="$3">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
          keyboardType="email-address"
        />
      </Stack>

      <Stack gap="$3">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="Enter your password"
          value={formData.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
        />
      </Stack>

      <Button
        onPress={handleSubmit}
        bg="$primary"
        hoverStyle={{ bg: "$primaryHover" }}
      >
        Submit
      </Button>
    </YStack>
  );
}
