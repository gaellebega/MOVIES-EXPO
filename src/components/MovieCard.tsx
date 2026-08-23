import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  title: string;
  image: string;
  duration?: string;
  rating?: string;
  times?: string[];
  comingSoon?: boolean;
}

export default function MovieCard({
  title,
  image,
  duration,
  rating,
  times = [],
  comingSoon,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.posterContainer}>
        <Image source={{ uri: image }} style={styles.poster} />

        <TouchableOpacity style={styles.heart}>
          <Ionicons name="heart-outline" color="white" size={24} />
        </TouchableOpacity>

        {!comingSoon && (
          <View style={styles.times}>
            {times.map((time) => (
              <View key={time} style={styles.timeBadge}>
                <Text style={styles.timeText}>{time}</Text>
              </View>
            ))}
          </View>
        )}

        {comingSoon && (
          <TouchableOpacity style={styles.book}>
            <Text style={styles.bookText}>Book Now</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.info}>
        {!comingSoon && (
          <View style={styles.row}>
            <Text style={styles.duration}>{duration}</Text>
            <Text style={styles.duration}>{rating}</Text>
          </View>
        )}

        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 190,
    marginRight: 16,
  },

  posterContainer: {
    position: "relative",
  },

  poster: {
    width: 190,
    height: 285,
    borderRadius: 12,
  },

  heart: {
    position: "absolute",
    top: 12,
    right: 12,
  },

  times: {
    position: "absolute",
    bottom: 8,
    left: 8,
    right: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  timeBadge: {
    backgroundColor: "#ff1c1c",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  timeText: {
    color: "white",
    fontSize: 11,
    fontWeight: "700",
  },

  book: {
    position: "absolute",
    bottom: -15,
    alignSelf: "center",
    backgroundColor: "#ff1c1c",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 8,
  },

  bookText: {
    color: "white",
    fontWeight: "700",
  },

  info: {
    marginTop: 18,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  duration: {
    color: "#BEBEBE",
    fontSize: 12,
  },

  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    marginTop: 8,
  },
});