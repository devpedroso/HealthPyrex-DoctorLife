import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 64,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: AppColors.primary,
  },
  leave: {
    fontSize: 20,
    color: AppColors.error,
    textAlign: "center",
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    color: AppColors.white_100,
  },
});
