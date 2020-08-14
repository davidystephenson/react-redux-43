import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
  newOrder, setNumber, deleteBurger
} from './actions'
import {
  getBurgers,
  getBurger,
  getNumber,
  lettuceBurgers
} from './selectors'

function App() {
  const dispatch = useDispatch()

  // Get something out of the store to show it
  const hamburger = useSelector(
    getBurger
  )
  const number = useSelector(getNumber)
  const burgers = useSelector(getBurgers)
  const lettuces = useSelector(lettuceBurgers)
  console.log('lettuces test:', lettuces)

  function destroy (meat) {
    const action = deleteBurger(meat)

    dispatch(action)
  }

  const items = lettuces
    .map(burger => <li>
      {burger.meat}
      {' '}
      <button
        onClick={
          () => destroy(burger.meat)
        }
      >
        Delete
      </button>
    </li>)

  function onChange (event) {
    const action = setNumber(
      event.target.value
    )
    
    dispatch(action)
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
      <ol>{items}</ol>

      <input
        type='range'
        max='2'
        min='0'
        onChange={onChange}
        value={number}
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
