package com.nativecommunicationdemo.camera;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Environment;
import android.provider.MediaStore;
import android.text.TextUtils;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.nativecommunicationdemo.utils.FileUtils;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

public class ImagePickerModule extends ReactContextBaseJavaModule implements ActivityEventListener {

    static final int REQUEST_LAUNCH_IMAGE_CAPTURE = 13001;
    static final int REQUEST_LAUNCH_IMAGE_LIBRARY = 13002;

    private ReactApplicationContext mReactContext;

    private Callback mCallback;

    private WritableMap mResponseMap;

    private Uri mCameraCaptureURI;

    public ImagePickerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mReactContext = reactContext;
    }

    /**
     * 在 RN 中通过NativeModules.Communication访问到这个模块。
     *
     * @return
     */
    @Override
    public String getName() {
        return "AndroidImagePickerModule";
    }

    /**
     * 导出方法给RN使用
     *
     * @param options
     * @param callback
     */
    @ReactMethod
    public void launchCamera(final ReadableMap options, final Callback callback) {
        //判断设备是否支持相机

        this.mCallback = callback;
        this.mResponseMap = Arguments.createMap();

        Intent cameraIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        mCameraCaptureURI = Uri.fromFile(createNewFile());
        cameraIntent.putExtra(MediaStore.EXTRA_OUTPUT, mCameraCaptureURI);
        try {
            int requestCode = REQUEST_LAUNCH_IMAGE_CAPTURE;
            Activity currentActivity = getCurrentActivity();
            //进入相机页面
            currentActivity.startActivityForResult(cameraIntent, requestCode);
        } catch (ActivityNotFoundException e) {
            e.printStackTrace();
            if (mCallback != null) {
                mResponseMap.putString("error", "无法启动相机");
                mCallback.invoke(mResponseMap);
                mCallback = null;
            }
        }
    }

    private File createNewFile() {
        String fileName = "image-" + UUID.randomUUID().toString() + ".jpg";
        File path = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES);
        File file = new File(path, fileName);
        try {
            //创建目录和文件
            path.mkdirs();
            file.createNewFile();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return file;
    }


    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        this.mResponseMap = Arguments.createMap();

        //用户取消
        if (resultCode != Activity.RESULT_OK) {
            mResponseMap.putBoolean("didCancel", true);
            mCallback.invoke(mResponseMap);
            mCallback = null;
            return;
        }
        //获取图片URI
        Uri uri;
        switch (requestCode) {
            case REQUEST_LAUNCH_IMAGE_CAPTURE:
                uri = mCameraCaptureURI;
                break;
            case REQUEST_LAUNCH_IMAGE_LIBRARY:
                uri = data.getData();
                break;
            default:
                uri = null;
        }
        //String realPath = FileUtils.getFilePathByUri(mReactContext, uri);
        //String realPath = FileUtils.getFilePathByUri(mReactContext, uri);
        String realPath = FileUtils.getFilePath(mReactContext, uri);
        if (!TextUtils.isEmpty(realPath)) {
            Log.d("解码图片",realPath);
            //解码图片
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inJustDecodeBounds = true;
            BitmapFactory.decodeFile(realPath, options);

            //回调函数
            mResponseMap.putString("uri", uri.toString());
            mResponseMap.putString("path", realPath);
        } else {
            Log.d("解码图片错误",realPath);
            if (mCallback != null) {
                mResponseMap.putString("error", "cannot launch photo library");
                mCallback.invoke(mResponseMap);
                mCallback = null;
            }
        }
    }


    @Override
    public void onNewIntent(Intent intent) {

    }
}
