import { styles } from "./styles";
import { useState, useEffect, useContext } from "react";
import { ScrollView, View } from "react-native";

import Input from "../../atoms/Input";
import Container from "../../../components/atoms/Container";
import Appointment from "../../molecules/Appointment";

import { api } from "../../../../src/services/api";
import { Role } from "../../../../src/services/enum/userEnum";
import { AuthContext } from "../../../../src/context/auth.context";
import { Appointment as AppointmentType } from "../../../../src/services/models/appointment";

const Appointments = () => {
  const { user } = useContext(AuthContext);

  const [inital, setIntial] = useState<AppointmentType[]>();
  const [appointments, setAppointments] = useState<AppointmentType[]>();

  useEffect(() => {
    api
      .get(
        `appointments?${
          user.role === Role.patient
            ? `patientId=${user.id}`
            : `doctorId=${user.id}`
        }&_expand=doctor&_expand=patient`
      )
      .then((res) => {
        setIntial(res.data);
        setAppointments(res.data);
      });
  }, [user]);

  const onSearch = (value) => {
    console.log(value);
    setAppointments(value);
  };

  return (
    <Container>
      <Input
        placeholder="Pesquisar consultas"
        onSearch={onSearch}
        type="search"
        itens={appointments}
        props={["title"]}
        initial={inital}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {appointments?.map((item) => (
          <View
            style={styles.itemContent}
            key={item.id}
            onStartShouldSetResponder={() => true}
          >
            <Appointment
              appointment={item.title}
              name={item.doctor.name}
              date={item.date}
              description={item.description}
            />
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Appointments;
