import { StyleSheet } from 'react-native'
import colors from '~/theme/color'

export default StyleSheet.create({
  SafeAreaView: { flex: 1, backgroundColor: colors.background },
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10,
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },
})
