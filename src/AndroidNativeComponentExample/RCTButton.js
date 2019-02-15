'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    requireNativeComponent,
    View,
} from 'react-native';

//通过“RCTButton”获取Android层封装的RCTButton组件,MyButton为下面的定义的类
const RCTButton = requireNativeComponent('RCTButton', RCTButtonComponent
    , {nativeOnly: {onChange: true}});

//对封装的组件RCTButton组件进行二次封装
class RCTButtonComponent extends Component {

    constructor(props) {
        super(props);
    }

    //单击事件回调
    _onClick(event) {
        if (!this.props.onClick) {
            return;
        }
        //取出android层回调的数据：event.nativeEvent.key名称
        alert(event.nativeEvent.backMsg);
        this.props.onClick(event.nativeEvent.backMsg);
    }

    render() {
        return <RCTButton
            onClick={this._onClick.bind(this)}
            {...this.props}
        />
    }
}

RCTButtonComponent.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    ...View.propTypes,
};

//导出二次封装的RCTButton组件
module.exports = RCTButtonComponent;