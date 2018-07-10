import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ItemDetailContainer from './containers/ItemDetailContainer'
import ItemsContainer from './containers/ItemsContainer'
import store from './store'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ItemsContainer}/>
      <Route path="/items/:id" component={ItemDetailContainer}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)

