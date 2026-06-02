import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CourseDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Computer Application</Text>

      <Text style={styles.text}>Price: Tsh 250,000</Text>

      <Text style={styles.text}>Duration: 4 Weeks</Text>

      <Text style={styles.text}>
        Learn Microsoft Word, Excel, PowerPoint, Internet & Typing Skills.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/notes")}
      >
        <Text style={styles.buttonText}>View Notes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.payButton}
        onPress={() => router.push("/payment")}
      >
        <Text style={styles.buttonText}>Payment Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  text: {
    fontSize: 18,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },

  payButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
