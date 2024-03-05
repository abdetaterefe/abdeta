---
title: Setup Flutter Without Android Studio
description: How to setup flutter without Android Studio
date: '2023-01-02'
---

I'm going to show you how to set up Flutter without using Android Studio. While using Android Studio is the simplest method to install Flutter on your PC, you may prefer to use VsCode instead. After setting up Flutter, you can remove Android Studio and continue working with VsCode. Let's get started.

## Install Flutter SDK

### Downloading the Flutter SDK

1. Visit the [Flutter](https://flutter.dev) website.
2. Click "Get Started" and choose your operating system.
3. Download the Flutter SDK and extract it to a preferred location. For example, in Windows, extract it to `C:\src\flutter`, and in Linux, extract it to `/home/abdi/flutter`.
4. Alternatively, you can use git to download Flutter by running the following command:

```bash
git clone https://github.com/flutter/flutter.git -b stable
```

### Add Flutter SDK to your path For Linux

If you extracted Flutter to /home/abdi/flutter, add the following line to your .bashrc file:

```bash
export PATH="$PATH:`pwd`/flutter/bin"
```

Run the following command to apply the changes:

```bash
source ~/.bashrc
```

Verify the installation by running:

```bash
flutter doctor
```

### Add Flutter SDK to your path For Windows

1. Click on the Start button on your computer and type "env".
2. Click "Edit environment variables for your account".
3. Select "Environment Variables".
4. Under User Variables, click "New" and enter the following:
  Variable name: PATH
  Variable value: C:\src\flutter\bin (replace with the actual path to your Flutter bin folder)
5. Click "OK" to save the changes.
6. Verify the installation by running:

```bash
flutter doctor
```

## Install JDK

### Install JDK For Windows

I suggest using Microsoft's **Coding Pack For Java** to install the JDK. Go to [this](https://code.visualstudio.com/docs/java/java-tutorial) website and download **Install the Coding Pack for Java - Windows,** which will install both Java and Vscode without any issues if you've already installed Vscode.

### Install JDK For Linux

Install using your preferred package manager; I'm using Debian in my case.

```bash
sudo apt install default-jdk
```

If this doesn't work see [this](https://stackoverflow.com/questions/14788345/how-to-install-the-jdk-on-ubuntu-linux), Solution

## Installing Android Sdk

Go to [Android Studio Site](https://developer.android.com/studio) and scroll to the end and download `sdkmanager` for your OS under **Command line tools only**.

Exact it in the, for windows `C:\Android\sdk` for linux `/hom/abdi/Andoid/sdk`.

And make new directory named `latest` in the `cmdline-tools` directory and move every file and folder in the `latest` folder.

now go to `latest/bin` and, type this in your terminal

### Installing Android Sdk For windows

```bash
sdkmanager.bat "platform-tools" "platforms;android-31" "build-tools;30.0.3" "extras;google;m2repository" "extras;android;m2repository"
```

```bash
flutter doctor --android-licenses
```

#### Add Andoid Sdk to Path

Click on the Start button on your computer, type `env` and then click **Edit environment variables for your account.** , then select **Environment Variables**.

Click **New** under the user Variable and enter `ANDROID_HOME` as the variable name and `C:\Android\sdk` as the variable value. then click **Ok**.

and from there again go to path under user variable and add `C:\Android\sdk\platform-tools` and `C:\Android\sdk\tools`

### Installing Android Sdk For Linux

```bash
./sdkmanager "platform-tools" "platforms;android-31" "build-tools;30.0.3" "extras;google;m2repository" "extras;android;m2repository"
```

```bash
flutter doctor --android-licenses
```

#### Add Andoid Sdk to Path

edit your .bashrc and add

```bash
export ANDROID_HOME=$HOME/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

```bash
source ~/.bashrc
```

## Checking

run this to ensure that everything is installed correctly.

```bash
flutter doctor -v
```

## Making a hello world app

```bash
flutter create hello_world
cd hello_world
flutter run
```

If you are building and executing a flutter project for the first time after installation, it could take a while because it needs to download some one-time tools like Gradle and others.
