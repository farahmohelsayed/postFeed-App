# Postfeed App

Postfeed App is a social platform prototype built using React Native and TypeScript, designed to showcase basic functionalities such as viewing posts, displaying comments, and viewing post details.

## Overview
The Postfeed App provides users with the ability to browse through available posts, see the number of comments on each post, and view detailed information for individual posts. While the current version focuses on basic read functionalities, future updates will include features for adding comments and managing user profiles.

![Screenshot_1719069727](https://github.com/farahmohelsayed/postFeed-App/assets/39137949/d4180e7f-ffd8-4540-a995-1ca9686697e2)
![Screenshot_1719088121](https://github.com/farahmohelsayed/postFeed-App/assets/39137949/a00fca00-44f7-4ea6-be15-378e75e631a1)
![Screenshot_1719088158](https://github.com/farahmohelsayed/postFeed-App/assets/39137949/cf5f4de1-b9a8-4821-b4ba-7ff9c4580ee1)
![Screenshot_1719088132](https://github.com/farahmohelsayed/postFeed-App/assets/39137949/c7db5499-a49c-4efd-98a5-005cd6c31b95)

## Project Structure
```bash
postFeed-App/
├── App.tsx                 
├── index.js                
├── src/
│   ├── assets/             // Static assets (images, fonts, etc.)
│   │   └── images/      
│   ├── components/         // Reusable UI components
│   │   ├── PostItem.tsx   
│   │   └── UserCard.tsx   
│   ├── navigation/         // Navigation setup
│   │   └── Navigation.tsx 
│   ├── screens/            // Main app screens
│   │   ├── splashScreen/   
│   │   │   └── SplashScreen.tsx  
│   │   ├── homeScreen/    
│   │   │   └── HomeScreen.tsx   
│   │   └── postDetailScreen/
│   │   │    └── PostDetailScreen.tsx  
│       └──screens.dto.ts         // Type definitions (TS interfaces)
├── .gitignore              // Git ignore file
├── package.json            // NPM package file
└── README.md               // Project documentation

```

## Prerequisites
Ensure you have Node.js, npm and react native cli installed on your machine.

## Installation
#### 1. Clone the repository:
```bash
git clone  https://github.com/farahmohelsayed/postFeed-App.git
cd postFeed-App
 ```
#### 2. Install dependencies
```bash
npm install
```

## Running the App
#### Android
To run the app on an Android device (real device or emulator):
```bash
npx react-native run-android
```
#### iOS
To run the app on an iOS device (real device or simulator):
```bash
npx react-native run-ios
```

## Starting the Metro Bundler
To start the Metro bundler:
```bash
npx react-native start
```
### or

```bash
npm start
```

