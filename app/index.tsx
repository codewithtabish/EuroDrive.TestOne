import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
      }}
    >
      <Text>
        Welcome to your React Native app powered by Expo and TypeScript!
      </Text>
      <Text>Start editing to see some magic happen       
        .</Text>
    </View>
  );
}
