/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import { store } from './src/store';



const Root = () => {
    return (
    <Provider store={store}>
        {/* <PersistGate loading={null} persistor = {persistor}> */}
            <App />
        {/* </PersistGate> */}
    </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Root);

// AppRegistry.registerComponent(appName, () => App);


