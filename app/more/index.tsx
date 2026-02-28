import { useRouter } from "expo-router";
import React from "react";
import { Image, StatusBar, StyleSheet, Switch, Text, View } from "react-native";
import MoreMenuItem from "../../components/MoreMenuItem";
import { useTheme } from "../../context/ThemeContext";

const MENU_ITEMS = [
  { icon: "person-outline" as const,             label: "Log In",                      route: "login" },
  { icon: "time-outline" as const,               label: "Recent Orders & Favourites",  route: null },
  { icon: "receipt-outline" as const,            label: "Add Points from Receipt",     route: null },
  { icon: "location-outline" as const,           label: "Locations",                   route: null },
  { icon: "nutrition-outline" as const,          label: "Nutrition",                   route: null },
  { icon: "help-circle-outline" as const,        label: "Frequently Asked Questions",  route: null },
  { icon: "briefcase-outline" as const,          label: "Careers at McDonald's",       route: null },
  { icon: "information-circle-outline" as const, label: "About, Contact & Legal",      route: null },
];

export default function MoreScreen() {
  const { theme, isDark, toggleTheme } = useTheme();
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.headerBg, borderBottomColor: theme.navBorder }]}>
        <Image source={require("../../assets/images/McDonald.png")} style={styles.logo} />
      </View>

      

      {/* Menu List */}
      <View style={[styles.menuBlock, { backgroundColor: theme.card }]}>
        {MENU_ITEMS.map((item, index) => (
          <MoreMenuItem
            key={item.label}
            iconName={item.icon}
            label={item.label}
            isLast={index === MENU_ITEMS.length - 1}
            onPress={() => {
              if (item.route) router.push(`/more/${item.route}` as any);
            }}
          />
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: StatusBar.currentHeight },
  header: { height: 70, justifyContent: "center", alignItems: "center", borderBottomWidth: 1, paddingTop: 10 },
  logo: { width: 50, height: 40, resizeMode: "contain" },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginTop: 12,
    borderBottomWidth: 1,
  },
  toggleLabel: { fontSize: 16, fontWeight: "600" },
  menuBlock: { marginTop: 12 },
  version: { textAlign: "center", fontSize: 12, marginTop: 24 },
});
