package com.nativecommunicationdemo.facedetection;


import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.nativecommunicationdemo.R;

import java.util.Map;

/**
 * 2019-02-15
 * chenlw
 * work：
 * 1、创建ViewManager的子类。
 * 在这个例子里我们创建一个视图管理类ReactImageManager，它继承自SimpleViewManager<ReactImageView>。
 * ReactImageView是这个视图管理类所管理的对象类型，也就是我们自定义的原生视图。
 * getName方法返回的名字会用于在 JavaScript 端引用。
 */
public class FaceDetectionViewGroupManager extends ViewGroupManager<RelativeLayout> {

    public static final String REACT_CLASS = "FaceDetectionViewGroup";

    private ThemedReactContext mContext;

    private String type;

    private Button mSendEventToRnButton;
    private TextView mShowTypeTextView;


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
    protected RelativeLayout createViewInstance(final ThemedReactContext reactContext) {
        mContext = reactContext;
        final RelativeLayout rootView = (RelativeLayout) LayoutInflater.from(reactContext)
                .inflate(R.layout.view_test_face_detection, null);
        mSendEventToRnButton = rootView.findViewById(R.id.btn_sendEventToRn);
        mShowTypeTextView = rootView.findViewById(R.id.txt_showType);

        mSendEventToRnButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                WritableMap data = Arguments.createMap();
                ReactContext context = (ReactContext)rootView.getContext();
                if ("FaceLogin".equals(type)) {
                    data.putString("msg", "人脸登录");
                    //Android向JS传递事件
                    context.getJSModule(RCTEventEmitter.class).receiveEvent(
                            rootView.getId(),
                            "onFaceLogin",
                            data
                    );
                    //sendEventToReactNative(reactContext,"onFaceLogin",data);
                } else if ("FaceCollection".equals(type)) {
                    data.putString("msg", "人脸采集");
                    //Android向JS传递事件
                    context.getJSModule(RCTEventEmitter.class).receiveEvent(
                            rootView.getId(),
                            "onFaceCollection",
                            data
                    );
                    //sendEventToReactNative(reactContext,"onFaceCollection",data);
                }

            }
        });

        return rootView;
    }

    /**
     * 暴露了在JS中定义的方法，实现JS与原生端的事件调用
     * @return
     */
    @javax.annotation.Nullable
    @Override
    public Map getExportedCustomDirectEventTypeConstants() {
        ///put  k是java端发送事件的名称，v1是RN端回调事件的名称
        return MapBuilder.<String, Object>builder()
                .put("onFaceLogin", MapBuilder.of("registrationName", "onFaceLogin"))
                .put("onFaceCollection", MapBuilder.of("registrationName", "onFaceCollection"))
                .build();
    }

    /**
     * RN可通过这个方法设置操作的类型
     *
     * @param view
     * @param type
     */
    @ReactProp(name = "type")
    public void setType(RelativeLayout view, String type) {
        this.type = type;
        if ("FaceLogin".equals(type)) {
            mShowTypeTextView.setText("操作类型：人脸登录");
        } else if ("FaceCollection".equals(type)) {
            mShowTypeTextView.setText("操作类型：人脸采集");
        }
    }

    /**
     * 原生模块可以在没有被调用的情况下往 JavaScript 发送事件通知。
     * 最简单的办法就是通过RCTDeviceEventEmitter，这可以通过ReactContext来获得对应的引用，像这样：
     *
     * @param reactContext
     * @param eventName
     * @param params
     */
    private void sendEventToReactNative(ReactContext reactContext,
                                        String eventName,
                                        @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }


}
