
/*
  a bootstrap like style
*/

import { Platform } from 'react-native'

const LABEL_COLOR = '#000000'
const INPUT_COLOR = '#000000'
const ERROR_COLOR = '#a94442'
const HELP_COLOR = '#999999'
const BORDER_COLOR = '#cccccc'
const DISABLED_COLOR = '#777777'
const DISABLED_BACKGROUND_COLOR = '#eeeeee'
const FONT_SIZE = 13
const FONT_WEIGHT = '500'
const FONT_FAMILY = 'Rubik-Regular'

const stylesheet = {
  fieldset: {},
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 5
    },
    error: {
      marginBottom: 5
    }
  },
  controlLabel: {
    normal: {
      color: LABEL_COLOR,
      fontSize: FONT_SIZE,
      borderRadius: 0,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    },
    // the style applied when a validation error occours
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    }
  },
  helpBlock: {
    normal: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    },
    // the style applied when a validation error occours
    error: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    }
  },
  errorBlock: {
    fontSize: FONT_SIZE,
    marginBottom: 2,
    color: ERROR_COLOR
  },
  textboxView: {
    normal: {
      borderRadius: 0
    },
    error: {
    },
    notEditable: {
    }
  },
  textbox: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      fontFamily: FONT_FAMILY,
      height: 35,
      width: 250,
      paddingVertical: (Platform.OS === 'ios') ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 5,
      backgroundColor: 'white',
      borderWidth: 1,
      marginBottom: 1
    },
    // the style applied when a validation error occours
    error: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 35,
      width: 250,
      paddingVertical: (Platform.OS === 'ios') ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 5,
      borderColor: ERROR_COLOR,
      borderWidth: 1,
      marginBottom: 1
    },
    // the style applied when the textbox is not editable
    notEditable: {
      fontSize: FONT_SIZE,
      height: 35,
      width: 250,
      paddingVertical: (Platform.OS === 'ios') ? 7 : 0,
      paddingHorizontal: 7,
      borderRadius: 5,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      marginBottom: 1,
      color: DISABLED_COLOR,
      backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  }
}
const THEME = {
  BASE_COLOR: 'black',
  formInputStyle: stylesheet
}
export default THEME
