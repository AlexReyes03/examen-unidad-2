// ProfileScreen.jsx
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from '@rneui/themed';
import React from 'react';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://placehold.co/400x200/png' }} 
        style={styles.cover} 
      />
      <Avatar
        size={200}
        rounded
        source={{ uri: 'https://lh3.googleusercontent.com/a-/ALV-UjWsiesZ73Kno8_QEZkc06v8OIZmF8GE9xA9oQpwXaYkQjEgQuuu=s512-c' }}
        containerStyle={styles.avatar}
      />
      <Text style={styles.name}>Erick Mireles Merchant</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.bigBlueButton}>
          <Text style={styles.buttonText}>Botón Azul</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallGreyButton}>
          <Icon name="ellipsis-h" type="font-awesome" size={20} color="#333" style={styles.iconDots} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconsRow}>
        <View style={styles.iconItem}>
          <Icon name="clock-o" type="font-awesome" size={24} color="#000" />
          <Text style={styles.iconText}>Texto Reloj</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="home" type="font-awesome" size={24} color="#000" />
          <Text style={styles.iconText}>Texto Casa</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="map-marker" type="font-awesome" size={24} color="#000" />
          <Text style={styles.iconText}>Texto Ubicación</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.ButtonFinal}>
        <Text style={styles.buttonText}>Gran Botón Azul</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  cover: { 
    width: '100%', 
    height: 200, 
    resizeMode: 'cover' 
  },
  avatar: { 
    position: 'absolute', 
    top: 100, 
    left: '27%', 
    borderWidth: 5, 
    borderColor: '#fff' 
  },
  name: { 
    fontSize: 27, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 120 
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  bigBlueButton: {
    width: '65%',
    backgroundColor: '#1877F2',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 10
  },
  smallGreyButton: {
    backgroundColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8
  },
  iconDots: {
    marginRight: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  buttonTextGrey: {
    color: '#333',
    fontWeight: 'bold'
  },
  iconsRow: {
    marginTop: 25
  },
  iconItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 20
  },
  iconText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333'
  },
  ButtonFinal: {
    width: '95%',
    backgroundColor: '#1877F2',
    marginTop: 30,
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 8
  }
});
