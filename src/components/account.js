/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';


type Props = {};
export default class Account extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image
            style={{width: '100%', height: '50%', top: 20}}
            source={{uri: 'https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/1472011_637704196252575_410131846_n.jpg?_nc_cat=0&oh=29cedc010b18e16b08616c1718ec1135&oe=5C0E2960'}}
          />
        <Text style={{
          color:'white',
          textAlign: 'center',
          fontSize: 20,
          bottom: 20
      }}>Armen Kazaryan</Text>

        <View style={{
          width: '100%',
          height: 50,
          backgroundColor: '#45486E',
          top: 5

        }}>
          <Button
            onPress={() => {}}
            title="SETTINGS"
            color="white"
          />
        </View>


        <View style={{
          width: '100%',
          height: 50,
          backgroundColor: '#45486E',
          top: 7
        }}>
          <Button
            onPress={() => {}}
            title="DELETE"
            color="white"
          />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5FCFF',
  }
});
