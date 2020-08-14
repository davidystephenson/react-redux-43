import React from 'react';

import { Route } from 'react-router-dom'

import All from './All'
import List from './List'

function App() {
  return <>
    <Route
      exact
      path='/'
      component={All}
    />
    <Route
      path='/lettuce'
      component={List}
    />
  </>
}

export default App;
