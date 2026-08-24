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
    title: "Dune: Part Two",
    image:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    duration: "166 min",
    rating: "PG-13",
    times: ["11:15", "14:15", "17:15"],
  },
  {
    title: "Top Gun: Maverick",
    image:
      "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    duration: "130 min",
    rating: "PG-13",
    times: ["11:15", "15:00", "19:00"],
  },
  {
    title: "Oppenheimer",
    image:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    duration: "180 min",
    rating: "R",
    times: ["12:00", "16:00", "20:00"],
  },
  {
    title: "The Batman",
    image:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    duration: "176 min",
    rating: "PG-13",
    times: ["13:00", "17:30", "21:00"],
  },
  {
    title: "Spider-Man",
    image:
      "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    duration: "148 min",
    rating: "PG-13",
    times: ["11:30", "15:30", "19:30"],
  },
  {
    title: "Interstellar",
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    duration: "169 min",
    rating: "PG-13",
    times: ["12:30", "16:30", "20:30"],
  },
];

/* =========================
   COMING SOON MOVIES
========================= */

const comingSoon = [
  {
    title: "Asteroid City",
    image:
      "https://image.tmdb.org/t/p/w500/qdPdVJurtHhZ2RWWaYpdEwrcDq8.jpg",
  },
  {
    title: "Her",
    image:
      "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
  },
  {
    title: "Avatar",
    image:
      "https://image.tmdb.org/t/p/w500/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
  },
  {
    title: "The Fall Guy",
    image:
      "https://image.tmdb.org/t/p/w500/tSz1qsmSJon0rqjHBxXZmrotuse.jpg",
  },
  {
    title: "Furiosa",
    image:
      "https://image.tmdb.org/t/p/w500/h7m7e0L6O1bZ0wWm7kY2j0g9V8H.jpg",
  },
  {
    title: "Inside Out 2",
    image:
      "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
  },
];



export default function MovieHome() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ================= HEADER ================= */}

        <View style={styles.header}>
          <Text style={styles.logo}>
            Movie
            <Text style={styles.logoRed}>zone</Text>
          </Text>

          <TouchableOpacity>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>

        {/* ================= HERO ================= */}

        <View style={styles.hero}>
          <ImageBackground
            source={{
              uri: "https://image.tmdb.org/t/p/w780/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
            }}
            style={styles.heroImage}
            imageStyle={styles.heroImageRadius}
          >
            <View style={styles.heroOverlay} />

            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>
                Blade Runner 2049
              </Text>

              <Text style={styles.cast}>
                RYAN GOSLING • HARRISON FORD
              </Text>

              <View style={styles.meta}>
                <View style={styles.whitePill}>
                  <Ionicons
                    name="star"
                    size={12}
                    color="black"
                  />

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
                <Text style={styles.watchText}>
                  Watch Now
                </Text>
              </TouchableOpacity>

              <View style={styles.dots}>
                <View
                  style={[styles.dot, styles.activeDot]}
                />
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* ================= NOW PLAYING ================= */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Now Playing
          </Text>

          <Text style={styles.sectionSubtitle}>
            Playing in theaters now
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalContent}
          >
            {nowPlaying.map((movie, index) => (
              <View
                key={index}
                style={styles.card}
              >
                <View style={styles.posterContainer}>
                  <Image
                    source={{ uri: movie.image }}
                    style={styles.poster}
                  />

                  {/* Favorite */}
                  <TouchableOpacity
                    style={styles.heart}
                    activeOpacity={0.8}
                  >
                    <Ionicons
                      name="heart-outline"
                      size={21}
                      color="white"
                    />
                  </TouchableOpacity>

                  {/* Showtime */}
                  <View style={styles.timeRow}>
                    {movie.times.map((time) => (
                      <View
                        key={time}
                        style={styles.timeBadge}
                      >
                        <Text style={styles.timeText}>
                          {time}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>

                <View style={styles.infoRow}>
                  <Text style={styles.small}>
                    {movie.duration}
                  </Text>

                  <Text style={styles.small}>
                    {movie.rating}
                  </Text>
                </View>

                <Text
                  style={styles.movieTitle}
                  numberOfLines={1}
                >
                  {movie.title}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* ================= COMING SOON ================= */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Coming Soon
          </Text>

          <Text style={styles.sectionSubtitle}>
            Movies on their way to the big screen
          </Text>

          {/* Filters */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterContent}
          >
            <TouchableOpacity style={styles.yearChip}>
              <Text style={styles.yearText}>
                2026
              </Text>

              <Ionicons
                name="chevron-down"
                size={14}
                color="black"
              />
            </TouchableOpacity>

            {[
              "All",
              "January",
              "February",
              "March",
              "April",
              "May",
            ].map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.tab}
              >
                <Text style={styles.tabText}>
                  {item}
                </Text>

                {item === "All" && (
                  <View style={styles.tabLine} />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Coming Soon Cards */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalContent}
          >
            {comingSoon.map((movie, index) => (
              <View
                key={index}
                style={styles.card}
              >
                <View style={styles.posterContainer}>
                  <Image
                    source={{ uri: movie.image }}
                    style={styles.poster}
                  />

                  <TouchableOpacity
                    style={styles.heart}
                    activeOpacity={0.8}
                  >
                    <Ionicons
                      name="heart-outline"
                      size={21}
                      color="white"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.bookBtn}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.bookText}>
                      Book Now
                    </Text>
                  </TouchableOpacity>
                </View>

                <Text
                  style={styles.movieTitle}
                  numberOfLines={1}
                >
                  {movie.title}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Bottom spacing */}
        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* ================= BOTTOM NAV ================= */}

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="home"
            size={26}
            color="#ff1d1d"
          />

          <Text style={styles.activeNavText}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="search-outline"
            size={26}
            color="white"
          />

          <Text style={styles.navText}>
            Search
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="heart-outline"
            size={26}
            color="white"
          />

          <Text style={styles.navText}>
            Favorites
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="person-outline"
            size={26}
            color="white"
          />

          <Text style={styles.navText}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/* =========================
   STYLES
========================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },

  scrollContent: {
    paddingBottom: 90,
  },

  /* Header */

  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.5,
  },

  logoRed: {
    color: "#ff1d1d",
  },

  /* Hero */

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

  heroImageRadius: {
    borderRadius: 28,
  },

  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.40)",
  },

  heroContent: {
    alignItems: "center",
    paddingHorizontal: 18,
    paddingBottom: 22,
  },

  heroTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },

  cast: {
    color: "#d5d5d5",
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 5,
    textAlign: "center",
  },

  meta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 12,
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
    borderRadius: 10,
    paddingHorizontal: 28,
    paddingVertical: 11,
    marginTop: 16,
  },

  watchText: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
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

  /* Sections */

  section: {
    marginTop: 30,
    paddingLeft: 20,
  },

  sectionTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "800",
  },

  sectionSubtitle: {
    color: "#999999",
    fontSize: 13,
    marginTop: 5,
    marginBottom: 17,
  },

  horizontalContent: {
    paddingRight: 20,
  },

  /* Movie Cards */

  card: {
    width: 170,
    marginRight: 15,
  },

  posterContainer: {
    position: "relative",
  },

  poster: {
    width: 170,
    height: 255,
    borderRadius: 15,
    backgroundColor: "#222222",
  },

  heart: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: 9,
  },

  small: {
    color: "#999999",
    fontSize: 11,
  },

  movieTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 7,
  },

  /* Coming Soon Filters */

  filterContent: {
    paddingRight: 20,
    paddingBottom: 17,
  },

  yearChip: {
    backgroundColor: "white",
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    paddingVertical: 8,
    marginRight: 18,
  },

  yearText: {
    color: "black",
    fontWeight: "600",
    marginRight: 4,
    fontSize: 12,
  },

  tab: {
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 32,
  },

  tabText: {
    color: "white",
    fontSize: 13,
  },

  tabLine: {
    width: 32,
    height: 2,
    backgroundColor: "#ff1d1d",
    marginTop: 7,
    borderRadius: 2,
  },

  /* Book Button */

  bookBtn: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    backgroundColor: "#ff1d1d",
    borderRadius: 9,
    paddingHorizontal: 20,
    paddingVertical: 9,
  },

  bookText: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
  },

  /* Bottom Navigation */

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 76,
    backgroundColor: "#111111",
    borderTopWidth: 0.5,
    borderTopColor: "#292929",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 60,
  },

  navText: {
    color: "#777777",
    fontSize: 10,
    marginTop: 4,
  },

  activeNavText: {
    color: "#ff1d1d",
    fontSize: 10,
    marginTop: 4,
    fontWeight: "600",
  },

  bottomSpace: {
    height: 30,
  },
});