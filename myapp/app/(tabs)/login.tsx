import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        LOGIN
      </Text>

      <TextInput
        placeholder="Enter Email"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 12,
          borderRadius: 10,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Enter Password"
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 12,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={() => router.push("/")}
        style={{
          backgroundColor: "blue",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
    </View>
  );
}
