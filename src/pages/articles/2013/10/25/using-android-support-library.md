---
title: Using Android Support Library
keywords: android, mobile, java, support, library, bug, developer, froyo, gingerbread, honeycomb, ice cream sandwhich, jelly beans
description: |
  Supporting older version of Android is relatively easy, since Google gave us the support library. But, unfortunately, installing it properly is a bit problematic. Check here for the proper installation way.
tags: java, android
---

Despite Google attempt to keep pushing newer version of Android to the market. Device manufacturer is still lacking behind in conveying the updates to user for various reasons. Geeks around the world has been benefiting from community projects such as [CyanogenMod](http://cyanogenmod.com/) for alternative in getting the updates. On the other hands, non-tech-savvy user is still desperately locked on the decision made by their device manufacturer. This results in, by the time of writing, Gingerbread (API Level 10) still holding on 28.5% of the available device. You can see the updated distribution [here](http://developer.android.com/about/dashboards/index.html) btw.

Now, for us developer, this means that not supporting those devices equal a big lost in market opportunity. Luckily Android have backward compatibility support for their newest features covered in the form of [Support Library](http://developer.android.com/tools/support-library/setup.html). The guidelines for using it has also been covered there, but.. I encountered a couple of slight bump when trying to use the v7 support library with eclipse.

What they tell you to do, to set it up is basically :

1. Download the library,
2. Import the library project into eclipse and configure it,
3. Tell your project to use the support library.
4. ...
5. Profit!!

What they don't tell you though is, since Android uses Ant, it has the same limitation that Ant have. So for the support library to be installed correctly, you want to make sure that :

1. The path leading to the support library must have no space. I find it work best to just copy the whole project that I use (e.g: `appcompat`), and put it alongside the project using it, then target it using relative path. Example, If your project is at `/path/to/my/project` then put the library at `/path/to/my/library` So that you can refer to it using `../library`

2. When they tell you to "Add the library to your application project", what they meant is actually to:

   1. Open the project properties
   2. Go to Android
   3. Under "Library", click Add and choose the intended library.
   4. See that there is a green checkmark. If you get a redcross instead, it means that ant can't find it, and it usually means the path leading to the library have invalid character (like space).
