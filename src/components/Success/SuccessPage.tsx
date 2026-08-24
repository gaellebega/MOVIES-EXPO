import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

type SuccessPageProps = {
  onProceed?: () => void;
};

export default function SuccessPage({
  onProceed,
}: SuccessPageProps) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../app/bg.png")}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Black Hue */}
        <View style={styles.overlay} />

        <SafeAreaView
          style={styles.safeArea}
          edges={["top", "bottom"]}
        >
          {/* Top Bar */}
          <View style={styles.topBar}>
            <TouchableOpacity
              style={styles.backButton}
              activeOpacity={0.7}
              onPress={onProceed}
            >
              <Ionicons
                name="arrow-back"
                size={25}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            {/* Green Success Icon */}
            <View style={styles.successCircle}>
              <Ionicons
                name="checkmark"
                size={48}
                color="#FFFFFF"
              />
            </View>

            {/* Title */}
            <Text style={styles.title}>
              Success!
            </Text>

            {/* Description */}
            <Text style={styles.description}>
              Your account has been created{"\n"}
              successfully.
            </Text>

            {/* Continue Button */}
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={onProceed}
            >
              <Text style={styles.buttonText}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  /* Background */
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  /* Black Hue */
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },

  safeArea: {
    flex: 1,
  },

  /* Top Bar */
  topBar: {
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    alignItems: "center",
    justifyContent: "center",
  },

  /* Main Content */
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  /* Green Success Circle */
  successCircle: {
    width: 95,
    height: 95,
    borderRadius: 48,
    backgroundColor: "#22C55E",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },

  /* Success Title */
  title: {
    color: "#FFFFFF",
    fontSize: width < 360 ? 28 : 34,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },

  /* Description */
  description: {
    color: "#FFFFFF",
    fontSize: width < 360 ? 14 : 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 35,
    paddingHorizontal: 20,
  },

  /* Continue Button */
  button: {
    width: "100%",
    maxWidth: 400,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#191919",
    fontSize: 16,
    fontWeight: "600",
  },
});