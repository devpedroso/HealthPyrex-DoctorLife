import { styles } from "./styles";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../../atoms/Text";

import { AppColors } from "../../../../src/config/colors";
import { getFormatDate } from "../../../../src/utils/utils";

const Exam = ({ title, description, doctor, date }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title} bold>
          {title}
        </Text>
        <MaterialCommunityIcons
          name="clipboard-pulse"
          size={24}
          color={AppColors.primary}
        />
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.description} bold>
        Doutor: <Text style={styles.description}>{doctor}</Text>
      </Text>
      <Text style={styles.date} bold>
        Realizar até dia{" "}
        <Text style={styles.dateStyle} bold>
          {getFormatDate(date)}
        </Text>
      </Text>
    </View>
  );
};

export default Exam;
