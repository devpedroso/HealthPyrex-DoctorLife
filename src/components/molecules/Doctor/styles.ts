import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderColor: AppColors.neutral_400,
    borderWidth: 0.2,
    borderRadius: 6,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  content: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  contentName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    color: AppColors.dark_700,
  },
  expertise: {
    fontSize: 14,
    color: AppColors.neutral_600,
  },
});
