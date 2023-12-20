import { styles } from "./styles";
import { Pressable, Text } from "react-native";

const Button = ({
  type = "default",
  onPress,
  padding = 8,
  height = 48,
  children = null,
  ...props
}) => {
  const style = {
    default: styles.default,
    full: styles.full,
    text: styles.text,
    disabled: styles.disabled,
  };

  const classButton = style[type];

  return (
    <Pressable
      style={
        props.disabled
          ? styles.disabled
          : [classButton, styles.button, { padding: padding, height: height }]
      }
      onPress={onPress}
      {...props}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
