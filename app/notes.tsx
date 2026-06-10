import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import * as WebBrowser from "expo-web-browser";

import { db } from "../firebaseConfig";

type Note = {
  id: string;
  title: string;
  course: string;
  pdfUrl: string;
};

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const snapshot = await getDocs(collection(db, "notes"));

      const data: Note[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Note, "id">),
      }));

      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const openPDF = async (url: string) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Course Notes
      </Text>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => openPDF(item.pdfUrl)}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 15,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {item.title}
            </Text>

            <Text>{item.course}</Text>

            <Text
              style={{
                color: "blue",
                marginTop: 10,
              }}
            >
              Open PDF
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
