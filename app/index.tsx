import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function Index() {
  const { theme, isDark } = useTheme();
  const router = useRouter();

  const alertNotification = () => {
    if (Platform.OS === "web") {
      window.alert("Alert button pressed");
    } else {
      Alert.alert("Alert button pressed");
    }
  };

  return (
    <View style={[style.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* Header */}
      <View style={[style.header, { backgroundColor: theme.headerBg, borderBottomColor: theme.navBorder }]}>
        <Image
          source={require("../assets/images/McDonald.png")}
          style={style.logo}
        />
      </View>

      <ScrollView style={style.content}>
        <Text style={[style.menuTitle, { color: theme.text }]}>Menu</Text>

        <View style={[style.card, { backgroundColor: theme.card, borderColor: "#FFC72C" }]}>
          <View style={style.cardContent}>
            <View style={style.textSection}>
              <Text style={[style.cardTitle, { color: theme.text }]}>Hungry?</Text>
              <Text style={[style.cardSubtitle, { color: theme.subText }]}>Let's fix that</Text>
              <TouchableOpacity style={style.yellowButton}>
                <Text style={style.yellowButtonText}>Start an order</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{ uri: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" }}
              style={style.cardImage}
            />
          </View>
        </View>

        <Text style={[style.sectionTitle, { color: theme.text }]}>My Offers</Text>
        <View style={style.yellowCard}>
          <View style={style.cardContent}>
            <View style={style.textSection}>
              <Text style={style.blackTitle}>Daily deals</Text>
              <Text style={style.blackSubtitle}>On everything you love</Text>
              <TouchableOpacity style={style.whiteButton}>
                <Text style={style.blackButtonText}>View offers</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require("../assets/images/fries.jpg")}
              style={style.cardImage}
            />
          </View>
        </View>

        <Text style={[style.sectionTitle, { color: theme.text }]}>What's new</Text>
        <View style={style.darkCard}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800" }}
            style={style.fullCardImage}
          />
          <View style={style.darkCardContent}>
            <Text style={style.whiteTitle}>Double Cheesy Melt</Text>
            <Text style={style.whiteSubtitle}>Melt into warm, cheesy deliciousness.</Text>
            <TouchableOpacity style={style.yellowButtonSmall}>
              <Text style={style.yellowButtonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={style.alertButton} onPress={alertNotification}>
          <Text style={style.alertButtonText}>Alert</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>

     
    </View>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, paddingTop: StatusBar.currentHeight },
  header: { height: 80, justifyContent: "center", alignItems: "center", borderBottomWidth: 1, paddingTop: 20 },
  logo: { width: 50, height: 40, resizeMode: "contain" },
  content: { flex: 1, paddingHorizontal: 16 },
  menuTitle: { fontSize: 32, fontWeight: "bold", marginTop: 20, marginBottom: 16 },
  sectionTitle: { fontSize: 28, fontWeight: "bold", marginTop: 24, marginBottom: 16 },
  card: { borderRadius: 12, overflow: "hidden", marginBottom: 16, elevation: 2, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, borderWidth: 1 },
  yellowCard: { backgroundColor: "#FFC72C", borderRadius: 12, overflow: "hidden", marginBottom: 16, elevation: 2, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  darkCard: { backgroundColor: "#2C2C2C", borderRadius: 12, overflow: "hidden", marginBottom: 16, elevation: 2, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  cardContent: { flexDirection: "row", padding: 20, alignItems: "center" },
  textSection: { flex: 1, paddingRight: 16 },
  cardTitle: { fontSize: 36, fontWeight: "bold", marginBottom: 8 },
  cardSubtitle: { fontSize: 18, marginBottom: 16 },
  blackTitle: { fontSize: 32, fontWeight: "bold", color: "#000", marginBottom: 8 },
  blackSubtitle: { fontSize: 16, color: "#000", marginBottom: 16 },
  whiteTitle: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 8 },
  whiteSubtitle: { fontSize: 16, color: "#fff", marginBottom: 16 },
  yellowButton: { backgroundColor: "#FFC72C", paddingVertical: 14, paddingHorizontal: 24, borderRadius: 8, alignSelf: "flex-start" },
  yellowButtonSmall: { backgroundColor: "#FFC72C", paddingVertical: 12, paddingHorizontal: 32, borderRadius: 8, alignSelf: "flex-start" },
  whiteButton: { backgroundColor: "#fff", paddingVertical: 14, paddingHorizontal: 24, borderRadius: 8, alignSelf: "flex-start" },
  yellowButtonText: { color: "#000", fontSize: 16, fontWeight: "600" },
  blackButtonText: { color: "#000", fontSize: 16, fontWeight: "600" },
  cardImage: { width: 140, height: 140, borderRadius: 8 },
  fullCardImage: { width: "100%", height: 200 },
  darkCardContent: { padding: 20 },
  alertButton: { backgroundColor: "#FFCC00", marginTop: 20, marginBottom: 20, paddingVertical: 12, borderRadius: 8, alignItems: "center" },
  alertButtonText: { fontSize: 16, fontWeight: "600", color: "#000" },
  bottomNav: { flexDirection: "row", height: 70, borderTopWidth: 1, paddingBottom: 10 },
  navItem: { flex: 1, justifyContent: "center", alignItems: "center" },
  navText: { fontSize: 10 },
});
