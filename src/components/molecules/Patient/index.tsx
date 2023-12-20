import { styles } from "./styles";
import { View } from "react-native";

import Text from "../../atoms/Text";
import { getFormatDate, getHoursDate } from "../../../../src/utils/utils";

const Patient = ({ patient, lastAppointment, age }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title} bold>
        {patient}
      </Text>
      <Text style={styles.lastAppointment}>
        Última consulta: <Text bold>{getFormatDate(lastAppointment)}</Text> às
        <Text bold> {getHoursDate(lastAppointment)}</Text>
      </Text>
      <Text style={styles.lastAppointment} bold>
        Idade: <Text>{age} anos</Text>
      </Text>
    </View>
  );
};

export default Patient;
