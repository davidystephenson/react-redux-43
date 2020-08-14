export function newOrder (meat) {
  const action = {
    type: 'NEW_ORDER',
    payload: meat
  }

  return action
}