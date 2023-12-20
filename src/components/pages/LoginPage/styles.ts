import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: AppColors.primary,
  },
  subTitle: {
    textAlign: "right",
    color: AppColors.primary,
  },
  checkbox: {
    width: 12,
    height: 12,
  },
  checkboxText: {
    fontSize: 12,
  },
  keepConnectedContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 4,
    marginLeft: 8,
    marginBottom: 8,
  },
  loginFormContainer: {
    width: 256,
    gap: 16,
  },
  passwordInputContainer: {
    gap: 6,
  },
  passwordText: {
    alignSelf: "flex-end",
    marginRight: 8,
    color: AppColors.dark_800,
    fontSize: 10,
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  switchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
  },
  wrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 48,
    backgroundColor: AppColors.white_100,
    borderTopLeftRadius: 18,
    borderTopEndRadius: 18,
  },
  login: {
    alignItems: "center",
  },
  passwordContainer: {
    gap: 16,
  },
});
