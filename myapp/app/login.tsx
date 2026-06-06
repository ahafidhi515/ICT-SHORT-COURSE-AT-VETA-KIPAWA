import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <Text style={{ color: "white" }}>Email: {email}</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          if (email === "" || password === "") {
            Alert.alert("ERROR", "Tafadhali jaza email na password");
            return;
          }

          const savedEmail = await AsyncStorage.getItem("email");
          const savedPassword = await AsyncStorage.getItem("password");

          if (email === savedEmail && password === savedPassword) {
            await AsyncStorage.setItem("userEmail", email);

            Alert.alert("SUCCESS", "Login imefanikiwa 🔥");

            router.replace("/");
          } else {
            Alert.alert("ERROR", "Email au Password sio sahihi");
          }
        }}
      >
        <Text style={styles.buttonText}>INGIA</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={async () => router.push("/")}>
        <Text style={styles.link}>HUNA ACCOUNT? JISAJILI</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: 300,
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 300,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
    width: 300,
  },
});
