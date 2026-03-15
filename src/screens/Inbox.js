import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../Theme/ThemeContext';

const Inbox = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="close"
          size={30}
          color={'red'}
          style={[styles.closeIcon, { borderColor: theme.primary }]}
        />
        <Text style={[styles.headerText, { color: theme.primary }]}>
          INBOX
        </Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity
          style={[styles.item, { borderColor: theme.primary }]}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Text style={[styles.itemText, { color: theme.text }]}>
            Notifications
          </Text>
          <Icon
            name="notifications-outline"
            size={26}
            color={theme.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.item, { borderColor: theme.primary }]}
          onPress={() => navigation.navigate("MessagesScreen")}
        >
          <Text style={[styles.itemText, { color: theme.text }]}>
            Messages
          </Text>
          <Icon
            name="chatbubbles-outline"
            size={26}
            color={theme.primary}
          />
        </TouchableOpacity>
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

  closeIcon: {
    borderWidth: 3,
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
});

export default Inbox;