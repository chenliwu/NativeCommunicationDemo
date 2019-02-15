package com.nativecommunicationdemo.customview;


import android.graphics.Color;
import android.widget.TextView;

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
public class CustomTextViewManager extends SimpleViewManager<TextView> {

    public static final String REACT_CLASS = "CustomText";

    private ThemedReactContext mContext;

    private TextView mTextView;


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
    protected TextView createViewInstance(ThemedReactContext reactContext) {
        this.mContext = reactContext;
        mTextView = new TextView(reactContext);
        return mTextView;
    }


    @ReactProp(name = "text")
    public void setText(TextView textView, String text) {
        textView.setText(text);
    }

    @ReactProp(name = "textSize")
    public void setTextSize(TextView view, float fontSize) {
        view.setTextSize(fontSize);
    }

    @ReactProp(name = "textColor", defaultInt = Color.BLACK)
    public void setTextColor(TextView view, int textColor) {
        view.setTextColor(textColor);
    }


}
