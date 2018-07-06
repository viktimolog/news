import React from 'react'
import './App.css'
import AppHeaderContainer from './containers/AppHeaderContainer'
import ItemsContainer from './containers/ItemsContainer'

const App = () => (

  <div className='app'>

    <AppHeaderContainer/>
      <ItemsContainer/>

    {/*<AppFooterContainer/>*/}

  </div>
)

export default App

