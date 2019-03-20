//
//  Communication.m
//  NativeCommunicationDemo
//
//  Created by bytter on 2019/3/8.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "IOSCommunication.h"
#import "IOSCommunicationViewController.h"
#import "AppDelegate.h"

@implementation IOSCommunication

//为了实现RCTBridgeModule协议，你的类需要包含RCT_EXPORT_MODULE()宏。
RCT_EXPORT_MODULE();

-(dispatch_queue_t)methodQueue{
    //因为是显示页面，所以让原生接口运行在主线程
    return dispatch_get_main_queue();
}

//导出一个名称为prsentViewControllerFromReactNative的方法给React Native使用。
RCT_EXPORT_METHOD(prsentViewControllerFromReactNative:(NSString*)params){
    NSLog(@"React Native传递的参数：%@",params);
    IOSCommunicationViewController *communicationViewController=[[IOSCommunicationViewController alloc]init];
    //参数赋值
    communicationViewController.params = params;
    
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    //  UIViewController *rootViewController = (UIViewController *)[[app.window] rootViewController];
    //获取根视图控制器
    UIViewController *rootViewController = app.window.rootViewController;
    //跳转到RN通信的页面
    [rootViewController presentViewController:communicationViewController animated:YES completion:nil];
}

@end
