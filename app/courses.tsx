import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";

export default function Courses() {
  const courses = [
    {
      id: 1,
      name: "Computer Application",
      price: "250,000",
      duration: "4 Weeks",
      status: "OPEN",
    },

    {
      id: 2,
      name: "Graphic Design & Video Production",
      price: "320,000",
      duration: "6 Weeks",
      status: "ONGOING",
    },

    {
      id: 3,
      name: "Fundamental of Animation",
      price: "305,000",
      duration: "4 Weeks",
      status: "CLOSED",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Available Courses</Text>

      {courses.map((course) => (
        <View key={course.id} style={styles.card}>
          <Text style={styles.title}>{course.name}</Text>

          <Text>Price: Tsh {course.price}</Text>

          <Text>Duration: {course.duration}</Text>

          <Text
            style={[
              styles.status,

              course.status === "OPEN"
                ? styles.open
                : course.status === "ONGOING"
                  ? styles.ongoing
                  : styles.closed,
            ]}
          >
            Status: {course.status}
          </Text>

          {course.status === "OPEN" ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/course-details")}
            >
              <Text style={styles.buttonText}>Request Control Number</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.closedText}>Registration Closed</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  status: {
    marginTop: 10,
    fontWeight: "bold",
  },

  open: {
    color: "green",
  },

  ongoing: {
    color: "orange",
  },

  closed: {
    color: "red",
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  closedText: {
    color: "red",
    marginTop: 15,
    fontWeight: "bold",
  },
});
