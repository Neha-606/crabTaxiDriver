import API from "./api";

export const registerDriver = async (data) => {

  try {

    const response = await API.post(
      "/api/v1/users/register",
      data
    );

    return response.data;

  } catch (error) {

    console.log(
      "REGISTER ERROR:",
      error.response?.data || error.message
    );

    throw error;
  }
};

export const loginDriver = async (data) => {

    try {
  
      const response = await API.post(
        "/api/v1/users/login",
        data
      );
  
      return response.data;
  
    } catch (error) {
  
      console.log(
        "LOGIN ERROR:",
        error.response?.data || error.message
      );
  
      throw error;
    }
  };