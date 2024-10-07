# Create Expo project
- npx create-expo-app@latest (for typescript )
- npx create-expo-app <project name> --template blank (for javascript)


# Install Dependencies
- web = npx expo install react-dom react-native-web @expo/metro-runtime
- advance = npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar


# Run app
- npx expo start

# Changes 
- from file package.json change main to =>  "main": "expo-router/entry",
- in app.json just below name paste => "scheme": "<project name>",

# For file base
- Create fole app in project
- Create file index.jsx in app
- Copy all from App.js and delete it
- Paste it in index.jsx file

# Device connection without SDK's
- Install expo go from playstore 
- scan QR provided to us while starting the app 
- Shake for config after connection
- Note: should be in same network, No VPN

# Shortcuts
- rnfes = to create basic template

# Styling (TailWindCSS == NativeWind)
- npm install tailwindcss postcss autoprefixer nativewind
- npm install --save-der tailwindcss@latest
- npx tailwindcss init 
- In tailwind.config.js change content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
- In babel.config.js paste => plugins: ["nativewind/babel"]  Below presets.
- Note: If it doesnot work just wait and pray for god then after a moment it will work idk how but it will work.
