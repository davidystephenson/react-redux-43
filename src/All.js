import React, {
  useState, useEffect
} from 'react';

import axios from 'axios'
import {
  useSelector, useDispatch
} from 'react-redux'

import {
  fetchAllBurgers,
  setNumber
} from './actions'
import {
  getBurgers,
  getBurger,
  getNumber,
} from './selectors'

import Details from './Details'
import List from './List'

function All () {
  const dispatch = useDispatch()

  // Get something out of the store to show it
  const hamburger = useSelector(
    getBurger
  )
  const number = useSelector(getNumber)
  const burgers = useSelector(getBurgers)

  function effect () {
    dispatch(fetchAllBurgers)
  }

  useEffect(effect, [dispatch])

  function onChange (event) {
    const action = setNumber(
      event.target.value
    )
    
    dispatch(action)
  }

  return (
    <>
      <List />

      <h3>
        All burgers
      </h3>

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

export default All;
