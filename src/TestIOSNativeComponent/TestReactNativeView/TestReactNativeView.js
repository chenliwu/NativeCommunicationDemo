'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    requireNativeComponent,
    View,
} from 'react-native';

const TestReactNativeView = requireNativeComponent('TestReactNativeView', TestReactNativeViewComponent
    , {nativeOnly: {}});

//对封装的组件进行二次封装
class TestReactNativeViewComponent extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * 对IOS组件的事件进行处理，解析对RN端有用的参数
     * @param event
     * @private
     */
    _onFaceDetection = (event) => {
        if (!this.props.onFaceDetection) {
            return;
        }
        console.log('');
        console.log('_onFaceDetection');
        console.log(event.nativeEvent);
        this.props.onFaceDetection(event.nativeEvent.faceBase64);
    };

    render() {
        return (
            <TestReactNativeView
                {...this.props}
                onFaceDetection={this._onFaceDetection}
            />
        );
    }
}

TestReactNativeViewComponent.propTypes = {
    type: PropTypes.string,
    onFaceDetection: PropTypes.func,
    ...View.propTypes,
};

//导出二次封装的组件
module.exports = TestReactNativeViewComponent;