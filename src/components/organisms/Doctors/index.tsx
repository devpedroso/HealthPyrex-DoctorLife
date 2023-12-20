import { useEffect, useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "../../../components/atoms/Input";
import Container from "../../../components/atoms/Container";
import Doctor from "../../../components/molecules/Doctor";

import { api } from "../../../../src/services/api";
import { Doctor as DoctorType } from "../../../../src/services/models/doctor";

const Doctors = ({ route }) => {
  const { navigate } = useNavigation<any>();

  const [inital, setIntial] = useState<DoctorType[]>();
  const [doctors, setDoctors] = useState<DoctorType[]>();

  useEffect(() => {
    api.get("doctors").then((res) => {
      const listDocsActive = res.data.filter((doc) => doc.isActive);

      setIntial(listDocsActive);
      setDoctors(listDocsActive);
    });
  }, []);

  useEffect(() => {
    if (route.params?.isScheduling) {
      Alert.alert("Agendamento confirmado com sucesso!");
    }
  }, [route]);

  const onSearch = (value) => {
    setDoctors(value);
  };

  const handleClickDoctor = ({ id, name, expertise }) => {
    navigate("Schedule", { id: id, name: name, expertise: expertise });
  };

  return (
    <Container>
      <Input
        placeholder="Pesquisar doutores"
        onSearch={onSearch}
        type="search"
        itens={doctors}
        props={["name", "expertise"]}
        initial={inital}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {doctors?.map((item) => (
          <View
            style={{ paddingBottom: 8 }}
            key={item.id}
            onStartShouldSetResponder={() => true}
          >
            <Doctor
              id={item.id}
              name={item.name}
              expertise={item.expertise}
              onPress={handleClickDoctor}
            />
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Doctors;
