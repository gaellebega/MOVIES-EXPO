import React from "react";
import { Text, View } from "react-native";

import styles from "./SeatStyles";

export default function SeatLegend() {
  return (
    <View style={styles.legend}>

      {/* AVAILABLE */}

      <View style={styles.legendItem}>
        <View
          style={[
            styles.legendCircle,
            styles.availableLegend,
          ]}
        />

        <Text style={styles.legendText}>
          Available
        </Text>
      </View>

      {/* RESERVED */}

      <View style={styles.legendItem}>
        <View
          style={[
            styles.legendCircle,
            styles.reservedLegend,
          ]}
        />

        <Text style={styles.legendText}>
          Reserved
        </Text>
      </View>

      {/* SELECTED */}

      <View style={styles.legendItem}>
        <View
          style={[
            styles.legendCircle,
            styles.selectedLegend,
          ]}
        />

        <Text style={styles.legendText}>
          Selected
        </Text>
      </View>

    </View>
  );
}