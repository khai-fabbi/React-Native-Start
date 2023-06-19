import * as React from 'react'
import { TextInput, View, StyleSheet, TextInputProps } from 'react-native'
import colors from '~/theme/color'

interface InputProps extends TextInputProps {}

const Input = (props: InputProps) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor={colors.gray}
    />
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    borderColor: colors.borderInput,
    borderWidth: 1,
    margin: 5,
    backgroundColor: colors.white,
    color: colors.main,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 9999,
    elevation: 10,
    shadowColor: 'black',
  },
})
