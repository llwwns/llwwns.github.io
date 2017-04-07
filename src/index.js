import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'App'

import 'semantic-ui-css/semantic.min.css'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App);
if (module.hot) {
  module.hot.accept('App', () => {
    render(App)
  })
}
