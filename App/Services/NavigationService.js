import { NavigationActions, StackActions } from 'react-navigation'

let navigator

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

function navigateBack() {
  navigator.dispatch(NavigationActions.back())
}

function navigateAndReset(routeName, params) {
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName,
          params,
        }),
      ],
    })
  )
}

export default {
  navigate,
  navigateBack,
  navigateAndReset,
  setTopLevelNavigator,
}
