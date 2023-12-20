import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    padding: 32,
    backgroundColor: AppColors.white_100,
    gap: 24,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    gap: 32,
  },
  contentButtons: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  dateHour: {
    fontSize: 18,
    color: AppColors.primary,
    textAlign: "center",
    backgroundColor: AppColors.neutral_300,
    padding: 16,
    borderRadius: 6,
  },
  button: {
    width: "50%",
    backgroundColor: AppColors.primary,
    color: AppColors.primary,
    borderRadius: 6,
    padding: 10,
  },
  datePicker: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: 6,
    marginBottom: -16,
    marginTop: -8,
  },
  datePickerItem: {
    color: AppColors.white_100,
  },
  dateScheduling: {
    textAlign: "center",
    fontSize: 16,
    color: AppColors.error,
  },
});
