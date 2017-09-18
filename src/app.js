import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './conf'
import Button from './components/Button'
import TestSnackbar from './components/TestSnackbar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()


const App = function()
{
    return (
        <MuiThemeProvider>
            <Provider store={store}>
                <TestSnackbar >Karl</TestSnackbar>
            </Provider>
        </MuiThemeProvider>
    )
}

render(
    <App></App>,
    document.getElementById('root')
)
