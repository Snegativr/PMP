import React from 'react'
import Cryptos from './src/Cryptos'
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


const store = createStore(rootReducer)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store} >
                <Cryptos />
            </Provider>
        )
    }
}
