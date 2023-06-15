import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { ButtonPrimary } from '~/components/button'
import { Input } from '~/components/input'
import ModalPrimary from '~/components/modal/ModalPrimary'
import colors from '~/theme/color'

const Home = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.outerWrapper}>
        <Icon name={'ios-home'} size={100} color={'purple'} />

        <Input placeholder="Enter your name" />
        <ButtonPrimary title="Click Me!" onPress={() => setOpen(!open)} />
        <ModalPrimary visiable={open} onRequestClose={() => setOpen(false)}>
          <Text style={{ color: colors.main }}>Quang Khai</Text>
        </ModalPrimary>
      </View>
    </SafeAreaView>
  )
}

export default Home
