import {
    NativeModules,
    DeviceEventEmitter
} from 'react-native';

/**
 * 2019-02-23
 * chenlw
 * 封装Android原生对话框工具类
 */
class AndroidDialog {

    static callback;

    /**
     * 添加Android发送来的事件
     */
    static addListener = (callback) => {
        AndroidDialog.callback = callback;
        //监听Android发送的事件
        DeviceEventEmitter.addListener('onConfirmPassword', AndroidDialog.onConfirmPasswordListener);
        DeviceEventEmitter.addListener("onConfirmPasswordCancel", AndroidDialog.onConfirmPasswordCancelListener);
    };

    /**
     * 移除监听
     */
    static removeListener = () => {
        DeviceEventEmitter.removeListener("onConfirmPassword", AndroidDialog.onConfirmPasswordListener);
        DeviceEventEmitter.removeListener("onConfirmPasswordCancel", AndroidDialog.onConfirmPasswordCancelListener);
    };

    /**
     *
     * @param params
     */
    static onConfirmPasswordListener = (params) => {
        console.log('onConfirmPasswordListener');
        console.log(params);
        AndroidDialog.callback && AndroidDialog.callback(params.password);
        AndroidDialog.removeListener();
    };

    /**
     * 取消按钮回调事件
     */
    static onConfirmPasswordCancelListener = (params) => {
        AndroidDialog.removeListener();
    };

}


export default class AndroidDialogUtils {

    static showInputPasswordDialog = (title, message, hint, callback) => {
        AndroidDialog.addListener(callback);
        NativeModules.MyDialogModule.showInputPasswordDialog(title, message, hint);
    };


}