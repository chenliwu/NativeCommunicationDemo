//
//  IOSCommunicationViewController.m
//  NativeCommunicationDemo
//
//  Created by chenlw on 2019/3/8.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "IOSCommunicationViewController.h"


@interface IOSCommunicationViewController ()

@end

@implementation IOSCommunicationViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  // Do any additional setup after loading the view.
  self.view.backgroundColor = UIColor.whiteColor;
  
  //创建一个文本组件
  UITextView *textView = [[UITextView alloc] initWithFrame:CGRectMake(20,20,200,40)];
  //设置文字
  textView.text = @"IOS原生界面";
  //设置字体大小
  [textView setFont:[UIFont systemFontOfSize:20]];
  //添加文件组件到页面当中
  [self.view addSubview:textView];
  
  //创建一个按钮组件
  UIButton *button = [UIButton buttonWithType:UIButtonTypeSystem];
  button.frame = CGRectMake(20, 60, 60, 40);
  [button setTitle:@"退出" forState:UIControlStateNormal];
  [button addTarget:self action:@selector(buttonOnClicked) forControlEvents:UIControlEventTouchUpInside];
  //添加按钮组件到页面当中
  [self.view addSubview:button];
  
}

- (void)viewDidAppear:(BOOL)animated{
  //[super viewDidAppear:animated];
  
  UIAlertController *alertController = [UIAlertController alertControllerWithTitle:@"从React Native传来的数据是：" message:self.params preferredStyle:UIAlertControllerStyleAlert];
  
  UIAlertAction *cancelAction = [UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleCancel handler:nil];
  [alertController addAction:cancelAction];
  //弹出对话框
  [self presentViewController:alertController animated:YES completion:nil];
  //[self presentedViewController:alertController animated:YES completion:nil];
}

//按钮的响应事件
- (void)buttonOnClicked:(UIButton *)button{
  //dismissViewControllerAnimated关闭页面
  //[self dismissViewControllerAnimated:YES completion:nil];
  [self.navigationController popViewControllerAnimated:YES];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
