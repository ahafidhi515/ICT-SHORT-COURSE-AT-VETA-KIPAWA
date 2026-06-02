import { useEffect } from "react";

import { router } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { StyleSheet, Text, View } from "react-native";

export default function Splash() {
  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const email = await AsyncStorage.getItem("userEmail");

    if (email) {
      router.replace("/home");
    } else {
      router.replace("/login");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>APP YAKO INAANZA 🔥</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
