import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNSimData from "react-native-sim-data";
import { PermissionsAndroid } from 'react-native'

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE)

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Getting Phone Number with React Native</Text>
        <Text style={styles.data}>{JSON.stringify(RNSimData.getSimInfo())}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  data: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  }
});
