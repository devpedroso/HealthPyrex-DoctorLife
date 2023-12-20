import { styles } from "./styles";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../../atoms/Text";

import { AppColors } from "../../../../src/config/colors";
import { getFormatDate, getHoursDate } from "../../../../src/utils/utils";

const Appointment = ({
  appointment,
  name,
  date,
  description,
  patient = true,
}) => {
  return (
    <View>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.appointment} bold>
            {appointment}
          </Text>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color={AppColors.primary}
          />
        </View>

        <Text style={styles.doctor}>
          <Text bold>{patient ? "Paciente: " : "Doutor: "}</Text>
          {name}
        </Text>

        {description && <Text style={styles.description}>{description}</Text>}

        <View>
          <Text style={styles.date} bold>
            {getFormatDate(date)} {getHoursDate(date)}hs
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Appointment;
