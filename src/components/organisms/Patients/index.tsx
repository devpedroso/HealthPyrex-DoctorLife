import { styles } from "./styles";
import { useState, useEffect, useContext } from "react";
import { ScrollView, View } from "react-native";

import Input from "../../../components/atoms/Input";
import Patient from "../../../components/molecules/Patient";
import Container from "../../../components/atoms/Container";

import { api } from "../../../../src/services/api";
import { Patient as PatientType } from "../../../../src/services/models/patient";
import { AuthContext } from "../../../../src/context/auth.context";

const Patients = () => {
  const { user } = useContext(AuthContext);
  const [patients, setPatients] = useState<PatientType[]>();

  useEffect(() => {
    api.get(`appointments?doctorId=${user.id}`).then(({ data }) => {
      const params = data
        .map((q) => "patientId=" + q.patientId)
        .join("&")
        .toString();

      api.get(`patients?${params}`).then(({ data }) => {
        setPatients(data);
      });
    });
  }, []);

  const onSearch = (value) => {
    setPatients(value);
  };

  return (
    <Container>
      <Input
        placeholder="Pesquisar pacientes"
        onSearch={onSearch}
        type="search"
        itens={patients}
        props={["name"]}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {patients?.map((item) => (
          <View
            style={styles.wrapper}
            key={item.id}
            onStartShouldSetResponder={() => true}
          >
            <Patient
              patient={item.name}
              lastAppointment={item.modifiedAt}
              age={item.age}
            />
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Patients;
