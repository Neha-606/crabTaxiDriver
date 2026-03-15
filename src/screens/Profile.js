import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert
} from "react-native";

import Ionicons from "@react-native-vector-icons/ionicons";
import { ThemeContext } from "../Theme/ThemeContext";
import API from "../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen({ navigation }) {

  const { theme } = useContext(ThemeContext);

  const [fullname, setFullname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [houseNumber, setHouseNumber] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");


  // SAVE PROFILE
  const saveProfile = async () => {

    if (!fullname || !dateOfBirth || !address) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {

      const token = await AsyncStorage.getItem("token");

      const formData = new FormData();

      formData.append("fullname", fullname);
      formData.append("dateOfBirth", dateOfBirth);

      formData.append(
        "address",
        JSON.stringify([
          {
            houseNumber,
            area,
            landmark,
            city,
            state,
            country,
            pincode
          }
        ])
      );
      if (avatar) {
        formData.append("avatar", {
          uri: avatar,
          type: "image/jpeg",
          name: "avatar.jpg"
        });
      }

      const response = await API.post(
        "/api/v1/driver/driver-profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log("PROFILE CREATED:", response.data);

      Alert.alert("Success", "Driver profile created successfully");

    } catch (error) {

      console.log(
        "PROFILE ERROR:",
        error?.response?.data || error.message
      );

      Alert.alert(
        "Error",
        error?.response?.data?.message || "Profile creation failed"
      );

    }

  };

  return (

    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={{ paddingBottom: 40 }}
    >

      {/* CLOSE BUTTON */}

      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => navigation.goBack()}
      >

        <Ionicons
          name="close"
          size={26}
          color="red"
          style={{
            borderWidth: 2,
            borderColor: theme.primary,
            padding: 4
          }}
        />

      </TouchableOpacity>

      {/* TITLE */}

      <Text style={[styles.title, { color: theme.primary }]}>
        Driver Profile
      </Text>

      {/* AVATAR */}

      <View style={styles.avatarBox}>

        <Image
          source={
            avatar
              ? { uri: avatar }
              : require("../assets/profile.jpg")
          }
          style={styles.avatar}
        />

      </View>

      {/* FULL NAME */}

      <TextInput
        placeholder="Full Name"
        value={fullname}
        onChangeText={setFullname}
        style={[
          styles.input,
          { borderColor: theme.primary, color: theme.text }
        ]}
      />

      {/* DATE OF BIRTH */}

      <TextInput
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        style={[
          styles.input,
          { borderColor: theme.primary, color: theme.text }
        ]}
      />

      {/* ADDRESS */}

      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={[
          styles.input,
          { borderColor: theme.primary, color: theme.text }
        ]}
      />
      <TextInput
 placeholder="House Number"
 value={houseNumber}
 onChangeText={setHouseNumber}
 style={[
  styles.input,
  { borderColor: theme.primary, color: theme.text }
]}
/>

<TextInput
 placeholder="Area"
 value={area}
 onChangeText={setArea}
 style={[
  styles.input,
  { borderColor: theme.primary, color: theme.text }
]}
/>

<TextInput
 placeholder="Landmark"
 value={landmark}
 onChangeText={setLandmark}
 style={[
  styles.input,
  { borderColor: theme.primary, color: theme.text }
]}
/>
<TextInput
 placeholder="City"
 value={city}
 onChangeText={setCity}
 style={[
  styles.input,
  { borderColor: theme.primary, color: theme.text }
]}
/>
<TextInput
 placeholder="State"
 value={state}
 onChangeText={setState}
 style={[
  styles.input,
  { borderColor: theme.primary, color: theme.text }
]}
/>

<TextInput
 placeholder="Country"
 value={country}
 onChangeText={setCountry}
 style={[
  styles.input,
  { borderColor: theme.primary, color: theme.text }
]}
/>
<TextInput
 placeholder="Pincode"
 value={pincode}
 onChangeText={setPincode}
 style={[
  styles.input,
  { borderColor: theme.primary, color: theme.text }
]}
/>

      {/* SAVE BUTTON */}

      <TouchableOpacity
        style={[styles.saveBtn, { backgroundColor: theme.primary }]}
        onPress={saveProfile}
      >

        <Text style={styles.saveText}>
          Save Profile
        </Text>

      </TouchableOpacity>

    </ScrollView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 20
  },

  closeBtn: {
    marginTop: 20,
    width: 40
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30
  },

  avatarBox: {
    alignItems: "center",
    marginBottom: 30
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },

  input: {
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    fontSize: 16
  },

  saveBtn: {
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10
  },

  saveText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }

});