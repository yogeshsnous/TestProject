package com.testproject;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.util.Log;
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise


class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "CalendarModule";

    @ReactMethod fun createCalendarEvent(name: String, location: String) {
        Log.d("CalendarModule", "Create event called with name: $name and location: $location")
    }

     @ReactMethod fun showMessage(num1: Int, num2: Int, cb: Callback) {
        val sum = num1 + num2;

        cb.invoke("The sum is: $sum");

    }

    @ReactMethod fun returnNumerFromPromise(promise: Promise) {
        promise.reject("Error");
    }

}


