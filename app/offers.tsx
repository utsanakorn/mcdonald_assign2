import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Offers() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Offers Page</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View fake offers</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: { backgroundColor: "#FFC72C", padding: 12, borderRadius: 8 },
  buttonText: { color: "#000", fontWeight: "600" },
});