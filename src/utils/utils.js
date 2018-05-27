import { Alert } from 'react-native'

export function customAlert (message) {
  setTimeout(() => {
    Alert.alert((message) || 'Something went wrong, please try again')
  }, 50)
}

export function debounce (func, wait, immediate) {
  let timeout
  return function () {
    let context = this
    let args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

// export function getNavParams(props) {
//   return navParams = { navigatorID, navigatorEventID, screenInstanceID} = props;
// }

export const getNavInfo = ({ navigatorID, navigatorEventID, screenInstanceID }) => ({ navigatorID, navigatorEventID, screenInstanceID })
