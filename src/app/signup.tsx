import * as Device from 'expo-device';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  ViewStyle,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#050505e3', '#030303']}
        style={styles.linearGradient}
      >
        <View style={styles.mainContent}>
          <View style={styles.title}>
            <Text style={styles.text}>Movie</Text>
            <Text style={styles.zone}>Zone</Text>
          </View>

          <Text style={styles.description}>Welcome Back!</Text>
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

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or sign in with</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="facebook-f" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <AntDesign name="google" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Not yet registered? </Text>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
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
    flex: 1,
  },

  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  code: {
    textTransform: 'uppercase',
  },

  stepContainer: {
    alignSelf: 'stretch',
  },

  text: {
    color: 'white',
    fontSize: 25,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  zone: {
    color: 'red',
    fontSize: 25,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  description: {
    color: 'white',
    fontSize: 18,
    lineHeight: 36,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  description1: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 40,
  },

  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 20,
  },

  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 40,
  },

  button: {
    backgroundColor: 'red',
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  linearGradient: {
    flex: 1,
  } as ViewStyle,

  formContainer: {
    flexDirection: 'column',
    gap: 30,
    width: '90%',
  },

  input: {
    height: 50,
    color: 'white',
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 16,
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#555',
  },

  dividerText: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 14,
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginTop: 10,
  },

  socialButton: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  signupText: {
    color: 'white',
    fontSize: 15,
  },

  signupLink: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  },
});