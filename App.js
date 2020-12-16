import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={imgSize} />
      <Text style={textStyle}>To share a photo from your phone with a friend, just press the button below!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const imgSize = { width: 305, height: 159 }

const textStyle = {color: '#888', fontSize: 18}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
