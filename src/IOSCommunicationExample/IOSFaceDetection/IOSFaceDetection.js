import {
    NativeModules,
    NativeEventEmitter
} from 'react-native';

export default class IOSFaceDetection {

    static TYPE_FACE_LOGIN = 100;         //人脸登录标识
    static TYPE_FACE_COLLECTION = 200;    //人脸采集标识

    /**
     * 进入人脸登录页面
     * @param callback
     */
    static goFaceLoginPage = (callback) => {
        NativeModules.IOSFaceDetection.presentfFaceDetectionViewController(IOSFaceDetection.TYPE_FACE_LOGIN);
    };

    /**
     * 进入人脸采集页面
     * @param callback
     */
    static goFaceCollectionPage = (callback) => {
        NativeModules.IOSFaceDetection.presentfFaceDetectionViewController(IOSFaceDetection.TYPE_FACE_COLLECTION);
    };

}