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

    render() {
        return (
            <TestReactNativeView {...this.props}/>
        );
    }
}

TestReactNativeViewComponent.propTypes = {
    type: PropTypes.string,
    ...View.propTypes,
};

//导出二次封装的组件
module.exports = TestReactNativeViewComponent;