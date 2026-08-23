import * as Device from 'expo-device';
import { Platform, StyleSheet, Text, TextInput, View, Image, ImageBackground, ViewStyle, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
// import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useState } from 'react';
import { Link } from 'expo-router/build/react-navigation';

export default function HomeScreen() {

 const [button, setButton] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={require('./bg.png')} resizeMode='cover' style={styles.images} >
      
       <LinearGradient 
      colors={['#4e4e5246', '#181717','#030303']} 
      style={styles.linearGradient}
    >
      <View style={styles.mainContent}>
        <View style={styles.title}>
          <Text style={styles.text}>Movie</Text>
      <Text style={styles.zone}>Zone</Text>
          </View>
      <Text style={styles.description}>Your Number one movie app</Text>
      <Link href='/login'>
      <TouchableOpacity style={styles.button} onPress={() => setButton(!button)}>
        <Text style={styles.buttonText}>Watch Movies</Text>
      </TouchableOpacity>
      </Link>
      </View>

      </LinearGradient>
      </ImageBackground>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // paddingHorizontal: Spacing.four,
    // gap: Spacing.four,
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    // gap: Spacing.three,
    alignSelf: 'stretch',
    // paddingHorizontal: Spacing.three,
    // paddingVertical: Spacing.four,
    // borderRadius: Spacing.four,
  },
  images:{
    flex: 1,
    justifyContent: 'center',
    position: 'fixed',
    width: '100%',
    height: '100%',
    
  },
  text:{
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  zone:{
    color: 'red',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description:{
    color: 'white',
    fontSize: 18,
    lineHeight: 36,
    textAlign: 'center',
  },
  mainContent:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    
  },
  title:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor: 'red',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    color: 'white',    
    padding: 20
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linearGradient: {
    flex: 1,          // Takes up 100% of the screen height and width   // Forces full height edge-to-edge
    justifyContent: 'center', // Optional: centers content vertically
    alignItems: 'center',    // Optional: centers content horizontally
  } as ViewStyle,
});

