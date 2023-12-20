import { styles } from "./styles";

import { useContext, useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Text from "../../../components/atoms/Text";
import Input from "../../../components/atoms/Input";
import Button from "../../../components/atoms/Button";
import Doctor from "../../../components/molecules/Doctor";

import DateTimePicker from "@react-native-community/datetimepicker";
import {
  getFormatDateDescriptionMonth,
  getHoursDate,
  getFormatDate,
} from "../../../../src/utils/utils";
import { api } from "../../../../src/services/api";
import { AuthContext } from "../../../../src/context/auth.context";

const Schedule = ({ route }) => {
  const { user } = useContext(AuthContext);
  const { navigate } = useNavigation<any>();

  const { id, name, expertise } = route.params;

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState();
  const [show, setShow] = useState(false);

  const [description, setDescription] = useState("");

  const onChange = (_, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const confirmScheduling = () => {
    Alert.alert(
      "",
      `Confirmar agendamento para ${getFormatDate(date)} às ${getHoursDate(
        date
      )?.substring(0, 5)}?`,
      [
        {
          text: "Não",
          style: "destructive",
        },
        {
          text: "Sim",
          onPress: () => postScheduling(),
        },
      ]
    );
  };

  const postScheduling = () => {
    api
      .post("appointments", {
        date: date,
        doctorId: id,
        patientId: user.id,
        title: `Consulta com ${expertise}`,
        description: description,
      })
      .then(() => navigate("Doctors", { isScheduling: true }))
      .catch((e) => {
        Alert.alert(
          "Erro ao confirmar agendamento da consulta. Tente novamente mais tarde!"
        );
      });
  };

  const onChangeDescription = (value) => {
    setDescription(value);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.wrapper} onStartShouldSetResponder={() => true}>
        <View style={styles.content}>
          <Doctor id={id} name={name} expertise={expertise} isOptions={false} />
          <View style={styles.contentButtons}>
            <Button style={styles.button} onPress={showDatepicker}>
              Data
            </Button>
            <Button style={styles.button} onPress={showTimepicker}>
              Hora
            </Button>
          </View>
          <View style={styles.datePicker}>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                locale="pt-BR"
                minimumDate={new Date()}
                minuteInterval={15}
              />
            )}
          </View>
          <View style={{ gap: 16 }}>
            <Text style={styles.dateScheduling} bold>
              Data do agendamento
            </Text>
            <Text style={styles.dateHour} bold>
              {getFormatDateDescriptionMonth(date)} às{" "}
              {getHoursDate(date)?.substring(0, 5)}
            </Text>
            <Input
              onChange={onChangeDescription}
              label={""}
              placeholder={"Observação"}
              type={"default"}
            />
          </View>
        </View>

        <Button onPress={confirmScheduling} type="full">
          Confirmar agendamento
        </Button>
      </View>
    </ScrollView>
  );
};

export default Schedule;
