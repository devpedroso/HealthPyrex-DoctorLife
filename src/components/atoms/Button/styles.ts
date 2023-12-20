import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  default: {
    borderRadius: 999,
    backgroundColor: AppColors.primary,
    padding: 8,
  },
  disabled: {
    borderRadius: 999,
    backgroundColor: AppColors.primary,
    opacity: 0.5,
    padding: 16,
  },
  full: {
    borderRadius: 999,
    backgroundColor: AppColors.primary,
    padding: 8,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat_700Bold",
    color: AppColors.white_100,
  },
});
