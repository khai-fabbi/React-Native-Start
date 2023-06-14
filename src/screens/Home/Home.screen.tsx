import React from 'react'
import { SafeAreaView, View, Alert } from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { ButtonPrimary } from '~/components/button'

const Home = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      <View style={styles.outerWrapper}>
        <Icon name={'ios-home'} size={100} color={'purple'} />
        <ButtonPrimary
          title="Click Me!"
          style={{ backgroundColor: 'red' }}
          onPress={() => Alert.alert('Click')}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home
