---
title: Setup Flutter Without AS
description: How to setup flutter without Android Studio
date: '2023-01-02'
categories:
  - 'Flutter'
  - 'HowTo'
---

I'm going to show you how I set up Flutter here without using Android Studio.

> Using Android Studio to install Flutter on your PC is the simplest method.

But what if you prefer to use VsCode instead of installing Android Studio?

> After setting up flutter, you can remove Android Studio and continue working with VsCode.

But what if you don't want to install Android Studio? then let's get going.

## Install Flutter Sdk

### Downloading The Flutter Sdk

Visit the [Flutter](https://flutter.dev) website, click "Get Started," choose your operating system, and then Install the flutter Sdk by downloading it and extracting it, for instance, in Windows to `C:\src\flutter` or in Linux to `/home/abdi/flutter`. What I prefer doing is using git to download Flutter.

```
git clone https://github.com/flutter/flutter.git -b stable
```

### Add the `flutter` tool to your path

#### For linux

If you extracted flutter in `/home/abdi/flutter` make the following addition to your `.bashrc` file.

```
export PATH="$PATH:`pwd`/flutter/bin"
```

```bash
source ~/.bashrc
```

and to verify run

```bash
flutter doctor
```

#### For Windows

Click on the Start button on your computer, type `env` and then click **Edit environment variables for your account.** , then select **Environment Variables**. Now add the flutter sdk path variable by clicking the path under User Variables.

```
flutter doctor
```

## Install JDK

### For Windows

I suggest using Microsoft's **Coding Pack For Java** to install the JDK. Go to [this](https://code.visualstudio.com/docs/java/java-tutorial) website and download **Install the Coding Pack for Java - Windows,** which will install both Java and Vscode without any issues if you've already installed Vscode.

### For Linux

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

### For windows

```
sdkmanager.bat "platform-tools" "platforms;android-31" "build-tools;30.0.3" "extras;google;m2repository" "extras;android;m2repository"
```

```
flutter doctor --android-licenses
```

#### Add Andoid Sdk to Path

Click on the Start button on your computer, type `env` and then click **Edit environment variables for your account.** , then select **Environment Variables**.

Click **New** under the user Variable and enter `ANDROID_HOME` as the variable name and `C:\Android\sdk` as the variable value. then click **Ok**.

and from there again go to path under user variable and add `C:\Android\sdk\platform-tools` and `C:\Android\sdk\tools`

### For Linux

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
