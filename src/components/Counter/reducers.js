import * as constants from './constants'

export default function counter(state = 0, action) {
  switch (action.type) {
    case constants.INCREMENT: {
        return state + 1
        break
    }
    case constants.INCREMENT_IF_ODD: {
        return (state % 2 !== 0) ? state + 1 : state
        break
    }
    case constants.DECREMENT: {
        return state - 1
        break
    }
    default:
      return state
  }
}

