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

export default function SignUpPage() {
  const router = useRouter();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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

            <Text style={styles.heading}>Create Account</Text>

            <Text style={styles.subHeading}>
              Join MovieZone and start watching.
            </Text>

            {/* Form */}
            <View style={styles.formContainer}>

              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="gray"
              />

              <TextInput
                style={styles.input}
                placeholder="Surname"
                placeholderTextColor="gray"
              />

              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="gray"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="gray"
                keyboardType="phone-pad"
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry
              />

            </View>

            {/* Terms */}
            <View style={styles.termsContainer}>

              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => setAcceptedTerms(!acceptedTerms)}
              >
                {acceptedTerms && (
                  <AntDesign
                    name="check"
                    size={14}
                    color="white"
                  />
                )}
              </TouchableOpacity>

              <View style={styles.termsTextContainer}>

                <Text style={styles.termsText}>
                  Yes I understand and agree to the Moviezone Terms of
                  Service, including the
                </Text>

                <View style={styles.linksRow}>
                  <TouchableOpacity>
                    <Text style={styles.redLink}>
                      User Agreement and Privacy Policy
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>

            {/* Sign Up */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Login */}
            <View style={styles.loginContainer}>

              <Text style={styles.loginText}>
                Already have an account?
              </Text>

              <TouchableOpacity
                onPress={() => router.push('/login')}
              >
                <Text style={styles.loginLink}>
                  Login
                </Text>
              </TouchableOpacity>

            </View>

            {/* Divider */}
            <View style={styles.dividerContainer}>

              <View style={styles.divider} />

              <Text style={styles.dividerText}>
                or sign up with
              </Text>

              <View style={styles.divider} />

            </View>

            {/* Social Buttons */}
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

  termsContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
    marginBottom: 25,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    marginRight: 10,
  },

  termsTextContainer: {
    flex: 1,
  },

  termsText: {
    color: 'white',
    fontSize: 14,
  },

  linksRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2,
  },

  redLink: {
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

  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 25,
    alignItems: 'center',
  },

  loginText: {
    color: 'white',
    fontSize: 15,
  },

  loginLink: {
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