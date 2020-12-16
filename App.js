import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={textStyle}>To share a photo from your phone with a friend, just press the button below!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const textStyle = {color: '#888', fontSize: 18}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
