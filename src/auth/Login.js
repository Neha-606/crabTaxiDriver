import React, { useState } from "react";
import Icon from "@react-native-vector-icons/ionicons";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginDriver } from "../api/authApi";

const Login = ({ navigation }) => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const handleLogin = async () => {

    if(!email || !password){
      Alert.alert("Error","Email and Password required");
      return;
    }

    try{

      setLoading(true);

      const response = await loginDriver({
        email,
        password
      });

      console.log("LOGIN RESPONSE:",response);

      const token = response?.data?.accessToken;
      const user = response?.data?.user;

      if(!token){
        Alert.alert("Login Failed","Token not received");
        return;
      }

      // ensure driver login only
      if(user?.role !== "DRIVER"){
        Alert.alert("Access Denied","This app is only for drivers");
        return;
      }

      // store token
      await AsyncStorage.setItem("token",token);

      // store user
      await AsyncStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      Alert.alert("Success","Login successful");

      navigation.replace("ChooseVehicle");

    }catch(error){

      console.log(
        "LOGIN ERROR:",
        error?.response?.data || error
      );

      Alert.alert(
        "Error",
        error?.response?.data?.message || "Login Failed"
      );

    }finally{
      setLoading(false);
    }

  };

  const handleForgotPassword = async () => {

    if(!email){
      Alert.alert("Enter email first");
      return;
    }

    try{

      const res = await forgotPassword(email);

      Alert.alert("Success",res?.message);

    }catch(error){

      Alert.alert(
        "Error",
        error?.response?.data?.message || "Something went wrong"
      );

    }

  };

  return (

<SafeAreaView style={styles.container}>

<ScrollView contentContainerStyle={styles.scrollContent}>

<View style={styles.content}>

<View style={styles.logoContainer}>
<Image
source={require("../assets/logo.png")}
style={styles.logo}
/>
</View>

<Text style={styles.subtitle}>
Enter your login details
</Text>

<View style={styles.inputContainer}>
<TextInput
style={styles.input}
placeholder="Enter email"
value={email}
onChangeText={setEmail}
autoCapitalize="none"
/>
<Icon name="person" size={22} color="#00bf63" />
</View>

<View style={styles.inputContainer}>
<TextInput
style={styles.input}
placeholder="Enter Password"
value={password}
onChangeText={setPassword}
secureTextEntry
/>
<Icon name="lock-closed" size={22} color="#00bf63" />
</View>

<TouchableOpacity onPress={handleForgotPassword}>
<Text style={{color:"blue"}}>
Forgot Password?
</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.loginButton}
onPress={handleLogin}
disabled={loading}
>

{loading
? <ActivityIndicator color="#000"/>
: <Text style={styles.loginButtonText}>
Log in
</Text>
}

</TouchableOpacity>

<TouchableOpacity
style={styles.loginButton}
onPress={()=>navigation.navigate("Register")}
>

<Text style={styles.loginButtonText}>
New Driver? Register Here
</Text>

</TouchableOpacity>

</View>

</ScrollView>

</SafeAreaView>

  );

};

export default Login;

const styles = StyleSheet.create({

container:{flex:1,backgroundColor:"#fff"},

scrollContent:{
flexGrow:1,
justifyContent:"center",
padding:20
},

content:{
alignItems:"center"
},

logoContainer:{
marginBottom:20
},

logo:{
width:250,
height:100
},

subtitle:{
fontSize:20,
fontWeight:"600",
marginBottom:20
},

inputContainer:{
flexDirection:"row",
alignItems:"center",
borderWidth:1,
borderColor:"#00bf63",
borderRadius:8,
marginBottom:10,
paddingHorizontal:10
},

input:{
flex:1,
padding:14,
fontSize:16
},

loginButton:{
backgroundColor:"#00bf63",
borderRadius:8,
padding:16,
alignItems:"center",
marginTop:10,
width:"100%"
},

loginButtonText:{
color:"#000",
fontSize:18,
fontWeight:"600"
}

});