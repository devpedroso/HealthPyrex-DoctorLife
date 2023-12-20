import { TextProps } from "@rneui/base";
import { Text as RNText, StyleSheet } from "react-native";

interface TextData extends TextProps {
  size?: number;
  bold?: boolean;
}

const Text = ({ size, bold, ...props }: TextData) => {
  return (
    <RNText
      {...props}
      style={[
        props.style,
        bold ? styles.font700 : styles.font400,
        size && { fontSize: size },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  font400: {
    fontFamily: "Montserrat_400Regular",
  },
  font700: {
    fontFamily: "Montserrat_700Bold",
  },
});

export default Text;
