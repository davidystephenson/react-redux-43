import React, {
  useState, useEffect
} from 'react';

import axios from 'axios'
import {
  useSelector, useDispatch
} from 'react-redux'

import {
  allBurgers,
  newOrder,
  setNumber,
  deleteBurger
} from './actions'
import {
  getBurgers,
  getBurger,
  getNumber,
  lettuceBurgers
} from './selectors'

import Details from './Details'

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

  async function fetchBurgers () {
    try {
      const response = await axios
        .get('http://localhost:4000')

      const { data } = response

      const action = allBurgers(data)

      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }

  function effect () {
    fetchBurgers()
  }

  useEffect(effect, [])

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

      <Details burger={hamburger} />
    </>
  )
}

export default App;
