import React from 'react';

import {Route, Redirect, Switch} from 'react-router-dom'

import ItemsContainer from "./containers/ItemsContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

const App = () => (
    <Switch>
        {/*<Route exact path="/" render={() => {*/}
        {/*let token = localStorage.getItem('token');*/}
        {/*return token ? <Redirect to='/'/>: <Redirect to='/'/>//main or signin*/}
        {/*}}/>*/}
        <Route exact path='/' component={ItemsContainer}/>
        <Route exact path='/items/:id' component={ItemDetailContainer}/>
    </Switch>
)

export default App;




