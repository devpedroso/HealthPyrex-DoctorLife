import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppColors } from "../../../config/colors";
import Text from "../../atoms/Text";

const Error = ({ screen }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="sim-alert"
        size={48}
        color={AppColors.error}
      />
      <Text style={styles.text} bold>
        {screen} ainda não implementado
      </Text>
    </View>
  );
};

export default Error;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.white_100,
  },
  text: {
    fontSize: 16,
  },
});
