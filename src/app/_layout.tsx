import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import HomeScreen from '.';
import LoginPage from './login';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
  <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerShown: false,

      }}
    >
      {/* Define screens and customize titles */}
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="login" options={{ title: 'Login Page' }} />
   </Stack>
    
  );
}
