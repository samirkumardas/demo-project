
function getServerUrl () {
  /* eslint-disable */
  // return (__DEV__) ? 'http://38.102.83.164:3030' : 'http://38.102.83.164:3000'
  return 'http://192.168.1.122:3030'
}

const CONSTANTS = {

  SERVER_URL: getServerUrl(),

  SOCKET_OPTIONS: { transports: ['websocket'], pingTimeout: 3000, pingInterval: 5000 },

  JWT_KEY: 'feathers-jwt',

  SERVICE_NAMES: {
    MESSAGES: 'messages',
    VERIFY_TOKEN: 'verifytoken',
    USERS: 'users',
    TYPING: 'typing',
    DESTINATIONS: 'destinations',
    TRIPS: 'trips',
    PROPERTIES: 'properties',
    BOOKINGS: 'bookings',
    PAYMENTS: 'payments',
    CARDS: 'cards',
    QUESTIONS: 'questions'
  },

  PROPERTY_TAGS: [
    {name: 'stay', label: 'STAY'},
    {name: 'fly', label: 'FLY'},
    {name: 'ride', label: 'RIDE'},
    {name: 'sail', label: 'SAIL'},
    {name: 'taste', label: 'TASTE'},
    {name: 'see', label: 'SEE'}
  ],

  MESSAGE_TYPES: {
    TEXT: 'TEXT',
    CUSTOM_EVENT: 'CUSTOM_EVENT',
    SYSTEM: 'SYSTEM',
    PROPERTY: 'PROPERTY',
    ACTIVITY: 'ACTIVITY'
  }
}

export default CONSTANTS
