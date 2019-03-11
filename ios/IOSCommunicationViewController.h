//
//  IOSCommunicationViewController.h
//  NativeCommunicationDemo
//
//  Created by bytter on 2019/3/8.
//  Copyright © 2019 Facebook. All rights reserved.
//
/**
 * IOS开发中的UIViewController是指视图控制器。
 * 每一个UIViewController以及继承UIViewController的类都是一个界面
 */
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface IOSCommunicationViewController : UIViewController

//在这里定义React Native传递过来的参数对象
@property (nonatomic,copy) NSString *params;

@end

NS_ASSUME_NONNULL_END
