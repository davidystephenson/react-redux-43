import React, { useEffect } from 'react'

import axios from 'axios'

import {
  useDispatch,
  useSelector
} from 'react-redux'

import {
  lettuceBurgers
} from './selectors'
import {
  deleteBurger,
  fetchAllBurgers
} from './actions'

export default function List () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllBurgers);
  }, [dispatch]);

  const lettuces = useSelector(lettuceBurgers)

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

  return <>
    <h3>Lettuce burgers</h3>

    <ol>
      {items}
    </ol>
  </>
}