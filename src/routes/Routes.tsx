import { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthContext } from "../context/auth.context";

import Exams from "../components/organisms/Exams";
import Footer from "../components/organisms/Footer";
import Profile from "../components/organisms/Profile";
import Doctors from "../components/organisms/Doctors";
import Schedule from "../components/organisms/Schedule";
import Patients from "../components/organisms/Patients";
import Appointments from "../components/organisms/Appointments";

import Home from "../components/pages/Home";
import LoginPage from "../components/pages/LoginPage";

import { NavigationContainer } from "@react-navigation/native";

import { AppColors } from "../config/colors";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const { isLoggedIn } = useContext(AuthContext);

  const options = (title: string, headerBackVisible: boolean = false) => {
    return {
      title: title,
      headerStyle: { backgroundColor: AppColors.primary },
      headerTintColor: AppColors.white_100,
      headerShown: true,
      headerBackVisible: headerBackVisible,
      headerTitleStyle: {
        fontFamily: "Montserrat_700Bold",
      },
      headerBackTitle: null,
    };
  };

  return (
    <NavigationContainer>
      <View style={styles.appBar} />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Exams"
          component={Exams}
          options={options("Meus exames")}
        />
        <Stack.Screen
          name="Appointments"
          component={Appointments}
          options={options("Minhas consultas")}
        />
        <Stack.Screen
          name="Care"
          component={Appointments}
          options={options("Meus atendimentos")}
        />
        <Stack.Screen
          name="Patients"
          component={Patients}
          options={options("Meus pacientes")}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="Doctors"
          component={Doctors}
          options={options("Doutores", true)}
        />
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={options("Agendar consulta", true)}
        />
      </Stack.Navigator>
      {isLoggedIn && <Footer />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: AppColors.primary,
    height: 40,
  },
});
