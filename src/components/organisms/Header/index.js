import { useContext } from 'react'
import { Image, View } from 'react-native'

import { AuthContext } from '../../../context/auth.context'
import { styles } from './index.style'
import Text from '../../atoms/Text'

export default function Header() {
  const { user } = useContext(AuthContext)

  return (
    <View style={styles.wrapper}>
      <View style={styles.profile}>
        <Text>{user.email}</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../../assets/profile.png')}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  )
}
