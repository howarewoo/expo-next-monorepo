import { HomeIcon, HomeScreen } from "@repo/surfaces";
import { StyleSheet, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <HomeIcon />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
