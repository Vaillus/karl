package com.example.karl.karl;

import android.content.Intent;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.StatusLine;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.ExecutionException;

public class QuizStart extends AppCompatActivity {
    public QuizStart() throws MalformedURLException, IOException {
    }
    AsyncTask<String, String, String> result;
    TextView tv;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_quiz_start);

        // Example of a call to a native method
        tv = findViewById(R.id.sample_text);
        String str = "toto";

        try {
            result =new RequestTask().execute("http://18.184.156.66:8000/api/clothes?category=shirt");
            tv.setText(result.get());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
            tv.setText("RIEN N'A ETE RETOURNE");

        }

    }


    /**
     * A native method that is implemented by the 'native-lib' native library,
     * which is packaged with this application.
     */ 
    public native String stringFromJNI();

}
