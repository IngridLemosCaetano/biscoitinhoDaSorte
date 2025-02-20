import { Image, StyleSheet, Platform } from 'react-native';
import React from 'react';
import Sorte from './componentes/Biscoitinho'

export default function App() {
  return (
    <Sorte/>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
