/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 /*<MapView
   style = {styles.map}
   initialRegion={{
     latitude: 37.78825,
     longitude: -122.4324,
     latitudeDelta: 0.0922,
     longitudeDelta: 0.0421,
   }}
 />*/

import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Home extends Component<Props> {


  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude);
      var long = parseFloat(position.coords.longitude);

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA

      }

      this.setState({initialPosition: initialRegion});
      this.setState({markerPosition: initialRegion});
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude);
      var long = parseFloat(position.coords.longitude);

      var lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA

      }

      this.setState({initialPosition: lastRegion});
      this.setState({markerPosition: lastRegion});
    })
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style = {styles.map}
          region={this.state.initialPosition}
        >
          <MapView.Marker
            coordinate={this.state.markerPosition}>

            </MapView.Marker>
        </MapView>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
