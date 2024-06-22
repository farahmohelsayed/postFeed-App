import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import PostDetailScreen from '../screens/postDetailScreen/PostDetailScreen';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{headerLeft:()=><>
        </>, title:'Feed', headerTitleAlign:'center'}}/>
        <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} options={{title:'Post',  headerTitleAlign:'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
