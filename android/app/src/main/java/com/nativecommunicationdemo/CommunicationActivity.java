package com.nativecommunicationdemo;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

public class CommunicationActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_communication);

        Intent intent = getIntent();
        if (intent != null) {
            String params = intent.getStringExtra("params");
            if (params != null) {
                Toast.makeText(this, "从React Native传递来的参数：" + params, Toast.LENGTH_LONG).show();
            }
        }

    }
}
