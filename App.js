import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { AuthNavigation } from './src/screens/AuthNavigation';

export default function App() {
  return (
    <AuthNavigation/>
  // <WelcomeScreen/>
  // <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
