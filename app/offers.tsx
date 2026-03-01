import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import McHeader from "../components/McHeader";

const MY_OFFERS = [
  {
    id: "fries",
    title: "FREE Fries",
    sub: "With any combo purchase",
    meta: "Expires in 2 days",
    image: require("../assets/images/fries.jpg"),
  },
  {
    id: "coffee",
    title: "$1 Coffee",
    sub: "Any size, limited time",
    meta: "Expires tonight",
    image: require("../assets/images/coffee.png"),
  },
  {
    id: "burger",
    title: "Get a free burger",
    sub: "With any burger purchase",
    meta: "Expires in 5 days",
    image: require("../assets/images/burger.png"),
  },
] as const;

export default function Offers() {
  return (
    <View style={styles.container}>
      <McHeader />

      <ScrollView contentContainerStyle={styles.content}>
        {/* My Rewards */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Rewards</Text>
          <Text style={styles.viewAll}>View all →</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.rewardItem}>
            <View style={styles.circle}>
              <Image
                source={require("../assets/images/coffee.png")}
                style={styles.rewardImage}
              />
            </View>
            <Text style={styles.rewardText}>Small Coffee</Text>
          </View>

          <View style={styles.rewardItem}>
            <View style={styles.circle}>
              <Image
                source={require("../assets/images/hashbrown.png")}
                style={styles.rewardImage}
              />
            </View>
            <Text style={styles.rewardText}>Hash Brown</Text>
          </View>

          <View style={styles.rewardItem}>
            <View style={styles.circle}>
              <Image
                source={require("../assets/images/capp.png")}
                style={styles.rewardImage}
              />
            </View>
            <Text style={styles.rewardText}>Cappuccino</Text>
          </View>
        </ScrollView>

        {/* More Rewards */}
        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
          More Rewards
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.moreRewardItem}>
            <View style={styles.moreCircle}>
              <Text style={styles.discount}>5%</Text>
            </View>
            <Text style={styles.moreRewardText}>
              5% discount on eligble hotels or accommodations
            </Text>
            <Text style={styles.pointsRequired}>2000 pts</Text>
          </View>

          <View style={styles.moreRewardItem}>
            <View style={styles.moreCircle}>
              <Text style={styles.discount}>7%</Text>
            </View>
            <Text style={styles.moreRewardText}>
              7% discount on eligble hotels or accommodations
            </Text>
            <Text style={styles.pointsRequired}>4000 pts</Text>
          </View>
        </ScrollView>

        {/* My Offers */}
        <Text style={[styles.sectionTitle, { marginTop: 30 }]}>My Offers</Text>

        <FlatList
          data={MY_OFFERS}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.offerCardNew}>
              <Image source={item.image} style={styles.offerImage} />
              <View style={styles.offerTextWrap}>
                <Text style={styles.offerTitle}>{item.title}</Text>
                <Text style={styles.offerSub}>{item.sub}</Text>
                <Text style={styles.offerMeta}>{item.meta}</Text>
              </View>
            </View>
          )}
        />

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  content: {
    padding: 16,
    paddingBottom: 24,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },

  viewAll: {
    color: "#007AFF",
    fontWeight: "600",
  },

  rewardItem: {
    marginRight: 20,
    alignItems: "center",
  },

  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#FFC72C",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#fff",
  },

  rewardImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  rewardText: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    maxWidth: 120,
  },

  moreRewardCard: {
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginRight: 16,
  },

  discount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d63384",
    marginBottom: 8,
  },

  moreRewardText: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: "center",
    maxWidth: 110,
  },

  pointsRequired: {
    fontSize: 13,
    fontWeight: "600",
    color: "#555",
  },

  offerGrid: {
    flexDirection: "row",
    gap: 12,
  },

  offerCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },

  offerText: {
    fontWeight: "700",
  },

  moreRewardItem: {
    alignItems: "center",
    marginRight: 20,
  },

  moreCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#FFC72C",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#fff",
  },

  offerCardNew: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 16,
    paddingTop: 12,
  },

  offerImage: {
    width: "100%",
    height: 140,
    resizeMode: "contain",
  },

  offerTextWrap: {
    padding: 14,
  },

  offerTitle: {
    fontSize: 18,
    fontWeight: 800,
  },

  offerSub: {
    marginTop: 6,
    fontSize: 14,
    opacity: 0.8,
  },

  offerMeta: {
    marginTop: 10,
    fontSize: 12,
    color: "#555",
    opacity: 0.8,
  },
});
