import * as React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native'
import colors from '~/theme/color'
import sizes from '~/theme/sizes'
import { moderateScale } from '~/utils/scale'

type ButtonPrimaryProps = {
  title: string
  style?: ViewStyle
  textStyle?: TextStyle
} & TouchableOpacityProps

const ButtonPrimary = ({
  title,
  style,
  textStyle,
  ...props
}: ButtonPrimaryProps) => {
  return (
    <TouchableOpacity {...props} style={[styles.btnContainer, style]}>
      <Text style={{ ...styles.btnText, ...textStyle }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.bgBtn,
    paddingVertical: 12,
    paddingHorizontal: 24,
    margin: 5,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: -10,
      height: 10,
    },
    shadowOpacity: 2.28,
    shadowRadius: 16,
    elevation: 20,
  },
  btnText: {
    color: colors.white,
    fontSize: moderateScale(sizes.buttonTextSize),
    letterSpacing: 1.1,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
})
