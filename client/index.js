import './styles/index.scss';
import React from 'react';
import { render } from 'react-dom';
import { generateStore } from './js/store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Home } from './js/components/home';
import { Contact } from './js/components/contact';
import { workContainer as Work } from './js/containers/work';

let store = generateStore();
window.__store = store;

const App = () => (
  <Provider store={store}>
  <Router>
    <div>
      <nav className="level">
        <p className="level-item has-text-centered">
          <Link className="link is-info" to="/">Home</Link>
        </p>
        <p className="level-item has-text-centered">
          <Link className="link is-info" to="/work">Work</Link>
        </p>
        <p className="level-item has-text-centered">
          <Link className="link is-info" to="/contact">Contact</Link>
        </p>
      </nav>
      

      <Route exact path="/" component={Home}/>
      <Route path="/work" component={Work}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
  </Provider>
)

render(<App />, document.querySelector('#root'))

export default App