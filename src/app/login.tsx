import React, { useState } from 'react';
import {
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
import { useRouter } from 'expo-router';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

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

            {/* Logo */}
            <View style={styles.title}>
              <Text style={styles.movie}>Movie</Text>
              <Text style={styles.zone}>Zone</Text>
            </View>

            {/* Heading */}
            <Text style={styles.heading}>Welcome Back</Text>

            <Text style={styles.subHeading}>
              Sign in to continue watching.
            </Text>

            {/* Login Form */}
            <View style={styles.formContainer}>

              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="gray"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              {/* Password */}
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Password"
                  placeholderTextColor="gray"
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />

                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <AntDesign
                    name={showPassword ? 'eye' : 'eyeo'}
                    size={22}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>

            </View>

            {/* Forgot Password */}
            <View style={styles.forgotContainer}>
              <TouchableOpacity>
                <Text style={styles.forgotText}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Sign Up */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>
                Don't have an account?
              </Text>

              <TouchableOpacity
                onPress={() => router.push('/signup')}
              >
                <Text style={styles.signupLink}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {/* Divider */}
            <View style={styles.dividerContainer}>

              <View style={styles.divider} />

              <Text style={styles.dividerText}>
                or sign in with
              </Text>

              <View style={styles.divider} />

            </View>

            {/* Social Login */}
            <View style={styles.socialContainer}>

              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome
                  name="facebook-f"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                <AntDesign
                  name="google"
                  size={24}
                  color="black"
                />
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
    paddingHorizontal: 20,
  },

  title: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  movie: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },

  zone: {
    color: 'red',
    fontSize: 36,
    fontWeight: 'bold',
  },

  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subHeading: {
    color: '#b5b5b5',
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },

  formContainer: {
    width: '90%',
    gap: 18,
  },

  input: {
    height: 52,
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 15,
    color: 'white',
    paddingHorizontal: 18,
    fontSize: 16,
  },

  passwordContainer: {
    height: 52,
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  passwordInput: {
    flex: 1,
    height: '100%',
    color: 'white',
    paddingHorizontal: 18,
    fontSize: 16,
  },

  eyeButton: {
    paddingHorizontal: 15,
  },

  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end',
    marginTop: 12,
    marginBottom: 25,
  },

  forgotText: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },

  button: {
    width: '90%',
    height: 52,
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 25,
    alignItems: 'center',
  },

  signupText: {
    color: 'white',
    fontSize: 15,
  },

  signupLink: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 4,
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
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
    gap: 15,
  },

  socialButton: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});