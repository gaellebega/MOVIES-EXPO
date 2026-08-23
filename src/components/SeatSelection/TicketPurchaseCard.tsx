import React from "react";
import {
  Alert,
  Pressable,
  Text,
  View,
} from "react-native";

import {
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

import styles from "./SeatStyles";

type TicketPurchaseProps = {
  selectedSeats: string[];
};

export default function TicketPurchase({
  selectedSeats,
}: TicketPurchaseProps) {
  const ticketPrice = 50;

  const total =
    selectedSeats.length * ticketPrice;

  const handlePayment = () => {
    if (selectedSeats.length === 0) {
      Alert.alert(
        "No seats selected",
        "Please select at least one seat."
      );

      return;
    }

    Alert.alert(
      "Payment",
      `Seats: ${selectedSeats.join(
        ", "
      )}\nTotal: E${total.toFixed(2)}`
    );
  };

  return (
    <View style={styles.purchaseCard}>

      {/* MOVIEZONE */}

      <Text style={styles.movieZone}>
        Movie
        <Text style={styles.movieZoneRed}>
          zone
        </Text>
      </Text>

      <Text style={styles.ticketPurchase}>
        Ticket Purchase
      </Text>

      {/* LOCATION */}

      <View style={styles.locationRow}>
        <Ionicons
          name="location-outline"
          size={23}
          color="#FFFFFF"
        />

        <Text style={styles.locationText}>
          Gables Eswatini
        </Text>
      </View>

      {/* DATE / TIME / SEATS */}

      <View style={styles.bookingInfo}>

        {/* DATE */}

        <View style={styles.dateSection}>
          <Text style={styles.infoLabel}>
            Date
          </Text>

          <Text style={styles.dateText}>
            Oct 6, Friday
          </Text>
        </View>

        {/* DIVIDER */}

        <View style={styles.verticalLine} />

        {/* TIME */}

        <View style={styles.infoBox}>
          <Text style={styles.infoBoxLabel}>
            Time
          </Text>

          <Text style={styles.infoBoxValue}>
            20:15
          </Text>
        </View>

        {/* SEATS */}

        <View style={styles.infoBox}>
          <Text style={styles.infoBoxLabel}>
            Seats
          </Text>

          <Text
            style={styles.selectedSeatsText}
            numberOfLines={1}
          >
            {selectedSeats.length > 0
              ? selectedSeats.join(", ")
              : "--"}
          </Text>
        </View>

      </View>

      {/* DIVIDER */}

      <View style={styles.divider} />

      {/* MOVIE TICKET */}

      <View style={styles.priceRow}>

        <Text
          style={[
            styles.priceText,
            styles.movieTicketName,
          ]}
        >
          Movie Ticket
        </Text>

        <Text style={styles.priceText}>
          50.00
        </Text>

        <Text style={styles.priceText}>
          {selectedSeats.length}
        </Text>

        <Text style={styles.priceText}>
          E{total.toFixed(2)}
        </Text>

      </View>

      {/* 3D GLASSES */}

      <View style={styles.priceRow}>

        <Text
          style={[
            styles.priceText,
            styles.movieTicketName,
          ]}
        >
          3d Glasses
        </Text>

        <Text style={styles.priceText}>
          -
        </Text>

        <Text style={styles.priceText}>
          -
        </Text>

        <Text style={styles.priceText}>
          -
        </Text>

      </View>

      {/* SUBTOTAL */}

      <View style={styles.subtotalRow}>

        <Text style={styles.subtotalLabel}>
          Subtotal
        </Text>

        <Text style={styles.subtotalValue}>
          E{total.toFixed(2)}
        </Text>

      </View>

      {/* DIVIDER */}

      <View style={styles.divider} />

      {/* TOTAL */}

      <View style={styles.totalRow}>

        <Text style={styles.totalLabel}>
          Total Payment
        </Text>

        <Text style={styles.totalValue}>
          E{total.toFixed(2)}
        </Text>

      </View>

      {/* PAY */}

      <Pressable
        style={styles.payButton}
        onPress={handlePayment}
      >
        <MaterialIcons
          name="shopping-cart"
          size={19}
          color="#FFFFFF"
        />

        <Text style={styles.payButtonText}>
          Pay
        </Text>
      </Pressable>

    </View>
  );
}