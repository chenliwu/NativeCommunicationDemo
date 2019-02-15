'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    requireNativeComponent,
    View,
} from 'react-native';

//通过“RCTButton”获取Android层封装的RCTButton组件,MyButton为下面的定义的类
const RCTButton = requireNativeComponent('RCTButton', RCTButtonComponent);

//对封装的组件RCTButton组件进行二次封装
class RCTButtonComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <RCTButton {...this.props}/>
    }
}

RCTButtonComponent.propTypes = {
    text: PropTypes.string,
    ...View.propTypes,
};

//导出二次封装的RCTButton组件
module.exports = RCTButtonComponent;