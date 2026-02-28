import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

interface Props {
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  onPress?: () => void;
  isLast?: boolean;
}

export default function MoreMenuItem({ iconName, label, onPress, isLast = false }: Props) {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.row,
        { backgroundColor: theme.card },
        !isLast && { borderBottomWidth: 1, borderBottomColor: theme.navBorder },
      ]}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <View style={[styles.iconBox, { backgroundColor: theme.background }]}>
        <Ionicons name={iconName} size={22} color={theme.text} />
      </View>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      <Ionicons name="chevron-forward" size={18} color={theme.subText} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  label: { flex: 1, fontSize: 16 },
});
