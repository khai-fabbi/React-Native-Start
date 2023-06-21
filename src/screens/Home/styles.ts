import { StyleSheet, Dimensions } from 'react-native'
import colors from '~/theme/color'
import { moderateScale, scale, verticalScale } from '~/utils/scale'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    padding: scale(24),
  },
  avatarImg: {
    width: 52,
    height: 52,
    // aspectRatio: 1,
    borderRadius: 9999,
  },
  welcomeContainer: {
    flex: 1,
    paddingHorizontal: scale(8),
  },
  welcomeNameText: {
    color: colors.main,
    fontWeight: '600',
    fontSize: moderateScale(18),
  },
  welcomeDescriptionText: {
    marginTop: verticalScale(8),
    color: colors.main,
    opacity: 0.5,
  },
})
