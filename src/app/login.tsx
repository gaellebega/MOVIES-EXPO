import * as Device from 'expo-device';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { Platform, StyleSheet, Text, TextInput, View, Image, ImageBackground, ViewStyle, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
// import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useState } from 'react';

export default function LoginPage() {

  return (
    <SafeAreaView style={styles.safeArea}>
      
       <LinearGradient 
      colors={['#050505e3','#030303']} 
      style={styles.linearGradient}
    >
      <View style={styles.mainContent}>
        <View style={styles.title}>
          <Text style={styles.text}>Movie</Text>
      <Text style={styles.zone}>Zone</Text>
          </View>
      <Text style={styles.description}>Welcome to Movie Zone!</Text>
      <Text style={styles.description1}>Please sign in to continue</Text>
        <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email/Phone number"
              placeholderTextColor="gray"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
            />
        </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      </View>
      </LinearGradient>

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
    position: 'fixed',
    width: '100%',
    height: '100%',
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
  text:{
    color: 'white',
    fontSize: 25,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  zone:{
    color: 'red',
    fontSize: 25,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description:{
    color: 'white',
    fontSize: 18,
    lineHeight: 36,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description1:{
    color: 'white',
    fontSize: 16,
    lineHeight: 2,
    textAlign: 'center',
    paddingBottom: 40,
  },
  mainContent:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    
  },
  title:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 40,
  },
  button:{
    backgroundColor: 'red',
    height: 50,
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: 'white',    
    padding: 20,
    marginTop: 20,
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linearGradient: {
    flex: 1,          // Takes up 100% of the screen height and width   // Forces full height edge-to-edg  // Optional: centers content horizontally
  } as ViewStyle,
  formContainer:{
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    width: '90%',
},
input: {
    height: 50,
    color: 'white',
    padding: 20,
    borderStyle: 'solid',
    borderRadius: 15,
    backgroundColor: '#1c1c1c',
    borderColor: 'gray',
    fontSize: 16,
    // outlineStyle: 'none',
  }

});

