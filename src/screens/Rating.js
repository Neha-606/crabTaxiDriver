import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { ThemeContext } from "../Theme/ThemeContext";

export default function RatingScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

  
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="close" size={26} color="red" style={{ borderWidth: 2, borderColor: theme.primary, padding: 4 }}
             />
      </TouchableOpacity>

   
      <Text style={[styles.title, { color: theme.primary }]}>
        Ratings
      </Text>

      

      

      
      <View style={[styles.progressBox, { borderColor: theme.primary }]}>
        <View style={styles.progressBarBg}>
          <View style={styles.greenBar}>
            <Text style={styles.progressText}>17</Text>
          </View>
        </View>
        <Ionicons name="thumbs-up" size={28} color={theme.primary} />
      </View>

    
      <View style={[styles.progressBox, { borderColor: theme.primary }]}>
        <View style={styles.progressBarBg}>
          <View style={styles.redBar}>
            <Text style={styles.progressText}>03</Text>
          </View>
        </View>
        <Ionicons name="thumbs-down" size={28} color="red" />
      </View>

     
      <TouchableOpacity
        style={[styles.bigButton, { borderColor: theme.primary }]}
        onPress={() => navigation.navigate("Compliments")}
      >
        <Text style={[styles.bigButtonText, { color: theme.text }]}>
          Compliments
        </Text>
        <Ionicons name="heart-outline" size={22} color={theme.primary} />
      </TouchableOpacity>

    
      <TouchableOpacity
        style={[styles.bigButton, { borderColor: theme.primary }]}
        onPress={() => navigation.navigate("Complain")}
      >
        <Text style={[styles.bigButtonText, { color: theme.text }]}>
          Complaints
        </Text>
        <Ionicons name="warning-outline" size={22} color={theme.primary} />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  closeBtn: {
    marginTop: 20,
    width: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  
  progressBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderWidth: 1.5,
    borderRadius: 15,
    marginBottom: 30,
  },
  progressBarBg: {
    width: "80%",
    height: 30,
    backgroundColor: "#eee",
    borderRadius: 20,
    overflow: "hidden",
  },
  greenBar: {
    width: "70%",
    height: "100%",
    backgroundColor: "#2ECC71",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  redBar: {
    width: "30%",
    height: "100%",
    backgroundColor: "#ff4d4d",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  progressText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bigButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    borderWidth: 1.5,
    borderRadius: 15,
    marginBottom: 20,
  },
  bigButtonText: {
    fontSize: 18,
  },
});