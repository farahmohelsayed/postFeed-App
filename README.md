# Postfeed App

Built a sample social platform application using React native and typeScript. This version of the app currently covers 3 screens; splash, post feed  and post details screen

## Description
The App is an e-commerce platform that allows you to purchase a variety of products.The products, along with it's description, are displayed on the homepage and hence  add products to the cart.


## What You're Getting
```bash
project-root/
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



## Starting the App
#### `npm install`
To install all the dependencies and packages found in package.json.
#### `npx react-native run-android`
To run the app on android device; real device or an emulator
#### `npx react-native run-ios`
To run the app on an IOS device; real device or simulator
#### `npx react-native start` or `npm start`
To run the app on an IOS device; real device or simulator



## Other Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
