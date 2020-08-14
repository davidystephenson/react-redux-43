import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { newOrder } from './actions'
import {
  getHamburgerByIndex
} from './selectors'

function App() {
  const [index, setIndex] = useState(0)

  console.log('index test:', index)

  // Get something out of the store to show it
  const selector = getHamburgerByIndex(index)

  const hamburger = useSelector(selector)

  const dispatch = useDispatch()

  console.log('hamburger test:', hamburger)

  function onChange (event) {
    setIndex(event.target.value)
  }

  function onClick () {
    // 1. Make the action object
    // type - string that matches a reducer case
    // payload? - anything else that describes the behavior
    const action = newOrder(hamburger.meat)

    // 2. Dispatch the action to the store
    dispatch(action)
  }

  return (
    <>
      <input
        type='range'
        max='2'
        min='0'
        onChange={onChange}
        value={index}
      />

      <h1>{hamburger.meat}</h1>

      <p>
        Does it have lettuce?
        {' '}
        {hamburger.lettuce ? 'Yes' : 'No'}
      </p>

      <h4>{hamburger.orders} happy customers :)</h4>

      <button onClick={onClick}>Order now!</button>
    </>
  )
}

export default App;
