const initial = []

// { type: 'NEW_ORDER', payload: 'chicken' }

function reducer (state = initial, action) {
  console.log('action test:', action)
  switch (action.type) {
    case 'NEW_ORDER': {
      // WRONG (mutating, assignment, = (equal signs))
      // const burger = state
      //   .find(burger => burger.meat === action.payload)
      // burger.orders = burger.orders + 1

      // RIGHT (returning, copying, ... (spread))
      // 1. Make a totally new value
      // of the whole state
      console.log('oldState test:', state)
      const newState = state.map(burger => {
        console.log('oldBurger test:', burger)
        if (burger.meat === action.payload) {
          const newOrders = burger.orders + 1
          const newBurger = { ...burger, orders: newOrders }
          console.log('newBurger test:', newBurger)

          return newBurger
        }

        return burger
      })
      console.log('newState test:', newState)

      // 2. Return that new value
      return newState
    }

    case 'DELETE_BURGER': {
      return state.filter(burger =>
        burger.meat !== action.payload
      )
    }

    case 'ALL_BURGERS': {
      return action.payload
    }

    default: {
      return state
    }
  }
}

export default reducer