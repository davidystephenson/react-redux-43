export function getHamburgerByIndex (
  index
) {
  return function (store) {
    return store[index]
  }
}