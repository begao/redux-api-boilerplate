import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';

import Reddit from '../containers/Reddit';
import FooView from '../layout/FooView';
import BarView from '../layout/BarView';

/**
 * Component is exported for conditional usage in Root.js
 */
export default class Root extends PureComponent {
  static propTypes = {
    store: React.PropTypes.object,
    history: React.PropTypes.object,
  }

  render() {
    const { store, history } = this.props;
    return (
      /**
       * Provider is a component provided to us by the 'react-redux' bindings that
       * wraps our app - thus making the Redux store/state available to our 'connect()'
       * calls in component hierarchy below.
       */
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Reddit} />
            <Route path="foo" component={FooView} />
            <Route path="bar" component={BarView} />
          </Route>
        </Router>
      </Provider>
    );
  }
};