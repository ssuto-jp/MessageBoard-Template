# message-board-template

## Overview
This is a template of message board.Vue.js is used for the frontend and Firebase for the backend.
This template use Vuetify for UI framework.

## Quick Start Guide
Steps:
 1. Fork this repository(on Github)
 2. Run "git clone" that repository
 3. Create your own project in Firebase console, then create Firestore.
 4. Create your own project with Typescript and firebase-config.ts in src/config directory by copy & paset firbaseConfig from Firebase console, which should look like this.

```
export const firebaseConfig = {
    apiKey: "AIzaSyApjBGAxPfeL-jxDA7tUvtN-pBG26C9XVI",
    authDomain: "message-board-template.firebaseapp.com",
    databaseURL: "https://message-board-template.firebaseio.com",
    projectId: "message-board-template",
    storageBucket: "message-board-template.appspot.com",
    messagingSenderId: "338314202049",
    appId: "1:338314202049:web:26f36f33ecc650f84e7d40",
    measurementId: "G-V8LN24XD4Z"
}
```
5. Run "firebase login" to login to your Google account.
6. Run "yarn install" to install required node modules.
7. Run "yarn serve" to run it locally for development.
8. Open "http://localhost:8080" on your browser.

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
