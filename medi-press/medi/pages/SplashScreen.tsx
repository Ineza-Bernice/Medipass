import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, Image } from 'react-native'

const { height, width } = Dimensions.get('window');

const SplashScreen = () => {
  return (
   <View>
    <ImageBackground
    source={require('../assets/images/Splash-bg.png')}
    style={styles.background}
    resizeMode="cover"
    >
      <View style={styles.logoWrapper}>
        <Image source={require('@/assets/images/Logo.png')} />
        <Text style={styles.logoName}>MEDIPASS</Text>
      </View>
    </ImageBackground>
   </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
},
background: {
    width: width,
    height: height,
    resizeMode: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
},
logoName: {
  color: '#09363B',
  fontSize: 32,
  fontWeight: 'bold'
},
logoWrapper: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  paddingBottom: 150
}
})