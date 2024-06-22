import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  HomeScreen: undefined;
};

type SplashScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'HomeScreen'>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', 
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
  },
});

export default SplashScreen;
