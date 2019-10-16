import React from 'react';
import { YellowBox } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './src/components/LoginPage';
import MapScreen from './src/components/MapScreen';

// temporary for now
YellowBox.ignoreWarnings([
  '-[RCTRootView cancelTouches]',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
]);

const defaultNavOpts = {
  header: null,
};

const AppStack = createStackNavigator({
  MapView: {
    screen: MapScreen,
  },
}, {
  defaultNavigationOptions: {
    ...defaultNavOpts
  }
});

const LoginStack = createStackNavigator({
  LoginView: {
    screen: LoginPage,
  },
}, {
  defaultNavigationOptions: {
    ...defaultNavOpts
  }
});

export default createAppContainer(createSwitchNavigator({
  Login: LoginStack,
  App: AppStack
}));
