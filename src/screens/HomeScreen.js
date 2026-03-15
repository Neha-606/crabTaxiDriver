import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import MapView from "react-native-maps";
import Ionicons from '@react-native-vector-icons/ionicons';

export default function HomeScreen({ navigation }) {
  const [status, setStatus] = useState("Offline");

  const getColor = () => {
    if (status === "Online") return "green";
    if (status === "Break") return "blue";
    return "red";
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 28.6139,
          longitude: 77.209,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />

      <TouchableOpacity
        style={styles.menuBtn}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={28} color="green" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.statusBtn, { backgroundColor: getColor() }]}
        onPress={() =>
          setStatus(
            status === "Offline"
              ? "Online"
              : status === "Online"
              ? "Break"
              : "Offline"
          )
        }
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          {status}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuBtn: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  statusBtn: {
    position: "absolute",
    top: 50,
    left: 130,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
});