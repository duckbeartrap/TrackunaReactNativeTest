import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './components/home';
import Account from './components/account'

export const Tabs = createBottomTabNavigator({
  Home : {
    screen : Home,
    navigationOptions: {
            tabBarLabel: 'Home',
    }
  },

  Account : {
    screen : Account,
  }
},

{
  tabBarOptions : {
    style: {
      backgroundColor: '#45486E',
    }
  }
}

);
