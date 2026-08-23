import * as Device from 'expo-device';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#050505e3', '#030303']}
        style={styles.linearGradient}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.mainContent}>
            <View style={styles.title}>
              <Text style={styles.text}>Movie</Text>
              <Text style={styles.zone}>Zone</Text>
            </View>

            <Text style={styles.description}>Welcome Back!</Text>
            <Text style={styles.description1}>
              Please sign in to continue
            </Text>

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
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  linearGradient: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 30,
  },

  mainContent: {
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 20,
  },

  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },

  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },

  zone: {
    color: 'red',
    fontSize: 36,
    fontWeight: 'bold',
  },

  description: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  description1: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },

  formContainer: {
    width: '90%',
    gap: 20,
  },

  input: {
    height: 52,
    color: 'white',
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 16,
  },

  button: {
    backgroundColor: 'red',
    height: 52,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
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
    gap: 15,
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
    marginTop: 20,
    marginBottom: 20,
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