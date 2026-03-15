import API from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createDriverProfile = async (data) => {
  try {

    const token = await AsyncStorage.getItem("token");

    const response = await API.post(
      "/api/v1/driver/driver-profile",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;

  } catch (error) {

    console.log(
      "DRIVER PROFILE ERROR:",
      error.response?.data || error.message
    );

    throw error;
  }
};