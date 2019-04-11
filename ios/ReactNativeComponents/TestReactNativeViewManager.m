//
//  TestReactNativeViewManager.m
//  NativeCommunicationDemo
//
//  Created by chenlw on 2019/4/10.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "TestReactNativeViewManager.h"
#import "TestReactNativeView.h"

@implementation TestReactNativeViewManager


//导出桥接宏标记
RCT_EXPORT_MODULE()

//导出RN组件的属性
RCT_EXPORT_VIEW_PROPERTY(type, NSString)

//导出RN组件的事件
RCT_EXPORT_VIEW_PROPERTY(onFaceDetection, RCTBubblingEventBlock)

- (UIView *)view
{
    //创建组件实例
    TestReactNativeView * viewInstance =[[TestReactNativeView alloc] init];
    return viewInstance;
}

@end
