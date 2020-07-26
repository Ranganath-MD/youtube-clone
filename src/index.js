import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/global.scss"
import { Provider } from "react-redux"

// initializing the redux store
import configureStore from "./redux/ConfigureStore"
const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})


console.log(store.getState())

// Wrapping provider to the app
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app,document.getElementById('root'));
