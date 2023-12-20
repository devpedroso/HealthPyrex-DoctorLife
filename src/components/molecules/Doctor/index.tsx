import { styles } from "./styles";

import { View, Image, Pressable } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../../../components/atoms/Text";

import { AppColors } from "../../../../src/config/colors";

const Doctor = ({
  id,
  name,
  expertise,
  isOptions = true,
  onPress = (any) => {},
}) => {
  return (
    <Pressable onPress={() => onPress({ id, name, expertise })}>
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Image
            style={{ width: 72, height: 72, borderRadius: 6 }}
            source={{
              uri: `https://xsgames.co/randomusers/assets/avatars/pixel/${+id}.jpg`,
            }}
          />
          <View style={styles.content}>
            <View style={styles.contentName}>
              <Text style={styles.name} bold>
                {name}
              </Text>
            </View>
            <Text style={styles.expertise}>{expertise}</Text>
          </View>
        </View>
        {isOptions && (
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color={AppColors.primary}
          />
        )}
      </View>
    </Pressable>
  );
};

export default Doctor;
