import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    height: 90,
    backgroundColor: AppColors.white_100,
    paddingTop: 10,
    position: "relative",

    shadowColor: AppColors.dark_900,
    shadowOffset: { width: 2, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
  },
  imageAppointment: {
    width: 32,
    height: 32,
  },
  text: {
    fontSize: 12,
  },
});
