import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const UserProfile = () => {
  return (
    <SafeAreaView>
      <View>
        <Icon name="ios-settings" size={100} color={'green'} />
      </View>
      <View
        style={{
          alignContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 10,
        }}>
        <Text style={{ color: '#808080' }}>by Handi.dev</Text>
      </View>
    </SafeAreaView>
  )
}

export default UserProfile
