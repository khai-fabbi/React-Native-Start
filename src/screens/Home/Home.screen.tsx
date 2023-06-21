import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { images } from '~/assets/images'
import { scale } from '~/utils/scale'

const Home = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.headerWrapper}>
        <Image style={styles.avatarImg} source={images.avatar} />
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeNameText} numberOfLines={1}>
            Hi, Khai 👏
          </Text>
          <Text style={styles.welcomeDescriptionText} numberOfLines={1}>
            Discover fashion that suit your style
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
