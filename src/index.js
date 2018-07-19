import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import counter from './reducers'
import {increment,decrement,multiplied,divided} from './Actions'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <App
        state={store.getState()}
        onIncrement={(index) => store.dispatch(increment(index))}
        onDecrement={(index) => store.dispatch(decrement(index))}
        onMultiplied={(index,multipler) => store.dispatch(multiplied(index,multipler))}
        onDivided={(index,multipler) => store.dispatch(divided(index,multipler))}
    />,
    rootEl
)

render()
store.subscribe(render)