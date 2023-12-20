import { styles } from "./styles";

import { useContext, useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Text from "../../../components/atoms/Text";
import Avatar from "../../../components/atoms/Avatar";
import Button from "../../../components/atoms/Button";
import Container from "../../../components/atoms/Container";
import Exam from "../../../components/molecules/Exam";
import Appointment from "../../../components/molecules/Appointment";

import { AuthContext } from "../../../../src/context/auth.context";
import { AppColors } from "../../../../src/config/colors";
import { api } from "../../../../src/services/api";

import { Role } from "../../../../src/services/enum/userEnum";
import { Exam as ExamType } from "../../../../src/services/models/exam";
import { Appointment as AppointmentType } from "../../../../src/services/models/appointment";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { navigate } = useNavigation<any>();

  const [exams, setExams] = useState<ExamType[]>();
  const [appointments, setAppointments] = useState<AppointmentType[]>();

  useEffect(() => {
    api
      .get(
        `exams?${
          user.role === Role.patient
            ? `patientId=${user.id}`
            : `doctorId=${user.id}`
        }&_expand=doctor&_expand=patient`
      )
      .then((res) => {
        setExams(res.data);
      });

    api
      .get(
        `appointments?${
          user.role === Role.patient
            ? `patientId=${user.id}`
            : `doctorId=${user.id}`
        }&_expand=doctor&_expand=patient`
      )
      .then((res) => {
        setAppointments(res.data);
      });
  }, [user]);

  const onClickSchendule = () => {
    navigate("Doctors");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container} onStartShouldSetResponder={() => true}>
        <Avatar
          title={
            <Text style={styles.text} bold>
              Bem vind{user.gender === "male" ? "o" : "a"}{" "}
              <Text>{user.name}</Text>
            </Text>
          }
          sex={user.gender}
        />

        <Container paddingVertical={48} gap={32}>
          {user.role === Role.patient && (
            <Button onPress={onClickSchendule} type="full">
              Agendar consulta
            </Button>
          )}

          <View style={styles.item}>
            <Text style={{ color: AppColors.primary }} size={16} bold>
              {user.role === Role.patient
                ? "Próximas consultas"
                : "Próximos atendimentos"}
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              {appointments?.slice(0, 3)?.map((item) => (
                <View
                  style={{ paddingVertical: 8 }}
                  key={item.id}
                  onStartShouldSetResponder={() => true}
                >
                  <Appointment
                    appointment={item.title}
                    name={
                      user.role === Role.patient
                        ? item.patient.name
                        : item.doctor.name
                    }
                    date={item.date}
                    description={item.description}
                  />
                </View>
              ))}
            </ScrollView>
          </View>

          {user.role === Role.patient && (
            <View style={styles.item}>
              <Text style={{ color: AppColors.primary }} size={16} bold>
                Próximos exames
              </Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                {exams?.slice(0, 3)?.map((item) => (
                  <View
                    style={{ paddingVertical: 8 }}
                    key={item.id}
                    onStartShouldSetResponder={() => true}
                  >
                    <Exam
                      title={item.title}
                      description={item.description}
                      doctor={item.doctor.name}
                      date={item.date}
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
          )}
        </Container>
      </View>
    </ScrollView>
  );
};

export default Home;
