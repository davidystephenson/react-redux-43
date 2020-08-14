import React from 'react'

import { useDispatch } from 'react-redux'

import { newOrder } from './actions'

export default function Details ({
  burger
}) {
  const dispatch = useDispatch()

  function onClick () {
    // 1. Make the action object
    // type - string that matches a reducer case
    // payload? - anything else that describes the behavior
    const action = newOrder(
      burger.meat
    )

    // 2. Dispatch the action to the store
    dispatch(action)
  }


  if (burger) {
    return <>
      <h1>{burger.meat}</h1>

      <p>
        Does it have lettuce?
        {' '}
        {burger.lettuce ? 'Yes' : 'No'}
      </p>

      <h4>
        {burger.orders}
        {' '}
        happy customers :)
      </h4>


      <button onClick={onClick}>
        Order now!
      </button>
    </>
  }

  return null
}