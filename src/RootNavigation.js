import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { WelcomeScreen } from './screens/WelcomeScreen';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
        <AuthNavigation />
    </NavigationContainer>
  )
}
