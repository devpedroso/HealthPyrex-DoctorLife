import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  date: {
    fontSize: 12,
    color: AppColors.error,
  },
  card: {
    flex: 1,
    gap: 8,
    padding: 8,
    backgroundColor: AppColors.white_100,

    borderColor: AppColors.neutral_400,
    borderWidth: 0.2,
    borderRadius: 6,
  },
  appointment: {
    fontSize: 16,
    color: AppColors.dark_700,
  },
  doctor: {
    fontSize: 14,
    color: AppColors.neutral_600,
  },
  description: {
    fontSize: 14,
    color: AppColors.neutral_600,
  },
});
