import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";


import SeatManagement from "@/components/SeatSelection/SeatMap";

import TicketPurchase from "@/components/SeatSelection/TicketPurchaseCard";

import SeatLegend from "../components/SeatSelection/SeatLegend";

import styles from "../components/SeatSelection/SeatStyles";

export default function SeatSelectionScreen() {
  const [seats, setSeats] =
    useState<Record<string, SeatStatus>>({
      A1: "reserved",
      A2: "reserved",
      A3: "available",
      A4: "available",
      A5: "available",
      A6: "available",
      A7: "available",
      A8: "available",
      A9: "available",

      B1: "available",
      B2: "available",
      B3: "available",
      B4: "available",
      B5: "available",
      B6: "selected",
      B7: "selected",
      B8: "available",
      B9: "available",

      C1: "reserved",
      C2: "reserved",
      C3: "reserved",
      C4: "available",
      C5: "available",
      C6: "available",
      C7: "available",
      C8: "reserved",
      C9: "reserved",

      D1: "reserved",
      D2: "available",
      D3: "available",
      D4: "available",
      D5: "available",
      D6: "available",
      D7: "reserved",
      D8: "reserved",
      D9: "reserved",

      E1: "reserved",
      E2: "reserved",
      E3: "reserved",
      E4: "reserved",
      E5: "reserved",
      E6: "reserved",
      E7: "reserved",
      E8: "reserved",
      E9: "reserved",
    });

  const selectedSeats = Object.keys(seats).filter(
    (seat) => seats[seat] === "selected"
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}

        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={25}
              color="#FFFFFF"
            />
          </Pressable>

          <Text style={styles.headerTitle}>
            Choose your seat
          </Text>

          <View style={styles.headerSpace} />
        </View>

        {/* SCREEN */}

        <View style={styles.screenContainer}>
          <View style={styles.screen}>
            <Text style={styles.screenText}>
              Screen
            </Text>
          </View>
        </View>

        {/* SEAT MANAGEMENT */}

        <SeatManagement
          seats={seats}
          setSeats={setSeats}
        />

        {/* LEGEND */}

        <SeatLegend />

        {/* TICKET PURCHASE */}

        <TicketPurchase
          selectedSeats={selectedSeats}
        />

      </ScrollView>
    </SafeAreaView>
  );
}