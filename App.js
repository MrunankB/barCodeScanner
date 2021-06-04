import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import ScanScreen from './screens/scanScreen';


export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <ScanScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
