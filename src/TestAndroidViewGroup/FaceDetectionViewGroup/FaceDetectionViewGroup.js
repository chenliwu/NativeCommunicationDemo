'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    requireNativeComponent,
    View,
    DeviceEventEmitter
} from 'react-native';

const FaceDetectionViewGroup = requireNativeComponent('FaceDetectionViewGroup', FaceDetectionViewGroupComponent
    , {nativeOnly: {}});

//对封装的组件进行二次封装
class FaceDetectionViewGroupComponent extends Component {

    constructor(props) {
        super(props);
    }

    onFaceLoginListener;
    onFaceCollectionListener;

    componentWillMount(): void {
        if(this.props.type === 'FaceLogin'){
            this.onFaceLoginListener = DeviceEventEmitter.addListener("onFaceLogin",this.onFaceLogin);
        }else if(this.props.type === 'FaceCollection'){
            this.onFaceCollectionListener = DeviceEventEmitter.addListener("onFaceCollection",this.onFaceCollection);
        }

    }

    componentWillUnmount(): void {
       if(this.onFaceLoginListener){
           this.onFaceLoginListener.remove();
       }
       if(this.onFaceCollectionListener){
           this.onFaceCollectionListener.remove();
       }
    }

    //
    // /**
    //  * 人脸登录回调方法，在这里处理回调的参数
    //  * @param event
    //  */
    // onFaceLogin = (event) => {
    //     console.log('');
    //     console.log('onFaceLogin');
    //     console.log(event);
    //     console.log(event.nativeEvent);
    //    // this.props.onFaceLogin && this.props.onFaceLogin(event);
    // };
    //
    // /**
    //  * 人脸采集回调方法，在这里处理回调的参数
    //  * @param event
    //  */
    // onFaceCollection = (event) => {
    //     console.log('');
    //     console.log('onFaceCollection');
    //     console.log(event);
    //     console.log(event.nativeEvent);
    //     //this.props.onFaceCollection && this.props.onFaceCollection(event);
    // };

    render() {
        return <FaceDetectionViewGroup
            {...this.props}
        />
    }
}

FaceDetectionViewGroupComponent.propTypes = {
    type: PropTypes.string,
    onFaceLogin: PropTypes.func,
    onFaceCollection: PropTypes.func,
    ...View.propTypes,
};

//导出二次封装的组件
module.exports = FaceDetectionViewGroupComponent;