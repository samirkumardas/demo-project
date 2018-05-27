import { combineReducers } from 'redux-immutable';

//import { reducer as formReducer } from 'redux-form';
import adslots from '../components/adslots/reducer';
import filter from '../components/filter/reducer';
import loader from '../components/loader/reducer';
export default combineReducers({
  adslots,
  filter,
  loader
});
