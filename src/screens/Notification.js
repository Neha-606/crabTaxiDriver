import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from '../Theme/ThemeContext'

const Notifications = ({ navigation }) => {

  const { theme } = useContext(ThemeContext)

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="close"
          size={30}
          color="red"
          style={{ borderWidth: 3, borderColor: theme.primary }}
        />

        <Text style={[styles.headerText, { color: theme.primary }]}>
          Notifications
        </Text>
      </TouchableOpacity>

      <View>
        {[1,2,3,4,5].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.item,
              {
                borderColor: theme.primary,
                backgroundColor: theme.card
              }
            ]}
          >
            <Text style={[styles.itemText, { color: theme.text }]}>
              Driver Arriving
            </Text>

            <Icon
              name="notifications-outline"
              size={26}
              color={theme.primary}
            />
          </TouchableOpacity>
        ))}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },

  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  itemText: {
    fontSize: 18,
    fontWeight: '600',
  },
})

export default Notifications