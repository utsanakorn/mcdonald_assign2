import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import McHeader from "../components/McHeader";
import { useTheme } from "../context/ThemeContext";

export default function Order() {
  const { theme, isDark } = useTheme();

  return (
    <View style={[styles.screen, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      <McHeader />

      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>Order Page</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#FFC72C",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
  },

  buttonText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
  },
});
