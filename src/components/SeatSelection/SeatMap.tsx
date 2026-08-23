import React from "react";
import {
  Pressable,
  Text,
  View,
} from "react-native";

import styles from "./SeatStyles";

export type SeatStatus =
  | "available"
  | "reserved"
  | "selected";

interface SeatManagementProps {
  seats: Record<string, SeatStatus>;

  setSeats: React.Dispatch<
    React.SetStateAction<
      Record<string, SeatStatus>
    >
  >;
}

const rows = ["A", "B", "C", "D", "E"];

const seatNumbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

export default function SeatManagement({
  seats,
  setSeats,
}: SeatManagementProps) {

  // =====================================================
  // SELECT / UNSELECT SEAT
  // =====================================================

  const handleSeatPress = (seatId: string) => {

    const currentStatus =
      seats?.[seatId] ?? "available";

    // Reserved seats cannot be selected
    if (currentStatus === "reserved") {
      return;
    }

    setSeats((previousSeats) => ({
      ...previousSeats,

      [seatId]:
        currentStatus === "selected"
          ? "available"
          : "selected",
    }));
  };

  // =====================================================
  // GET SEAT STYLE
  // =====================================================

  const getSeatStyle = (
    status: SeatStatus
  ) => {

    switch (status) {

      case "reserved":
        return styles.reservedSeat;

      case "selected":
        return styles.selectedSeat;

      case "available":
      default:
        return styles.availableSeat;
    }
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <View style={styles.seatManagement}>

      {/* ================================================
          SEAT ROWS
      ================================================= */}

      {rows.map((row) => (

        <View
          key={row}
          style={styles.seatRow}
        >

          {/* ROW LETTER */}

          <View
            style={styles.rowLabelContainer}
          >
            <Text style={styles.rowLabel}>
              {row}
            </Text>
          </View>

          {/* SEATS */}

          <View
            style={styles.seatsContainer}
          >

            {seatNumbers.map((number) => {

              const seatId =
                `${row}${number}`;

              // Safely get seat status
              const seatStatus =
                seats?.[seatId] ??
                "available";

              return (

                <Pressable
                  key={seatId}
                  onPress={() =>
                    handleSeatPress(
                      seatId
                    )
                  }
                  style={[
                    styles.seat,

                    getSeatStyle(
                      seatStatus
                    ),

                    number === 5 &&
                      styles.seatGap,
                  ]}
                />

              );
            })}

          </View>

        </View>

      ))}

      {/* ================================================
          SEAT NUMBERS
      ================================================= */}

      <View style={styles.numberRow}>

        {/* Space where row letters are */}

        <View
          style={styles.numberSpacer}
        />

        <View
          style={styles.numberContainer}
        >

          {seatNumbers.map((number) => (

            <View
              key={number}
              style={[
                styles.numberItem,

                number === 5 &&
                  styles.numberGap,
              ]}
            >

              <Text
                style={styles.numberText}
              >
                {number}
              </Text>

            </View>

          ))}

        </View>

      </View>

    </View>
  );
}