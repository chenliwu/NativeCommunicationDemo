//
//  TestReactNativeView.m
//  NativeCommunicationDemo
//
//  Created by chenlw on 2019/4/10.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "TestReactNativeView.h"

//ReactNative封装IOS原生组件，这里编写一个测试用的组件类
@implementation TestReactNativeView

/*
 // Only override drawRect: if you perform custom drawing.
 // An empty implementation adversely affects performance during animation.
 - (void)drawRect:(CGRect)rect {
 // Drawing code
 }
 */

- (instancetype)init
{
    //初始化组件
    self = [super init];
    if (self) {
        self.backgroundColor = [UIColor redColor];
    }
    
    //创建一个文本组件
    UITextView *textView = [[UITextView alloc] initWithFrame:CGRectMake(20,20,300,60)];
    //设置文字
    textView.text = @"IOS原生组件";
    //设置字体大小
    [textView setFont:[UIFont systemFontOfSize:20]];
    //添加文件组件
    [self addSubview:textView];
    
    self.textView = textView;
    
    return self;
}

//重写设置属性方法，当RN端设置type属性，就会调用这个方法
-(void)setType:(NSString *)type{
    NSLog(@"setType");
    self.textView.text = type;
    //self.type = type;
}

@end
