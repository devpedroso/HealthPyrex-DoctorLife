import Text from "../Text";
import { styles } from "./styles";

import { View, Image } from "react-native";

const Avatar = ({ title, sex, type = "circle", ...props }) => {
  return (
    <View style={styles.infos} {...props}>
      <Image
        style={
          type === "circle"
            ? { width: 72, height: 72, borderRadius: 999 }
            : { width: 72, height: 72, borderRadius: 6 }
        }
        source={{
          uri: `https://xsgames.co/randomusers/avatar.php?g=${
            sex === "male" ? "male" : "female"
          }`,
        }}
      />

      <Text>{title}</Text>
    </View>
  );
};

export default Avatar;
