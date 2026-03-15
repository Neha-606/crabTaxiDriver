import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeContext';

import Ionicons from '@react-native-vector-icons/ionicons';

const CustomDrawer = ({ navigation }) => {



  const { theme, toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        
        <TouchableOpacity 
          onPress={() => navigation.closeDrawer()}
          style={styles.closeBtn}
        >
          <Ionicons name="close" size={30} color="red" />
        </TouchableOpacity>

        <Ionicons name="person" style={[styles.profileIcon, { color: theme.text }]} />
      </View>



      {["Profile", "Inbox", "Earnings", "Documents", "Help", "Settings"].map(
        (item) => (
          <TouchableOpacity 
            key={item} 
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate(item);
              navigation.closeDrawer();
            }}
          >
            <Text style={[styles.menuText, { color: theme.text }]}>
              {item}
            </Text>
          </TouchableOpacity>
        )
      )}

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.logout}
        onPress={() => navigation.navigate('Login')}>Log Out</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={toggleTheme}
        style={styles.night}
      >
        <Text style={{ color: theme.text, fontSize: 18 }}>
          {isDark ? (
            <Ionicons name="sunny" size={20} color="orange" />
          ) : (
            <Ionicons name="moon" size={20} color="black" />
          )}
        </Text>
        <Text style={{ color: theme.text, fontSize: 18, marginLeft: 8 }}>
    {isDark ? 'Day Mode' : 'Night Mode'}
  </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderColor: "#00bf63",
    borderRadius: 10,
  },

  closeBtn: {
    borderWidth: 3,
    borderColor: "#00bf63",
  },

  profileIcon: {
    fontSize: 50,
    borderWidth: 2,
    borderColor: "#00bf63",
    padding: 10,
    borderRadius: 40,
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 15,
  },

  menuItem: {
    paddingVertical: 12,
  },

  menuText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },

  logout: {
    fontSize: 18,
    fontWeight: "700",
    color: "red",
    textAlign: "center",
  },

  emergencyBtn: {
    flexDirection: "row",
    backgroundColor: "red",
    padding: 14,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  emergencyText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  night: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
});

export default CustomDrawer