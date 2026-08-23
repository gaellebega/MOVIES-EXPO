import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const nowPlaying = [
  {
    title: "Dune",
    image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    duration: "155 min",
    rating: "PG-13",
    times: ["11:15", "14:15", "17:15"],
  },
  {
    title: "Top Gun",
    image: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    duration: "130 min",
    rating: "PG-13",
    times: ["11:15"],
  },
];

const comingSoon = [
  {
    title: "Asteroid City",
    image: "https://image.tmdb.org/t/p/w500/qdPdVJurtHhZ2RWWaYpdEwrcDq8.jpg",
  },
  {
    title: "Her",
    image: "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
  },
];

export default function MovieHome() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>
            Movie<Text style={{ color: "#ff1d1d" }}>zone</Text>
          </Text>

          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>

        {/* Hero Banner */}
        <View style={styles.hero}>
          <ImageBackground
            source={{
              uri: "https://image.tmdb.org/t/p/w780/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
            }}
            style={styles.heroImage}
            imageStyle={{ borderRadius: 28 }}
          >
            <View style={styles.heroOverlay} />

            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>Blade Runner 2049</Text>

              <Text style={styles.cast}>
                RYAN GOSLING • HARRISON FORD
              </Text>

              <View style={styles.meta}>
                <View style={styles.whitePill}>
                  <Ionicons name="star" size={12} color="black" />
                  <Text style={styles.pillText}>4.8</Text>
                </View>

                <View style={styles.whitePill}>
                  <Text style={styles.pillText}>R</Text>
                </View>

                <Text style={styles.metaText}>2017</Text>
                <Text style={styles.metaText}>164m</Text>
                <Text style={styles.metaText}>Sci-Fi</Text>
                <Text style={styles.metaText}>Action</Text>
              </View>

              <TouchableOpacity style={styles.watchBtn}>
                <Text style={styles.watchText}>Watch Now</Text>
              </TouchableOpacity>

              <View style={styles.dots}>
                <View style={[styles.dot, styles.activeDot]} />
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Now Playing */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Now Playing</Text>
          <Text style={styles.sectionSubtitle}>
            Playing in theaters now
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {nowPlaying.map((movie, index) => (
              <View key={index} style={styles.card}>
                <View style={{ position: "relative" }}>
                  <Image
                    source={{ uri: movie.image }}
                    style={styles.poster}
                  />

                  <TouchableOpacity style={styles.heart}>
                    <Ionicons
                      name="heart-outline"
                      size={22}
                      color="white"
                    />
                  </TouchableOpacity>

                  <View style={styles.timeRow}>
                    {movie.times.map((time) => (
                      <View key={time} style={styles.timeBadge}>
                        <Text style={styles.timeText}>{time}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                <View style={styles.infoRow}>
                  <Text style={styles.small}>{movie.duration}</Text>
                  <Text style={styles.small}>{movie.rating}</Text>
                </View>

                <Text style={styles.movieTitle}>{movie.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Coming Soon */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Coming Soon This Year</Text>
          <Text style={styles.sectionSubtitle}>
            Movies on their way to the big screen
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 20 }}
          >
            <View style={styles.yearChip}>
              <Text style={styles.yearText}>2023</Text>
              <Ionicons
                name="chevron-down"
                size={14}
                color="black"
              />
            </View>

            {["All", "January", "February", "March"].map((item) => (
              <View key={item} style={styles.tab}>
                <Text style={styles.tabText}>{item}</Text>
                {item === "January" && <View style={styles.tabLine} />}
              </View>
            ))}
          </ScrollView>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {comingSoon.map((movie, index) => (
              <View key={index} style={styles.card}>
                <View style={{ position: "relative" }}>
                  <Image
                    source={{ uri: movie.image }}
                    style={styles.poster}
                  />

                  <TouchableOpacity style={styles.bookBtn}>
                    <Text style={styles.bookText}>Book Now</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.movieTitle}>{movie.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={26} color="white" />
        <Ionicons name="search-outline" size={26} color="white" />
        <Ionicons name="heart-outline" size={26} color="white" />
        <Ionicons name="person-outline" size={26} color="white" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  hero: {
    marginHorizontal: 16,
    marginTop: 18,
    borderRadius: 28,
    overflow: "hidden",
    height: 470,
  },

  heroImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
heroOverlay: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.35)",
},

  heroContent: {
    alignItems: "center",
    paddingBottom: 22,
  },

  heroTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },

  cast: {
    color: "#d5d5d5",
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 4,
  },

  meta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  whitePill: {
    backgroundColor: "white",
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginRight: 6,
    marginBottom: 4,
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
    marginBottom: 4,
  },

  watchBtn: {
    backgroundColor: "#ff1d1d",
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginTop: 16,
  },

  watchText: {
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
    opacity: 0.4,
    marginHorizontal: 5,
  },

  activeDot: {
    backgroundColor: "#ff1d1d",
    opacity: 1,
  },

  section: {
    marginTop: 28,
    paddingLeft: 20,
  },

  sectionTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },

  sectionSubtitle: {
    color: "#bdbdbd",
    marginTop: 6,
    marginBottom: 16,
  },

  card: {
    width: 185,
    marginRight: 16,
  },

  poster: {
    width: 185,
    height: 280,
    borderRadius: 14,
  },

  heart: {
    position: "absolute",
    top: 12,
    right: 12,
  },

  timeRow: {
    position: "absolute",
    bottom: 8,
    left: 8,
    right: 8,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  timeBadge: {
    backgroundColor: "#ff1d1d",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginRight: 4,
    marginBottom: 4,
  },

  timeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "700",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  small: {
    color: "#bdbdbd",
    fontSize: 12,
  },

  movieTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 8,
  },

  yearChip: {
    backgroundColor: "white",
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 18,
  },

  yearText: {
    color: "black",
    marginRight: 4,
  },

  tab: {
    marginRight: 20,
    alignItems: "center",
  },

  tabText: {
    color: "white",
  },

  tabLine: {
    width: 40,
    height: 2,
    backgroundColor: "#ff1d1d",
    marginTop: 8,
  },

  bookBtn: {
    position: "absolute",
    bottom: -14,
    alignSelf: "center",
    backgroundColor: "#ff1d1d",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },

  bookText: {
    color: "white",
    fontWeight: "700",
  },

  bottomNav: {
    height: 70,
    backgroundColor: "#111",
    borderTopWidth: 0.5,
    borderTopColor: "#2a2a2a",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});