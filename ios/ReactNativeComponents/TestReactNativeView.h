//
//  TestReactNativeView.h
//  NativeCommunicationDemo
//
//  Created by chenlw on 2019/4/10.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "React/RCTComponent.h"

NS_ASSUME_NONNULL_BEGIN

@interface TestReactNativeView : UIView
// type操作类型
@property(nonatomic,weak) NSString * type;

//如果使用assign会导致线程锁死，使用weak弱引用就没有问题
//@property(nonatomic,assign) UITextView *textView;
@property(nonatomic,weak) UITextView *textView;

// 声明一个事件属性，导出给RN端使用
@property(nonatomic, copy) RCTBubblingEventBlock onFaceDetection;

@end

NS_ASSUME_NONNULL_END
