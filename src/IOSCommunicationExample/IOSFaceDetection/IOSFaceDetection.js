import {
    NativeModules,
    NativeEventEmitter
} from 'react-native';

const IOSFaceDetectionEmitter = new NativeEventEmitter(NativeModules.IOSFaceDetection);

/**
 * Created by chenlw on 2019/03/21.
 * React Native调用原生IOS平台的人脸识别模块。
 */
export default class IOSFaceDetection {

    static TYPE_FACE_LOGIN = 100;         //人脸登录标识
    static TYPE_FACE_COLLECTION = 200;    //人脸采集标识

    /**
     * 进入人脸登录页面
     * @param callback
     */
    static jumpFaceLoginPage = (callback) => {
        IOSFaceDetectionListener.addFaceLoginListener(callback);
        IOSFaceDetectionListener.addCloseFaceDetectionListener();
        NativeModules.IOSFaceDetection.presentfFaceDetectionViewController(IOSFaceDetection.TYPE_FACE_LOGIN);
    };

    /**
     * 进入人脸采集页面
     * @param callback
     */
    static jumpFaceCollectionPage = (callback) => {
        IOSFaceDetectionListener.addFaceCollectionListener(callback);
        IOSFaceDetectionListener.addCloseFaceDetectionListener();
        NativeModules.IOSFaceDetection.presentfFaceDetectionViewController(IOSFaceDetection.TYPE_FACE_COLLECTION);
    };
}

/**
 * RN与IOS原生平台的通信细节封装在内部，只提供业务方法给外部调用。
 */
class IOSFaceDetectionListener {

    static FACE_LOGIN_CALLBACK_NAME = 'onFaceLogin';                //人脸登录回调方法名称
    static FACE_COLLECTION_CALLBACK_NAME = 'onFaceCollection';      //人脸采集回调方法名称
    static CLOSE_FACE_DETECTION_CALLBACK_NAME = 'onCloseFaceDetection';      //关闭IOS人脸识别模块回调方法名称

    /**
     * 不赋值null，则static成员的初始值是undefine
     * @type {null}
     */
    static faceLoginCallback;
    static faceCollectionCallback;

    static faceLoginSubscription;
    static faceCollectionSubscription;
    static closeFaceDetectionSubscription;

    ///人脸登录
    static addFaceLoginListener = (callback) => {
        if (!IOSFaceDetectionListener.faceLoginCallback) {
            console.log('');
            console.log('addFaceLoginListener');
            IOSFaceDetectionListener.faceLoginCallback = callback;
            //监听IOS原生端发送的事件
            IOSFaceDetectionListener.faceLoginSubscription = IOSFaceDetectionEmitter.addListener(
                IOSFaceDetectionListener.FACE_LOGIN_CALLBACK_NAME,
                IOSFaceDetectionListener.onFaceLogin
            );
        }
    };

    static onFaceLogin = (params) => {
        console.log('');
        console.log('onFaceLogin');
        console.log(params);
        IOSFaceDetectionListener.faceLoginCallback && IOSFaceDetectionListener.faceLoginCallback(params.faceBase64);
    };

    ///人脸采集
    static addFaceCollectionListener = (callback) => {
        if (!IOSFaceDetectionListener.faceCollectionCallback) {
            console.log('');
            console.log('addFaceCollectionListener');
            IOSFaceDetectionListener.faceCollectionCallback = callback;
            //监听IOS原生端发送的事件
            IOSFaceDetectionListener.faceCollectionSubscription = IOSFaceDetectionEmitter.addListener(
                IOSFaceDetectionListener.FACE_COLLECTION_CALLBACK_NAME,
                IOSFaceDetectionListener.onFaceCollection
            );
        }
    };

    static onFaceCollection = (params) => {
        console.log('');
        console.log('onFaceCollection');
        console.log(params);
        IOSFaceDetectionListener.faceCollectionCallback && IOSFaceDetectionListener.faceCollectionCallback(params.faceBase64);
    };


    static addCloseFaceDetectionListener = () => {
        if (!IOSFaceDetectionListener.closeFaceDetectionSubscription) {
            console.log('');
            console.log('addCloseFaceDetectionListener');
            //监听IOS原生端发送的事件
            IOSFaceDetectionListener.closeFaceDetectionSubscription = IOSFaceDetectionEmitter.addListener(
                IOSFaceDetectionListener.CLOSE_FACE_DETECTION_CALLBACK_NAME,
                IOSFaceDetectionListener.onCloseFaceDetection
            );
        }
    };
    /**
     * 从IOS原生端关闭人脸识别界面时，要移除相关监听。这个通过IOS原生页面生命周期方法实现。
     */
    static onCloseFaceDetection = (params) => {
        console.log('');
        console.log('onCloseFaceDetection');
        console.log(params);
        IOSFaceDetectionListener.removeAllListener();
    };

    static removeAllListener = () => {
        if (IOSFaceDetectionListener.faceLoginSubscription) {
            IOSFaceDetectionListener.faceLoginSubscription.remove();
            IOSFaceDetectionListener.faceLoginSubscription = null;
            IOSFaceDetectionListener.faceLoginCallback = null;
        }
        if (IOSFaceDetectionListener.faceCollectionSubscription) {
            IOSFaceDetectionListener.faceCollectionSubscription.remove();
            IOSFaceDetectionListener.faceCollectionSubscription = null;
            IOSFaceDetectionListener.faceCollectionCallback = null;
        }
        if (IOSFaceDetectionListener.closeFaceDetectionSubscription) {
            IOSFaceDetectionListener.closeFaceDetectionSubscription.remove();
            IOSFaceDetectionListener.closeFaceDetectionSubscription = null;
        }
    };


}