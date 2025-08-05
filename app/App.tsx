import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Notifications from '@/pages/Notifications';
import { Home } from '@/pages/Home';
import NoNotifications from '@/pages/NoNotifications';
import OnBoarding from '@/pages/Onboarding';
import SplashScreen from '@/pages/SplashScreen';
import Login from '@/pages/auth/Login';
import Signup from '@/pages/auth/Signup';
import Welcome from '@/pages/Welcome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Stack.Navigator initialRouteName='Splash'>
    <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NoNotifications"
          component={NoNotifications}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Onboarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Splash"
          component={SplashScreenWrapper}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
    </ScrollView>

  );
}

type SplashScreenProps = {
  navigation: StackNavigationProp<any, 'Splash'>;
};

const SplashScreenWrapper: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return <SplashScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
});