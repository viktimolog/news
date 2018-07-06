import React from 'react'
import './App.css'
import AppHeaderContainer from './containers/AppHeaderContainer'
import ItemsContainer from './containers/ItemsContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'

const App = () => (

  <div className='app'>

    <AppHeaderContainer/>
      <ItemsContainer/>
      <ItemDetailContainer/>

    {/*<AppFooterContainer/>*/}

  </div>
)

export default App

