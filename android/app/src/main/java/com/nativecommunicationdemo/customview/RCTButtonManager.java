package com.nativecommunicationdemo.customview;


import android.view.View;
import android.widget.Button;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Map;

import javax.annotation.Nullable;

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
     * RN组件的props回调事件名称
     */
    private static final String EVENT_NAME_ONCLICK = "onClick";


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
    protected Button createViewInstance(final ThemedReactContext reactContext) {
        this.mContext = reactContext;
        mButton = new Button(reactContext);
        mButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                WritableMap data = Arguments.createMap();
                data.putString("msg", "点击按钮");
                data.putString("data", "Android传递给JS的数据");

                //Android向JS传递事件
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        mButton.getId(),
                        EVENT_NAME_ONCLICK,
                        data
                );
            }
        });
        return mButton;
    }

    @Nullable
    @Override
    public Map getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of(
                EVENT_NAME_ONCLICK, MapBuilder.of("registrationName", EVENT_NAME_ONCLICK));
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
