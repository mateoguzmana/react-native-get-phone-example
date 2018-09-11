import React, { Component } from 'react';
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import RNSimData from "react-native-sim-data";

const initialState = {
  data: {}
};

export default class App extends Component {
  state = initialState;

  componentDidMount() {
    this.requestPermissions();
    this.getSimData();
  }

  getSimData() {
    const data = RNSimData.getSimInfo();

    this.setState({ data });
  }

  /**
   * It will be execute just the first time requesting the permission.
   */
  requestPermissions() {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE)
  }

  render() {
    const {
      isNetworkRoaming0,
      mcc0,
      subscriptionId0,
      simSerialNumber0,
      carrierName0,
      isDataRoaming0,
      phoneNumber0,
      mnc0,
      simSlotIndex0,
      deviceId0,
      displayName0,
      countryCode0
    } = this.state.data;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Getting Phone Number with React Native</Text>
        <View style={styles.data}>
          <Text>isNetworkRoaming: {JSON.stringify(isNetworkRoaming0)}</Text>
          <Text>Mcc: {mcc0}</Text>
          <Text>subscriptionId: {subscriptionId0}</Text>
          <Text>simSerialNumber: {simSerialNumber0}</Text>
          <Text>carrierName: {carrierName0}</Text>
          <Text>isDataRoaming: {JSON.stringify(isDataRoaming0)}</Text>
          <Text>phoneNumber: {phoneNumber0}</Text>
          <Text>mnc: {mnc0}</Text>
          <Text>simSlotIndex: {simSlotIndex0}</Text>
          <Text>deviceId: {deviceId0}</Text>
          <Text>displayName: {displayName0}</Text>
          <Text>countryCode: {countryCode0}</Text>
        </View>
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
