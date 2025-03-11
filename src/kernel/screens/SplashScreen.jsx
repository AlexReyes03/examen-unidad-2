import { StyleSheet, Image, Text, View } from 'react-native';
import { useEffect } from 'react';
import React from 'react';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnULcBfSqH9C3ooVVkPDA9rxRyqHoR3M1ng&s' }} style={styles.logo} />
      <Text style={styles.text}>FACEBOOK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1877F2',
    marginTop: 10,
  },
});
