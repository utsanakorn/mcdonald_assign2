import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native"; 
import { useRouter } from "expo-router";

export default function Order() {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/McDonald.png")}
          style={styles.logo}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollPadding}>
        <Text style={styles.labels}>Order</Text>

        <View style={styles.container}>
          <Text style={styles.labelstwo}>
            Order anytime, anywhere
          </Text>
          <Image
            source={require("../assets/images/fries.jpg")}
            style={styles.fries}
          />
        </View>

        <Text style={styles.menu}>Explore our Menu</Text>

        {/* 3. Updated Button: removed .tsx and used router.push */}
        <TouchableOpacity 
          style={styles.yellowCard} 
          onPress={() => router.push("/offers")} 
        >
          <View style={styles.cardContent}>
            <Image source={require("../assets/images/fries.jpg")} style={styles.cardImage} />
            <View style={styles.textSection}>
              <Text style={styles.blackTitle}>Rewards</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.yellowCard} onPress={() => alert('Offers Pressed!')}>
          <View style={styles.cardContent}>
            <Image
              source={require("../assets/images/burgers.jpg")}
              style={styles.cardImage}
            />
            <View style={styles.textSection}>
              <Text style={styles.blackTitle}>Burger</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.yellowCard} onPress={() => alert('Offers Pressed!')}>
          <View style={styles.cardContent}>
            <Image
              source={require("../assets/images/mcveggies.jpg")}
              style={styles.cardImage}
            />
            <View style={styles.textSection}>
              <Text style={styles.blackTitle}> McVeggie</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.yellowCard} onPress={() => alert('Offers Pressed!')}>
          <View style={styles.cardContent}>
            <Image
              source={require("../assets/images/wraps.jpg")}
              style={styles.cardImage}
            />
            <View style={styles.textSection}>
              <Text style={styles.blackTitle}>Wraps</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.yellowCard} onPress={() => alert('Offers Pressed!')}>
          <View style={styles.cardContent}>
            <Image
              source={require("../assets/images/drinks.jpg")}
              style={styles.cardImage}
            />
            <View style={styles.textSection}>
              <Text style={styles.blackTitle}>Drinks</Text>
            </View>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.yellowCard} onPress={() => alert('Offers Pressed!')}>
          <View style={styles.cardContent}>
            <Image
              source={require("../assets/images/happymeals.jpg")}
              style={styles.cardImage}
            />
            <View style={styles.textSection}>
              <Text style={styles.blackTitle}>Happy Meals</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  header: { paddingTop: 50, paddingBottom: 10, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#eee' },
  logo: { width: 50, height: 40, resizeMode: "contain" },
  scrollPadding: { paddingHorizontal: 20, paddingBottom: 40 },
  labels: { fontWeight: "bold", fontSize: 30, paddingVertical: 20, textAlign: 'center' },
  labelstwo: { fontSize: 30, fontWeight: "bold", flex: 1 },
  fries: { width: 100, height: 100 },
  container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  yellowCard: { backgroundColor: "#FFC72C", borderRadius: 12, marginBottom: 16 },
  cardContent: { flexDirection: "row", padding: 20, alignItems: "center" },
  textSection: { flex: 1 },
  blackTitle: { fontSize: 32, fontWeight: "bold", color: "#000" },
  cardImage: { width: 100, height: 80, borderRadius: 8, marginRight: 20 },
  menu: { paddingBottom: 15, fontSize: 18, fontWeight: '600' }
});