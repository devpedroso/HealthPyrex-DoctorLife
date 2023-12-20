import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  card: {
    gap: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderColor: AppColors.neutral_400,
    borderWidth: 0.2,
    borderRadius: 6,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    color: AppColors.dark_700,
  },
  description: {
    fontSize: 14,
    color: AppColors.neutral_600,
  },
  date: {
    fontSize: 12,
    color: AppColors.neutral_500,
  },
  dateStyle: {
    color: AppColors.error,
  },
});
