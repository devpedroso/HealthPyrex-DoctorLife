import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    flex: 1,
  },
  item: {
    gap: 4,
    color: AppColors.primary,
  },
  text: {
    color: AppColors.white_100,
  },
});
