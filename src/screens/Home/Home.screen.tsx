import React, { useState } from 'react'
import { SafeAreaView, Text, StyleSheet, Dimensions, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonPrimary } from '~/components/button'
import ModalPrimary from '~/components/modal/ModalPrimary'
import { RootState } from '~/stores'
import { increment } from '~/stores/common.reducer'
import colors from '~/theme/color'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
const Home = () => {
  const [open, setOpen] = useState(false)
  const count = useSelector((state: RootState) => state.common.count)
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Text style={styles.title}>Home Page</Text>
      <View style={styles.count}>
        <Text style={styles.textCount}>{count}</Text>
      </View>
      <ButtonPrimary title="Click" onPress={() => dispatch(increment())} />
      <ModalPrimary visiable={open} onRequestClose={() => setOpen(false)}>
        <Text style={{ color: colors.main }}>Quang Khai</Text>
      </ModalPrimary>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: colors.main,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 0.15 * windowHeight,
  },
  count: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 9999,
    width: 50,
    height: 50,
  },
  textCount: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.main,
    borderColor: colors.gray,
  },
})
