/**
 * 2019-03-11
 */
import {
    NativeModules
} from 'react-native';

export default {
    'systemName': NativeModules.IOSDeviceInfo.systemName,
    'systemVersion': NativeModules.IOSDeviceInfo.systemVersion,
    'defaultLanguage': NativeModules.IOSDeviceInfo.deviceLocale,
    'appVersion': NativeModules.IOSDeviceInfo.appVersion,
}