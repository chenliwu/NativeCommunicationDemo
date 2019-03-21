//
//  IOSFaceDetection.m
//  NativeCommunicationDemo
//
//  Created by bytter on 2019/3/20.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "IOSFaceDetection.h"
#import "IOSFaceDetectionViewController.h"
#import "AppDelegate.h"

@implementation IOSFaceDetection

// RN的回调事件名称列表
-(NSArray<NSString *> *)supportedEvents{
    return @[
             @"onFaceLogin",
             @"onFaceCollection",
             @"onCloseFaceDetection"
             ];
}

// 为了实现RCTBridgeModule协议，你的类需要包含RCT_EXPORT_MODULE()宏。
RCT_EXPORT_MODULE();

-(dispatch_queue_t)methodQueue{
    //因为是显示页面，所以让原生接口运行在主线程
    return dispatch_get_main_queue();
}

// 导出方法给RN调用
RCT_EXPORT_METHOD(presentfFaceDetectionViewController:(int)type){
    //创建人脸识别页面ViewController
    IOSFaceDetectionViewController *faceDetectionViewController = [IOSFaceDetectionViewController new];
    //参数赋值
    faceDetectionViewController.type = type;
    faceDetectionViewController.faceDetection = self;
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    //  UIViewController *rootViewController = (UIViewController *)[[app.window] rootViewController];
    //获取根视图控制器
    UIViewController *rootViewController = app.window.rootViewController;
    //跳转页面
    [rootViewController presentViewController:faceDetectionViewController animated:YES completion:nil];
}

@end
