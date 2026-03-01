import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import McHeader from "../components/McHeader";
import { useTheme } from "../context/ThemeContext";

export default function Index() {
  const { theme, isDark } = useTheme();

  return (
    <View style={[styles.screen, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      <McHeader />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.menuTitle, { color: theme.text }]}>Menu</Text>

        {/* Main Card */}
        <View
          style={[
            styles.card,
            { backgroundColor: theme.card, borderColor: "#FFC72C" },
          ]}
        >
          <View style={styles.cardContent}>
            <View style={styles.textSection}>
              <Text style={[styles.cardTitle, { color: theme.text }]}>
                Hungry?
              </Text>

              <Text style={[styles.cardSubtitle, { color: theme.subText }]}>
                Let's fix that
              </Text>

              <TouchableOpacity style={styles.yellowButton}>
                <Text style={styles.yellowButtonText}>Start an order</Text>
              </TouchableOpacity>
            </View>

            <Image
              source={{
                uri: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
              }}
              style={styles.cardImage}
            />
          </View>
        </View>

        {/* My Offers */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          My Offers
        </Text>

        <View style={styles.yellowCard}>
          <View style={styles.cardContent}>
            <View style={styles.textSection}>
              <Text style={styles.blackTitle}>Daily deals</Text>

              <Text style={styles.blackSubtitle}>On everything you love</Text>

              <TouchableOpacity style={styles.whiteButton}>
                <Text style={styles.blackButtonText}>View offers</Text>
              </TouchableOpacity>
            </View>

            <Image
              source={require("../assets/images/fries.jpg")}
              style={styles.cardImage}
            />
          </View>
        </View>

        {/* What's New */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          What's new
        </Text>

        <View style={styles.darkCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800",
            }}
            style={styles.fullCardImage}
          />

          <View style={styles.darkCardContent}>
            <Text style={styles.whiteTitle}>Double Cheesy Melt</Text>

            <Text style={styles.whiteSubtitle}>
              Melt into warm, cheesy deliciousness.
            </Text>

            <TouchableOpacity style={styles.yellowButtonSmall}>
              <Text style={styles.yellowButtonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },

  menuTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 16,
  },

  card: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    borderWidth: 1,
  },

  yellowCard: {
    backgroundColor: "#FFC72C",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },

  darkCard: {
    backgroundColor: "#2C2C2C",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },

  cardContent: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },

  textSection: {
    flex: 1,
    paddingRight: 16,
  },

  cardTitle: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 8,
  },

  cardSubtitle: {
    fontSize: 18,
    marginBottom: 16,
  },

  blackTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },

  blackSubtitle: {
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
  },

  whiteTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },

  whiteSubtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 16,
  },

  yellowButton: {
    backgroundColor: "#FFC72C",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  yellowButtonSmall: {
    backgroundColor: "#FFC72C",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  whiteButton: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  yellowButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },

  blackButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },

  cardImage: {
    width: 140,
    height: 140,
    borderRadius: 8,
  },

  fullCardImage: {
    width: "100%",
    height: 200,
  },

  darkCardContent: {
    padding: 20,
  },
});
