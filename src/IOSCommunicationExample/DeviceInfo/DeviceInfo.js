/**
 * 2019-03-11
 */
import {
    NativeModules,
    Platform
} from 'react-native';

let systemName, systemVersion, defaultLanguage, appVersion;

if (Platform.OS === 'ios') {
    systemName = NativeModules.IOSDeviceInfo.systemName;
    systemVersion = NativeModules.IOSDeviceInfo.systemVersion;
    defaultLanguage = NativeModules.IOSDeviceInfo.defaultLanguage;
    appVersion = NativeModules.IOSDeviceInfo.appVersion;
}
export default {
    'systemName': systemName,
    'systemVersion': systemVersion,
    'defaultLanguage': defaultLanguage,
    'appVersion': appVersion,
}