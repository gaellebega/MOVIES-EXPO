import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BottomNav() {
  return (
    <View style={styles.nav}>
      <Ionicons name="home-outline" color="white" size={26} />
      <Ionicons name="search-outline" color="white" size={26} />
      <Ionicons name="person-outline" color="white" size={26} />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    height: 72,
    backgroundColor: "#111",
    borderTopWidth: 0.5,
    borderTopColor: "#2A2A2A",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});