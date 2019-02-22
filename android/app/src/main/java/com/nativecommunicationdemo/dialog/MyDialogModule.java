package com.nativecommunicationdemo.dialog;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.support.annotation.Nullable;
import android.text.InputType;
import android.view.View;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.nativecommunicationdemo.R;

public class MyDialogModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext mReactContext;

    public MyDialogModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mReactContext = reactContext;
    }


    /**
     * ReactContextBaseJavaModule要求派生类实现getName方法。
     * 这个函数用于返回一个字符串名字，这个名字在 JavaScript 端标记这个模块。
     * 这里我们把这个模块叫做Communication，这样就可以在 JavaScript 中通过NativeModules.Communication访问到这个模块。
     *
     * @return
     */
    @Override
    public String getName() {
        return "MyDialogModule";
    }

    /**
     * 要导出一个方法给 JavaScript 使用，Java 方法需要使用注解@ReactMethod。
     * 方法的返回类型必须为void。
     * React Native 的跨语言访问是异步进行的，所以想要给 JavaScript 返回一个值的唯一办法是使用回调函数或者发送事件（参见下文的描述）。
     *
     * @param title
     * @param message
     */
    @ReactMethod
    public void showDialog(String title, String message) {
        AlertDialog dialog = new AlertDialog.Builder(getCurrentActivity())
                .setTitle(title)        //设置对话框的标题
                .setCancelable(false)   //调用dismiss()才能关闭对话框
                .setMessage(message)    //设置对话框的内容
                //设置对话框的按钮
                .setNegativeButton("取消", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                    }
                })
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {


                    }
                }).create();
        dialog.show();
    }


    @ReactMethod
    public void showInputPasswordDialog(String title, String message, String hint) {
        final View view = getCurrentActivity().getLayoutInflater().inflate(R.layout.dialog_input_password_view, null);
        final EditText editText = (EditText) view.findViewById(R.id.edt_dialog_input);
        editText.setHint(hint);

        AlertDialog.Builder builder = new AlertDialog.Builder(getCurrentActivity())
                .setTitle(title)        //设置对话框的标题
                .setCancelable(false)   //调用dismiss()才能关闭对话框
                .setView(view)
                //.setView(linearLayout)
                //设置对话框的按钮
                .setNegativeButton("取消", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                        sendEvent(mReactContext, "onConfirmPasswordCancel", null);
                    }
                })
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        WritableMap params = Arguments.createMap();
                        params.putString("password", editText.getText().toString());
                        // 发送事件给RN
                        sendEvent(mReactContext, "onConfirmPassword", params);
                    }
                });

        AlertDialog dialog = null;
        if (message != null && message.length() > 0) {
            builder.setMessage(message);
        }
        dialog = builder.create();
        if (dialog != null) {
            dialog.show();
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
    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }


}
