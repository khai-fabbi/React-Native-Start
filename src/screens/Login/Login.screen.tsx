import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { ButtonPrimary } from '~/components/button'
import { Input } from '~/components/input'
import ModalPrimary from '~/components/modal/ModalPrimary'
import colors from '~/theme/color'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
const SignIn = ({ navigation }: { navigation: any }) => {
  const [open, setOpen] = useState(false)

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ImageBackground
        style={styles.imageBg}
        source={{ uri: 'https://reactjs.org/logo-og.png' }}
        resizeMode="cover">
        <View style={styles.outerWrapper}>
          <Icon name={'ios-home'} size={60} color={'purple'} />

          <View style={styles.contentWrapper}>
            <View style={styles.formControl}>
              <Text style={styles.labelInput}>Username</Text>
              <Input placeholder="Enter your username" style={styles.input} />
            </View>
            <View style={styles.formControl}>
              <Text style={styles.labelInput}>Password</Text>
              <Input
                placeholder="Enter your password"
                style={styles.input}
                secureTextEntry
              />
            </View>
            <ButtonPrimary
              title="Click Me!"
              style={styles.btnSubmit}
              onPress={() => navigation.navigate('TabsStack')}
            />

            {/* modal */}
          </View>
        </View>
      </ImageBackground>
      <ModalPrimary visiable={open} onRequestClose={() => setOpen(false)}>
        <Text style={{ color: colors.main }}>Quang Khai</Text>
      </ModalPrimary>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  SafeAreaView: { flex: 1 },
  imageBg: {
    flex: 1,
  },
  outerWrapper: {
    flex: 1,
    marginTop: 0.2 * windowHeight,
    alignItems: 'center',
  },
  formControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelInput: {
    color: colors.main,
  },
  input: {
    flexGrow: 1,
    marginLeft: 15,
  },
  contentWrapper: {
    marginTop: 20,
    width: 0.8 * windowWidth,
  },
  btnSubmit: {
    marginTop: 20,
  },
})
