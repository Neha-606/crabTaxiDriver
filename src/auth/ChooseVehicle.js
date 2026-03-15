import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";

const VEHICLES = [
  {
    id: "1",
    name: "Honda CR-V-Hybrid",
    number: "A66123",
    image: require("../assets/car.png"), // replace with your car image
  },
  {
    id: "2",
    name: "Honda CR-V-Hybrid",
    number: "A66123",
    image: require("../assets/car1.webp"),
  },
];

export default function ChooseVehicleScreen({ navigation }) {

  const [selectedId, setSelectedId] = useState("1");

  const renderItem = ({ item }) => {
    const selected = item.id === selectedId;

    return (
      <TouchableOpacity
        style={[
          styles.card,
          selected && styles.selectedCard
        ]}
        onPress={() => setSelectedId(item.id)}
        activeOpacity={0.8}
      >
        {/* Green Dot */}
        <View style={[
          styles.radioOuter,
          selected && styles.radioSelected
        ]} />

        <Image source={item.image} style={styles.carImage} />

        <Text style={styles.vehicleName}>{item.name}</Text>
        <Text style={styles.vehicleNumber}>{item.number}</Text>

      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Please choose your Vehicle
      </Text>

      <FlatList
        data={VEHICLES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => navigation.navigate("DrawerNavigator")}
      >
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  heading: {
    fontSize: 30,
    fontWeight: "600",
    color: "#2ECC71",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 40,
    marginBottom: 30,
    marginTop:20,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
  },

  selectedCard: {
    borderColor: "#2ECC71",
  },

  radioOuter: {
    position: "absolute",
    top: 15,
    left: 15,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#E0E0E0",
  },

  radioSelected: {
    backgroundColor: "#2ECC71",
  },

  carImage: {
    width: 130,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },

  vehicleName: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 5,
  },

  vehicleNumber: {
    fontSize: 15,
    color: "#555",
    marginTop: 3,
  },

  confirmButton: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: "#2ECC71",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    elevation: 4,
  },

  confirmText: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  }

});