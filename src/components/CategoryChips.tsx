import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const tabs = ["All", "January", "February", "March"];

export default function CategoryTabs() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.year}>
        <Text style={styles.yearText}>2023</Text>
        <Ionicons name="chevron-down" size={16} color="black" />
      </TouchableOpacity>

      {tabs.map((tab) => (
        <TouchableOpacity key={tab} style={styles.tab}>
          <Text
            style={[styles.text, tab === "January" && styles.activeText]}
          >
            {tab}
          </Text>

          {tab === "January" && <View style={styles.line} />}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  year: {
    backgroundColor: "white",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },

  yearText: {
    color: "black",
    marginRight: 4,
  },

  tab: {
    marginRight: 22,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
  },

  activeText: {
    color: "white",
  },

  line: {
    marginTop: 8,
    width: 42,
    height: 2,
    backgroundColor: "#ff1c1c",
  },
});