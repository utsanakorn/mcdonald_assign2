import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Order() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Page</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start a fake order</Text>
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