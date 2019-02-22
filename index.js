/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import AppDrawerNavigator from './src/AppDrawerNavigator';

AppRegistry.registerComponent(appName, () => AppDrawerNavigator);
//AppRegistry.registerComponent(appName, () => CustomTextViewExample);
