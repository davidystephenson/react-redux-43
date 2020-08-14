export function getBurger (store) {
  const { burgers, number } = store

  return burgers[number]
}

export function getNumber (store) {
  return store.number
}

export function getBurgers (store) {
  return store.burgers
}

export function lettuceBurgers (store) {
  return store.burgers.filter(
    burgers => burgers.lettuce
  )
}

// function getHamburgerByIndex (index) {
//   return function (store) {
//     return store.burgers[index]
//   }
// }
// 
// const selector = getHamburgerByIndex(index)
// // selector === function (store) { return store.burgers[index] }
// useSelector(selector) // useSelector(() => {})
