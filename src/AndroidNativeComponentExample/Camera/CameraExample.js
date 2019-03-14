import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Button,
    Image,
    Platform,
    NativeModules
} from 'react-native';


export default class CameraExample extends Component {

    static navigationOptions = {
        headerTitle: 'Android-相机拍照',
    };


    constructor(props, context) {
        super(props, context);
        this.state = {
            avatarSource: null
        };
    }

    render() {

        return (
            <View style={styles.container}>
                {
                    this.state.avatarSource
                        ? <Image source={this.state.avatarSource}/>
                        : null
                }

                <Button title={'调用相机'} onPress={() => {
                    const options = {
                        quality: 1.0,
                        maxWidth: 500,
                        maxHeight: 500,
                    };
                    NativeModules.AndroidImagePickerModule.launchCamera(options, (response) => {

                        console.log(response);

                        if (response.didCancel) {
                            alert("取消选择照片");
                        } else if (response.error) {
                            alert("选择照片错误：" + response.error);
                        } else {
                            let source;
                            if (Platform.OS === 'ios') {
                                source = {
                                    uri: response.uri.replace('file://', '')
                                };
                            } else if (Platform.OS === 'android') {
                                source = {
                                    uri: response.uri
                                };
                            }
                            this.setState({
                                avatarSource: source
                            });
                        }
                    });
                }}/>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    myTextView: {
        //flex: 1,
        alignSelf: 'center',
        width: 200,
        height: 300,
        backgroundColor: 'pink',
    },
});