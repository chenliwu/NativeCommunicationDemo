package com.nativecommunicationdemo.customview;


import android.widget.Button;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * 2019-02-15
 * chenlw
 * work：
 * 1、创建ViewManager的子类。
 * 在这个例子里我们创建一个视图管理类ReactImageManager，它继承自SimpleViewManager<ReactImageView>。
 * ReactImageView是这个视图管理类所管理的对象类型，也就是我们自定义的原生视图。
 * getName方法返回的名字会用于在 JavaScript 端引用。
 */
public class RCTButtonManager extends SimpleViewManager<Button> {

    public static final String REACT_CLASS = "RCTButton";

    private ThemedReactContext mContext;

    private Button mButton;


    /**
     * getName方法返回的名字会用于在 JavaScript 端引用。
     *
     * @return
     */
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    /**
     * 此处创建View实例，并返回
     *
     * @param reactContext
     * @return
     */
    @Override
    protected Button createViewInstance(ThemedReactContext reactContext) {
        this.mContext = reactContext;
        mButton = new Button(reactContext);
        return mButton;
    }

    /**
     * 设置按钮显示文本
     *
     * @param button
     * @param text   文本
     */
    @ReactProp(name = "text")
    public void setText(Button button, String text) {
        button.setText(text);
    }


}
