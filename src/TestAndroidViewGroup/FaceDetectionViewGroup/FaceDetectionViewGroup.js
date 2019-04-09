'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    requireNativeComponent,
    View,
} from 'react-native';

const FaceDetectionViewGroup = requireNativeComponent('FaceDetectionViewGroup', FaceDetectionViewGroupComponent
    , {nativeOnly: {onChange: true}});

//对封装的组件进行二次封装
class FaceDetectionViewGroupComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <FaceDetectionViewGroup
            {...this.props}
        />
    }
}

FaceDetectionViewGroupComponent.propTypes = {
    ...View.propTypes,
};

//导出二次封装的组件
module.exports = FaceDetectionViewGroupComponent;
//module.exports = FaceDetectionViewGroupComponent;