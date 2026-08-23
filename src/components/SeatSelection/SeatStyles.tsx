import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  // =====================================================
  // MAIN SCREEN
  // =====================================================

  safeArea: {
    flex: 1,
    backgroundColor: "#1B1B1B",
  },

  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
  },

  scrollContent: {
    paddingBottom: 30,
  },

  // =====================================================
  // HEADER
  // =====================================================

  header: {
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
  },

  backButton: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  headerSpace: {
    width: 42,
  },

  // =====================================================
  // SCREEN
  // =====================================================

  screenContainer: {
    paddingHorizontal: 23,
    marginTop: 25,
  },

  screen: {
    height: 78,
    width: "100%",
    backgroundColor: "#F00000",

    borderRadius: 10,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,

    justifyContent: "center",
    alignItems: "center",
  },

  screenText: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "500",
  },

  // =====================================================
  // SEAT MANAGEMENT
  // =====================================================

  seatManagement: {
    marginTop: 57,
    paddingHorizontal: 38,
  },

  seatRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  rowLabelContainer: {
    width: 24,
  },

  rowLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },

  seatsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  seat: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },

  availableSeat: {
    backgroundColor: "#D0D1D2",
  },

  reservedSeat: {
    backgroundColor: "#F00000",
  },

  selectedSeat: {
    backgroundColor: "#B9E343",
  },

  seatGap: {
    marginLeft: 17,
  },

  // =====================================================
  // SEAT NUMBERS
  // =====================================================

  numberRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  numberSpacer: {
    width: 24,
  },

  numberContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  numberItem: {
    width: 22,
    alignItems: "center",
  },

  numberGap: {
    marginLeft: 17,
  },

  numberText: {
    color: "#FFFFFF",
    fontSize: 14,
  },

  // =====================================================
  // LEGEND
  // =====================================================

  legend: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    gap: 18,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  legendCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 7,
  },

  availableLegend: {
    backgroundColor: "#D0D1D2",
  },

  reservedLegend: {
    backgroundColor: "#F00000",
  },

  selectedLegend: {
    backgroundColor: "#B9E343",
  },

  legendText: {
    color: "#FFFFFF",
    fontSize: 13,
  },

  // =====================================================
  // PURCHASE CARD
  // =====================================================

  purchaseCard: {
    marginTop: 80,
    marginHorizontal: 4,

    backgroundColor: "#2C2D34",

    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,

    paddingHorizontal: 25,
    paddingTop: 34,
    paddingBottom: 30,

    minHeight: 580,
  },

  movieZone: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "700",
  },

  movieZoneRed: {
    color: "#F00000",
  },

  ticketPurchase: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 12,
  },

  // =====================================================
  // LOCATION
  // =====================================================

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
  },

  locationText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginLeft: 9,
  },

  // =====================================================
  // BOOKING INFORMATION
  // =====================================================

  bookingInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  dateSection: {
    flex: 1.25,
  },

  infoLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
  },

  dateText: {
    color: "#FFFFFF",
    fontSize: 15,
  },

  verticalLine: {
    width: 1,
    height: 50,
    backgroundColor: "#FFFFFF",
    opacity: 0.8,
    marginHorizontal: 14,
  },

  infoBox: {
    flex: 0.85,
    height: 70,

    backgroundColor: "#5C5D68",

    borderRadius: 9,

    justifyContent: "center",
    alignItems: "center",

    marginLeft: 6,

    paddingHorizontal: 5,
  },

  infoBoxLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 6,
  },

  infoBoxValue: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  selectedSeatsText: {
    color: "#B9E343",
    fontSize: 14,
    fontWeight: "500",
  },

  // =====================================================
  // PRICE SECTION
  // =====================================================

  divider: {
    height: 1,
    backgroundColor: "#FFFFFF",
    opacity: 0.7,
    marginTop: 20,
    marginBottom: 10,
  },

  priceRow: {
    minHeight: 28,

    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
  },

  movieTicketName: {
    flex: 1,
    textAlign: "left",
  },

  priceText: {
    width: 43,

    color: "#FFFFFF",

    fontSize: 13,

    textAlign: "right",
  },

  // =====================================================
  // SUBTOTAL
  // =====================================================

  subtotalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 7,
  },

  subtotalLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },

  subtotalValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },

  // =====================================================
  // TOTAL
  // =====================================================

  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 10,
  },

  totalLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  totalValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  // =====================================================
  // PAY BUTTON
  // =====================================================

  payButton: {
    height: 40,

    backgroundColor: "#F00000",

    borderRadius: 7,

    marginTop: 95,
    marginHorizontal: 40,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  payButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 7,
  },
});

export default styles;