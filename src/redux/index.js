import { combineReducers } from 'redux-immutable';
import entities from './entities.js';
import postsBySubreddit from './postBySubreddit.js';
import selectedSubreddit from './selectedSubreddit.js';
import routing from './routing.js';
/**
 * combineReducers is important to understand. As your app might grow in size
 * and complexity, you will likely begin to split your reducers into separate
 * functions - with each one managing a separate slice of the state! This helper
 * function from 'redux' simply merges the reducers. Keep in mind we are using
 * the ES6 shorthand for property notation.
 *
 * If you're transitioning from Flux, you will notice we only use one store, but
 * instead of relying on multiple stores to manage diff parts of the state, we use
 * various reducers and combine them.
 *
 * More info: http://rackt.org/redux/docs/api/combineReducers.html
 */

const rootReducer = combineReducers({
  entities,
  selectedSubreddit,
  postsBySubreddit,
  routing,
});

export default rootReducer;