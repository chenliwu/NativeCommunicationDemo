import React, {PureComponent} from 'react';
import {requireNativeComponent, View} from 'react-native';

import PropTypes from 'prop-types';

const CustomTextConfig = {
    name: "CustomText",

    propTypes: {
        "text": PropTypes.string,
        "textSize": PropTypes.number,
        "textColor": PropTypes.number,
        ...View.propTypes
    }
};

const RCTCustomTextView = requireNativeComponent('CustomText', CustomTextConfig, {
    nativeOnly: {onChange: true}
});

export default class CustomText extends PureComponent {

    _onChange = (event: Event) => {
        const onChangeMessage = this.props.onChangeMessage;
        onChangeMessage && onChangeMessage(event.nativeEvent);
    };

    render() {
        return (
            <RCTCustomTextView
                {...this.props}
                onChange={this._onChange}
            />
        );
    }
}

CustomText.propTypes = {
    onChangeMessage: PropTypes.func,
};