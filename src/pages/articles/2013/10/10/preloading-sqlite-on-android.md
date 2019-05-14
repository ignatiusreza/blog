---
title: Preloading SQLite in Android
keywords: android, java, sqlite, database, preloaded, mobile
description: |
  In developing an Android app, you have the ability to store data in the form of sqlite. However, it came short when you want to preload it with existing datas. How can you solve this?
tags: java, sqlite, database, android
---

In developing an Android app, you have the ability to store data in the form of sqlite. Android already have great support for this, and it is well documented here. Unfortunately, up to when this is written, there is no built in support for working with preloaded sqlite files. There is however a way to solve this. The trick is to store the sqlite files under the assets folder, and then tell Android to generate the coresponding system sqlite files, then overwrite it.

Here's how, create a class that extends `SQLiteOpenHelper`, but, ignore the required `onCreate` and `onUpdate` methods

```java
public class MySQLiteOpenHelper extends SQLiteOpenHelper {
  private static final String  DB_NAME    = "databasename.sqlite";
  private static final int     DB_VERSION = 1;

  private final Context            _context;

  private MySQLiteOpenHelper(Context context) {
    super(context, DB_NAME, null, DB_VERSION);
    this._context = context;
  }

  @Override
  public void onCreate(SQLiteDatabase db) { }

  @Override
  public void onUpgrade(SQLiteDatabase db,
                        int            oldVersion,
                        int            newVersion) {  }
}
```

By doing so, we can tell Android to generate `databasename.sqlite` under the system folder by calling `getReadableDatabase()`. After which we can then overwrite it with the shipped sqlite file. As a best practice, let's make our `SQLiteOpenHelper` a singleton, by adding the following to the class

```java
private static String            DB_PATH    = null;
private static ChapterOpenHelper _instance  = null;

public static ChapterOpenHelper getInstance(Context context) {
  if (_instance == null) {
    // Let's store the location of the
    // system databases folder.
    // This will translate into
    // /data/data/package_name/databases/
    DB_PATH = context.getFilesDir()
                     .getParentFile()
                     .getPath() + "/databases/";

    _instance = new ChapterOpenHelper(context);
    try {
      // this will trigger the database
      // checking and copying when needed
      _instance.prepareDatabase();
    } catch (IOException e) {
    }
  }

  return _instance;
}
```

Having done that, what's left is to write the implementation for the `prepareDatabase()` method, it going to do two things, first check if the database already existed, then, if not, generate and overwrite it.

```java
private void prepareDatabase() throws IOException {
  if (checkDatabase()) {
    // do nothing
  } else {
    // Tell Android to create the system database,
    // for us to overwrite
    getReadableDatabase();

    try {
      // overwrite it!
      copyDatabase();
    } catch (IOException e) {
      throw new Error("Woops! Something wrong!");
    }
  }
}

// Check if the system database already exist
private boolean checkDatabase() {
  SQLiteDatabase db = null;

  try {
    String dbPath = DB_PATH + DB_NAME;
    db = SQLiteDatabase.openDatabase(
        dbPath,
        null,
        SQLiteDatabase.NO_LOCALIZED_COLLATORS |
        SQLiteDatabase.OPEN_READONLY);
  } catch (SQLiteException e) {
    // database does't exist yet.
  }

  if (db != null) {
    // close it if it's exists
    db.close();
  }

  return db != null ? true : false;
}

// proceed with the copying
private void copyDatabase() throws IOException {
  // open the shipped database from your assets folder
  InputStream input = _context.getAssets().open(DB_NAME);

  // path to the system database
  String dbPath = DB_PATH + DB_NAME;

  // Open the system database as the output stream
  OutputStream output = new FileOutputStream(dbPath);

  // transfer bytes from the input to the output
  byte[] buffer = new byte[1024];
  int length;
  while ((length = input.read(buffer)) > 0) {
    output.write(buffer, 0, length);
  }

  // Close the streams
  output.flush();
  output.close();
  input.close();
}
```

We can then use our shipped database like so

```java
dbHelper = MySQLiteOpenHelper.getInstance(context);
```

You might have noticed that `SQLiteDatabase` have an `openDatabase` method, and it receive a path parameter. Logically, we should be able to use it to open the shipped database file directly from the assets folder. However, such is not the case. As of this writing, the `openDatabase` method, can not be used to access sqlite file under the assets folder. Hence, we need to trick the system by copying it first. :)

[source](http://www.reigndesign.com/blog/using-your-own-sqlite-database-in-android-applications/)
