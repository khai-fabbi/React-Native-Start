import * as React from 'react'
import { StyleSheet, Modal, ModalProps, View } from 'react-native'
import colors from '~/theme/color'
import { isTabletDevices, scale, verticalScale } from '~/utils/scale'

type ModalPrimaryProps = {
  visiable?: boolean
} & ModalProps &
  React.PropsWithChildren

const ModalPrimary = ({ visiable, children, ...props }: ModalPrimaryProps) => {
  return (
    <Modal
      visible={visiable}
      animationType="fade"
      statusBarTranslucent
      transparent
      {...props}>
      <View style={styles.viewContainer}>
        <View style={styles.viewModal}>{children}</View>
      </View>
    </Modal>
  )
}

export default ModalPrimary

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewModal: {
    backgroundColor: 'white',
    width: isTabletDevices() ? '90%' : scale(345),
    height: isTabletDevices() ? scale(650) : scale(600),
    position: 'absolute',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(5),
  },
  title: {
    color: colors.main,
  },
})
