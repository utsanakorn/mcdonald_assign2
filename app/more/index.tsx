import { useRouter } from "expo-router";
import { StatusBar, StyleSheet, View } from "react-native";
import McHeader from "../../components/McHeader";
import MoreMenuItem from "../../components/MoreMenuItem";
import { useTheme } from "../../context/ThemeContext";

const MENU_ITEMS = [
  { icon: "person-outline" as const, label: "Log In", route: "login" },
  {
    icon: "time-outline" as const,
    label: "Recent Orders & Favourites",
    route: null,
  },
  {
    icon: "receipt-outline" as const,
    label: "Add Points from Receipt",
    route: null,
  },
  { icon: "location-outline" as const, label: "Locations", route: null },
  { icon: "nutrition-outline" as const, label: "Nutrition", route: null },
  {
    icon: "help-circle-outline" as const,
    label: "Frequently Asked Questions",
    route: null,
  },
  {
    icon: "briefcase-outline" as const,
    label: "Careers at McDonald's",
    route: null,
  },
  {
    icon: "information-circle-outline" as const,
    label: "About, Contact & Legal",
    route: null,
  },
];

export default function MoreScreen() {
  const { theme, isDark } = useTheme();
  const router = useRouter();

  return (
    <View style={[styles.screen, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* Shared header */}
      <McHeader />

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
  screen: { flex: 1 },

  menuBlock: {
    marginTop: 12,
  },
});
