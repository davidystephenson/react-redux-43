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