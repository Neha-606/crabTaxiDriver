/*import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  ActivityIndicator
} from "react-native";

import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";

export default function MapScreen() {

  const [location, setLocation] = useState(null);

  // Ask permission
  const requestLocationPermission = async () => {

    if (Platform.OS === "android") {

      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }

    return true;
  };

  // Get current location
  const getCurrentLocation = async () => {

    const hasPermission = await requestLocationPermission();

    if (!hasPermission) return;

    Geolocation.getCurrentPosition(
      (position) => {

        const { latitude, longitude } = position.coords;

        setLocation({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });

      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  // Loading
  if (!location) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="blue"/>
      </View>
    );
  }

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }

});*/