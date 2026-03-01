import { Image, StyleSheet, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function McHeader() {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.wrap,
        { backgroundColor: theme.headerBg, borderBottomColor: theme.navBorder },
      ]}
    >
      <View style={styles.inner}>
        <Image
          source={require("../assets/images/McDonald.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 88,
    justifyContent: "flex-end",
    borderBottomWidth: 1,
  },
  inner: {
    height: 60,
    paddingHorizontal: 16,
    justifyContent: "center", //mcdonalds logo looks weird if not centered. Keep it this way pls
    alignItems: "center",
    paddingBottom: 16,
  },
  logo: {
    width: 90,
    height: 34,
    resizeMode: "contain",
  },
});
