---
title: The Quirks of Webview in Android
keywords: android, java, mobile, webview, developer
description: |
  Webview is a great way to display web content inside an Android app. Unfortunately, it has some unexpected quirks that can waste you some precious development time. Check here for some of the quirks that I have encountered
tags:
---

Sometime when developing an Android app, you find the needs to display an html page inside the application. You write your layout file, put in a `WebView`, and tell it to load a certain url, and you run it. But.. wait.. something is not exactly right with it. So you scratch your head, trying to figure out what is wrong with your code. Well, the cause of it might not lies in your code. Below are some places on which `WebView` doesn't behave as expected.

### 1. `<audio>` Tag

First thing to take note is, audio doesn't work in the emulator, so you need to test it on a real device. This is true for all kind of audio, not just inside `WebView`. For html audio tag though, there is one more quirk. It can't play audio files that reside in your assets folder. If the html file is editable, then it's better to change the approach, and use `JavascriptInterface` to tell Android to load and play the audio. If not, then you might get lucky by doing something like

```java
webview.setWebViewClient(new WebViewClient() {
  public boolean shouldOverrideUrlLoading (WebView view, String url) {
    if(url.endsWith(".mp3")){
      if (mp != null) {
        mp.stop();
        mp.release();
        mp = null;
      }

      url = url.replace("file:///android_asset/", "");

      try {
        AssetFileDescriptor afd = context.getAssets().openFd(url);

        mp = new MediaPlayer();
        mp.setDataSource(

        afd.getFileDescriptor(),
        afd.getStartOffset(),
        afd.getLength());
        afd.close();

        mp.prepare();
        mp.start();
      } catch (IllegalArgumentException e) {
      } catch (IllegalStateException e) {
      } catch (IOException e) {
      }

      return true;
    }

    return super.shouldOverrideUrlLoading(view, url);
  }
});
```

### 2. White Page on Orientation Change

Normally, something like this can be solved by overriding `OnSaveInstanceState` and `OnRestoreInstanceState`. But, unfortunately, `WebView` doesn't saved the loaded page when you call `webview.saveState(bundle)` and then restore it. The only solution that I found to be working is to take care of orientation by your self, by adding the following code to the manifest file.

```xml
<activity
  ...
  android:configchanges="keyboard|keyboardHidden|orientation|screenSize">
</activity>
```

This will effectively tell the system, to not destroy the `WebView` (and the Activity itself) when changing orientation. As a bonus, you will also get a nice rotating animation. The downside of this is, since the Activity, is not recreated, you can't use different layout for portrait and landscape.

### 3. Broken Emulator on API Level 10

This one is a rather long running bug that should have been fixes. If you're building the app using API level 10, no matter what you do, the `WebView` will crash when loading a URL. The only thing you can do is to test it on a real device, or use a different API level in the emulator.
