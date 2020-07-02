# Flashcards
This project is done for Udacity React Nano Degree mentor/reviewer certification. 
It is a react native application which allows user to create a deck and save few questions cards in each deck. User can do the following:
- Create a new Deck
- Add cards to an existing deck
- Take a quiz of an existing deck
- Delete a deck  


## Installing the app
Go to the root folder of the app and run:
### `npm install`

## Running the app
Go to the root folder of the app and run:
### `expo start` or `npm start`


## Platform
This app was developed and tested using [expo](https://expo.io/) running on OnePlus 6(Android 10)


## App folder structure

    ├── node_modules            # All project dependencies modules are installed here
    ├── android/ios             # built app installers
    ├── package.json            # all project dependencies, scripts to build/run the app
    ├── src                     # Folder to store all source files (js,ts,tsx)
    │   ├── actions             # Redux actions of the app
    │   ├── redux               # Reducer and store of the app
    │   ├── utils               # API and helper functions
    │   ├── sagas               # Redux saga functions for async API calls
    │   └── components          # UI components of the app
    └── README.md               # this file, instructions for building/using the app

Note: This project was created using create-react-native-app

## Things to do
- Better styling
- Test on IOS devices
