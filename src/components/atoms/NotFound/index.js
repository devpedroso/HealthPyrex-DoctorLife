import { Image, View } from 'react-native'

import Text from '../Text'
import { styles } from './index.style'

export function NotFound() {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../../../../assets/not-found.png')}
        style={styles.image}
      />
      <Text style={styles.text}>
        Parece que você ainda não tem nada por aqui!
      </Text>
    </View>
  )
}
