import axios from 'axios'

export function newOrder (meat) {
  const action = {
    type: 'NEW_ORDER',
    payload: meat
  }

  return action
}

export function setNumber (number) {
  const action = {
    type: 'SET_NUMBER',
    payload: number
  }

  return action
}

export function deleteBurger (meat) {
  const action = {
    type: 'DELETE_BURGER',
    payload: meat
  }

  return action
}

export function allBurgers (burgers) {
  const action = {
    type: 'ALL_BURGERS',
    payload: burgers
  }

  return action
}

export async function fetchAllBurgers (
  dispatch, getState
) {
  console.log('inner')
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