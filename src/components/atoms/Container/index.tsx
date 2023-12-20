import { SafeAreaView, View, ScrollView } from "react-native";
import { AppColors } from "../../../config/colors";

const Container = ({
  gap = 16,
  backgroundColor = AppColors.white_100,
  paddingHorizontal = 32,
  paddingVertical = 8,
  borderRadius = 18,
  children,
  ...props
}) => {
  return (
    <SafeAreaView
      style={{ backgroundColor: AppColors.primary, flex: 1 }}
      onStartShouldSetResponder={() => true}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          gap: gap,
          backgroundColor: backgroundColor,
          borderTopRightRadius: borderRadius,
          borderTopLeftRadius: borderRadius,
        }}
        {...props}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Container;
