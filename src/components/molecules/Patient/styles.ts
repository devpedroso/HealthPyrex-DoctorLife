import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  content: {
    paddingVertical: 16,
    borderBottomWidth: 0.2,
    borderBottomColor: AppColors.neutral_400,

    gap: 8,
    padding: 8,

    borderColor: AppColors.neutral_400,
    borderWidth: 0.2,
    borderRadius: 6,
  },
  title: {
    fontSize: 14,
    color: AppColors.dark_900,
  },
  lastAppointment: {
    fontSize: 12,
    color: AppColors.neutral_600,
  },
});
