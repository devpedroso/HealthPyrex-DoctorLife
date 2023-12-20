import { styles } from "./styles";

import { useContext, useEffect, useState } from "react";
import { View, Alert, Switch } from "react-native";
import Checkbox from "expo-checkbox";

import Text from "../../../components/atoms/Text";
import Input from "../../../components/atoms/Input";
import Button from "../../../components/atoms/Button";

import { AuthContext } from "../../../context/auth.context";
import { AppColors } from "../../../config/colors";
import Container from "../../../components/atoms/Container";

const LoginPage = ({ navigation }) => {
  const { setKeepConnected, signIn } = useContext(AuthContext);

  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("admin");
  const [keepUserConnected, setKeepUserConnected] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {}, []);

  const onUserEnterClick = () => {
    if (!userEmail || !userPass) {
      Alert.alert("Digite seu email e senha!");
      return;
    }

    const user = {
      email: userEmail,
      password: userPass,
      role: isDoctor ? "doctor" : "patient",
    };

    signIn(user)
      .then(() => navigation.navigate("Home"))
      .catch((e) => Alert.alert(e.message.replace("Error: ", "")));
  };

  const handleKeepUserConnected = () => {
    setKeepUserConnected(!keepUserConnected);
    setKeepConnected(keepUserConnected);
  };

  const toggleSwitch = (isDoctor) => {
    setIsDoctor(isDoctor);
  };

  const onChangeEmail = (value: string) => {
    setUserEmail(value);
  };

  const onChangePassword = (value: string) => {
    setUserPass(value);
  };

  return (
    <Container style={styles.wrapper}>
      <View onStartShouldSetResponder={() => true}>
        <Text style={styles.title}>HealthPyrex</Text>
        <Text style={styles.subTitle} bold>
          DoctorLife
        </Text>
      </View>
      <View style={styles.login}>
        <View style={styles.switchContainer}>
          <Text>Paciente</Text>
          <Switch
            style={styles.switch}
            trackColor={{
              false: AppColors.dark_800,
              true: AppColors.primary,
            }}
            onValueChange={toggleSwitch}
            value={isDoctor}
          />
          <Text>Médico</Text>
        </View>
        <View style={styles.loginFormContainer}>
          <Input
            onChange={onChangeEmail}
            label={"Login"}
            placeholder={"Digite aqui seu email"}
            type={"email-address"}
          />
          <View style={styles.passwordContainer}>
            <View style={styles.passwordInputContainer}>
              <Input
                onChange={onChangePassword}
                label={"Senha"}
                placeholder={"Digite aqui sua senha"}
                type={"password"}
              />
              <Text
                style={styles.passwordText}
                onPress={() =>
                  Alert.alert("Redirecionando para redefinição de senha...")
                }
              >
                Esqueci minha senha
              </Text>
            </View>
            <View style={styles.keepConnectedContainer}>
              <Checkbox
                style={styles.checkbox}
                value={keepUserConnected}
                onValueChange={() => handleKeepUserConnected()}
              />
              <Text style={styles.checkboxText}>Mantenha-me conectado</Text>
            </View>
          </View>
          <Button onPress={onUserEnterClick} disabled={!userEmail || !userPass}>
            ENTRAR
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default LoginPage;
