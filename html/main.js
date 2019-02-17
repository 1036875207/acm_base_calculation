import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Mycomponent from './src/mycomponent'
import reducers from './src/reducers'

const store = createStore(reducers)

render(
    <div>
        {/* 使所有的React组件都变为Provider的后代组件 */}
        <Provider store={store}>
            <Mycomponent>
            </Mycomponent>
        </Provider>
    </div>,
    document.getElementById('app')
);