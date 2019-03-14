/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import AppDrawerNavigator from './src/AppDrawerNavigator';

import TestAndroidFowardPage from './src/TestAndroidForward/TestAndroidFowardPage';

AppRegistry.registerComponent(appName, () => AppDrawerNavigator);

//注册两个component
//AppRegistry.registerComponent('RNActivity', () => TestAndroidFowardPage);


//AppRegistry.registerComponent(appName, () => CustomTextViewExample);
