import { StyleSheet } from 'react-native'
import { AppColors } from '../../../config/colors'

export const styles = StyleSheet.create({
  image: {
    opacity: 0.25,
    width: 120,
    height: 120
  },
  text: {
    width: '50%',
    color: AppColors.neutral_500,
    textAlign: 'center'
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  }
})
