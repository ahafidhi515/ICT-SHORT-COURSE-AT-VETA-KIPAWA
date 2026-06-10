import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Payment() {
  const router = useRouter();

  const { courseName, price } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details 💳</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Course:</Text>

        <Text style={styles.value}>{courseName}</Text>

        <Text style={styles.label}>Amount:</Text>

        <Text style={styles.amount}>Tsh {price}</Text>

        <Text style={styles.label}>Control Number:</Text>

        <Text style={styles.control}>99123456789</Text>

        <Text style={styles.instructions}>
          Pay using M-Pesa, Airtel Money, Tigo Pesa or Bank.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/notes" as any)}
      >
        <Text style={styles.buttonText}>I Have Paid</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 3,
  },

  label: {
    fontSize: 16,
    color: "#64748b",
    marginTop: 10,
  },

  value: {
    fontSize: 22,
    fontWeight: "bold",
  },

  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },

  control: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563eb",
    marginTop: 5,
  },

  instructions: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#16a34a",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
