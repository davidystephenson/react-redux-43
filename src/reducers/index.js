import { combineReducers } from 'redux'

import burgers from './burgers'
import number from './number'

export default combineReducers({
  burgers, number
})