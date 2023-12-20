import { styles } from "./styles";

import { useContext } from "react";
import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Text from "../../../components/atoms/Text";
import Avatar from "../../../components/atoms/Avatar";

import { AuthContext } from "../../../../src/context/auth.context";
import { AppColors } from "../../../../src/config/colors";

const Profile = () => {
  const { navigate } = useNavigation<any>();
  const { user, onLeave } = useContext(AuthContext);

  const confirmLeave = () => {
    Alert.alert("Sair", "Deseja realmente sair?", [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress: () => {
          onLeave().then(() => navigate("Login"));
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Avatar
        title={<Text style={{ color: AppColors.white_100 }}>{user.name}</Text>}
        sex={user.gender}
        style={styles.avatar}
      />
      <Text style={styles.leave} bold onPress={confirmLeave}>
        Sair
      </Text>
    </View>
  );
};

export default Profile;
