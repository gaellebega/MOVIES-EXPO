import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function HeroBanner() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/movies/blade-runner.png")}
        style={styles.image}
      />

      <LinearGradient
        colors={["transparent", "rgba(17,17,17,.35)", "#111111"]}
        style={styles.overlay}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Blade Runner 2049</Text>

        <Text style={styles.cast}>
          RYAN GOSLING • HARRISON FORD
        </Text>

        <View style={styles.meta}>
          <View style={styles.pill}>
            <Ionicons name="star" color="black" size={12} />
            <Text style={styles.pillText}>4.8</Text>
          </View>

          <View style={styles.pill}>
            <Text style={styles.pillText}>R</Text>
          </View>

          <Text style={styles.metaText}>2017</Text>
          <Text style={styles.metaText}>164m</Text>
          <Text style={styles.metaText}>Sci-fi</Text>
          <Text style={styles.metaText}>Action</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Watch Now</Text>
        </TouchableOpacity>

        <View style={styles.dots}>
          <View style={[styles.dot, styles.active]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 470,
    marginTop: 18,
    marginHorizontal: 4,
    borderRadius: 30,
    overflow: "hidden",
    position: "relative",
  },

  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 22,
  },

  title: {
    color: "white",
    fontSize: 19,
    fontWeight: "700",
  },

  cast: {
    color: "#D3D3D3",
    fontSize: 8,
    letterSpacing: 2,
    marginTop: 4,
  },

  meta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  pill: {
    backgroundColor: "white",
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginRight: 6,
  },

  pillText: {
    color: "black",
    fontWeight: "700",
    fontSize: 12,
    marginLeft: 3,
  },

  metaText: {
    color: "white",
    fontSize: 12,
    marginRight: 8,
  },

  button: {
    backgroundColor: "#ff1a1a",
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginTop: 16,
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
  },

  dots: {
    flexDirection: "row",
    marginTop: 18,
  },

  dot: {
    width: 18,
    height: 2,
    backgroundColor: "white",
    opacity: .4,
    marginHorizontal: 5,
  },

  active: {
    backgroundColor: "#ff1a1a",
    opacity: 1,
  },
});