/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App)

import Provider from 'react-redux/es/components/Provider';

// redux provider 추가
// import {Provider} from 'react-redux';
// import store from './src/store';

// const RNRedux = () => {
//     <Provider store={store}>
//         <App />
//     </Provider>
// }

// AppRegistry.registerComponent(appName, () => RNRedux)