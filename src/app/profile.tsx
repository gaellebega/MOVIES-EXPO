import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

type ProfilePageProps = {
  onBack?: () => void;
  onEdit?: () => void;
  onLogout?: () => void;
  onMenuPress?: (item: string) => void;
  onHome?: () => void;
  onSearch?: () => void;
  onProfile?: () => void;
};

export default function ProfilePage({
  onBack,
  onEdit,
  onLogout,
  onMenuPress,
  onHome,
  onSearch,
  onProfile,
}: ProfilePageProps) {
  const menuItems = [
    {
      title: "My Tickets",
      icon: "ticket-outline" as const,
    },
    {
      title: "Payment Methods",
      icon: "card-outline" as const,
    },
    {
      title: "Rewards & Coupons",
      icon: "gift-outline" as const,
    },
    {
      title: "Account Settings",
      icon: "settings-outline" as const,
    },
  ];

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "bottom"]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onBack}
          style={styles.headerButton}
        >
          <Ionicons
            name="arrow-back"
            size={27}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={onEdit}
            style={styles.headerButton}
          >
            <Ionicons
              name="create-outline"
              size={25}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onLogout}
            style={styles.headerButton}
          >
            <Ionicons
              name="log-out-outline"
              size={27}
              color="#FF1744"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile */}
        <View style={styles.profileSection}>
          <Image
            source={require("./profile.jpg")}
            style={styles.profileImage}
          />

          <Text style={styles.name}>
            Marybeth Walker
          </Text>

          <Text style={styles.email}>
            marybethwalker@gmail.com
          </Text>

          <Text style={styles.phone}>
            +268 00000000
          </Text>
        </View>

        {/* Menu */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={styles.menuItem}
              activeOpacity={0.7}
              onPress={() =>
                onMenuPress?.(item.title)
              }
            >
              <View style={styles.menuLeft}>
                <Ionicons
                  name={item.icon}
                  size={22}
                  color="#FFFFFF"
                />

                <Text style={styles.menuText}>
                  {item.title}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={21}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Extra space so last item isn't hidden */}
        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={onHome}
          style={styles.navButton}
        >
          <Ionicons
            name="home-outline"
            size={27}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onSearch}
          style={styles.navButton}
        >
          <Ionicons
            name="search-outline"
            size={29}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onProfile}
          style={styles.navButton}
        >
          <Ionicons
            name="person-outline"
            size={27}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },

  /* Header */
  header: {
    height: 64,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  headerButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  /* Scroll */
  scrollContent: {
    paddingBottom: 20,
  },

  /* Profile */
  profileSection: {
    alignItems: "center",
    marginTop: 30,
  },

  profileImage: {
    width: 104,
    height: 104,
    borderRadius: 52,
    marginBottom: 19,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "500",
    marginBottom: 13,
  },

  email: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 8,
  },

  phone: {
    color: "#FFFFFF",
    fontSize: 14,
  },

  /* Menu */
  menuContainer: {
    marginTop: 45,
    paddingHorizontal: 23,
    gap: 16,
  },

  menuItem: {
    height: 58,
    backgroundColor: "#29292F",
    borderRadius: 17,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  menuText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "400",
  },

  bottomSpace: {
    height: 90,
  },

  /* Bottom Navigation */
  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 78,
    backgroundColor: "#191919",
    borderTopWidth: 1,
    borderTopColor: "#1E1E1E",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 35,
  },

  navButton: {
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
});