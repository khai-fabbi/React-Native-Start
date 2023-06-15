import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from '../Home/Home.style'
import Icon from 'react-native-vector-icons/Ionicons'

const UserProfile = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.outerWrapper}>
        <Icon name={'ios-settings'} size={100} color={'green'} />
        <View>
          <TouchableOpacity
            onPress={() => Alert.alert('this is Profile Screen')}
            style={styles.buttonStyle}>
            <Text style={styles.text}>
              this is{' '}
              <Text style={{ fontWeight: 'bold', color: 'green' }}>
                PROFILE
              </Text>
              screen
            </Text>
          </TouchableOpacity>
        </View>
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
