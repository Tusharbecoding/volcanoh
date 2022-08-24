import 'dotenv/config'

export default{
  "expo": {
    "name": "volcanoh",
    "owner": "tusharbecoding",
    "slug": "volcanoh",
    "version": "1.0.0",
    "orientation": "portrait",
    "scheme": "volcanoh",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "dark",
    "splash": {
      "image": "./assets/splash1.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.tusharbecoding.volcanoh"
    },
    "android": {
      "package": "com.tusharbecoding.volcanoh",
      "permissions":["READ_EXTERNAL_STORAGE", "WRITE_EXTERNAL_STORAGE", "INTERNET", "CAMERA_ROLL", "CAMERA"],
      "adaptiveIcon": {
        "foregroundImage": "./assets/icon.png",
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID
    },
    
  }
}
