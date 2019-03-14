import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {
    SafeAreaView,
    createStackNavigator
} from 'react-navigation';

//2019-02-22
import RCTButtonExample from './Button/RCTButtonExample';
import MyDialogExample from './Dialog/MyDialogExample';
import CustomTextViewExample from './Text/CustomTextViewExample';
import TestDialogUtilsExample from './Dialog/TestDialogUtilsExample';

import CameraExample from './Camera/CameraExample';


class AndroidNativeNavigatorPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Android原生平台通讯',
    };

    flatListComponent = null;

    constructor(props) {
        super(props);
        let dataList = new Array();

        dataList.push({
            id: 'RCTButtonExample',
            name: 'Button按钮通讯example'
        });
        dataList.push({
            id: 'CustomTextViewExample',
            name: 'Text文本组件通讯example'
        });
        dataList.push({
            id: 'MyDialogExample',
            name: '调用Android对话框'
        });
        dataList.push({
            id: 'TestDialogUtilsExample',
            name: '测试Android对话框工具类'
        });
        dataList.push({
            id: 'CameraExample',
            name: 'Android相机拍照'
        });


        this.state = {
            dataList: dataList
        };
    }

    /**
     * item点击事件
     * @param item
     * @private
     */
    _onPressItem = (item) => {
        this.props.navigation.navigate(item.id);
    };

    /**
     * 渲染item组件（数据行）
     * @param item
     * @returns {*}
     * @private
     */
    _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                style={{
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => {
                    this._onPressItem(item);
                }}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>

        )
    };


    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
                <FlatList
                    ref={(flatList) => {
                        //获取FlatList组件的引用
                        this.flatListComponent = flatList;
                    }}
                    ItemSeparatorComponent={() => <View
                        style={{height: 1, backgroundColor: '#f5f5f9',}}/>}
                    data={this.state.dataList}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    renderItem={({item, index}) => {
                        return this._renderItem({item, index});
                    }}

                    getItemLayout={(item, index) => (
                        {length: 50, offset: (50 + 2) * index, index}
                    )}

                />
            </SafeAreaView>
        );
    }
}


const AnimationStudyNavigator = createStackNavigator(
    {
        AndroidNativeNavigatorPage: {
            screen: AndroidNativeNavigatorPage
        },
        RCTButtonExample: {
            screen: RCTButtonExample
        },

        CustomTextViewExample: {
            screen: CustomTextViewExample
        },
        MyDialogExample: {
            screen: MyDialogExample
        },
        TestDialogUtilsExample: {
            screen: TestDialogUtilsExample
        },
        CameraExample: {
            screen: CameraExample
        },


    },
    {
        initialRouteName: 'AndroidNativeNavigatorPage',
        navigationOptions: {
            // headerStyle: {
            //     height: 50,
            //     backgroundColor: 'pink'
            // }
        },
    }
);

AnimationStudyNavigator.navigationOptions = ({navigation}) => {
    let drawerLockMode = 'unlocked';
    if (navigation.state.index > 0) {
        drawerLockMode = 'locked-closed';
    }

    return {
        drawerLockMode,
    };
};

export default AnimationStudyNavigator;

