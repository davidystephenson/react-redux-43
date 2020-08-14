const initial = 0

function reducer (
  state = initial, action
) {
  switch (action.type) {
    case 'SET_NUMBER': {
      return action.payload
    }

    default: {
      return state
    }
  }
}

export default reducer