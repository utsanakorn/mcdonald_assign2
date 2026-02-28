import { Stack } from "expo-router";
import { useTheme } from "../../context/ThemeContext";

export default function MoreLayout() {
  const { theme } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: theme.headerBg },
        headerTintColor: "#FFC72C",
        headerTitleStyle: { color: theme.text, fontWeight: "700" },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Log In" }} />
    </Stack>
  );
}
