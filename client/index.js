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
import { Projects } from './js/components/projects';

let store = generateStore();
window.__store = store;

const App = () => (
  <Provider store={store}>
  <Router>
    <div>
      <nav className="level standard-nav">
        <div className="level-left">
          <p className="level-item has-text-centered">
            <Link className="link is-info is-4 subtitle" to="/">Home</Link>
          </p>
          <p className="level-item has-text-centered">
            <Link className="link is-info is-4 subtitle" to="/work">Work</Link>
          </p>
          <p className="level-item has-text-centered">
            <Link className="link is-info is-4 subtitle" to="/projects">Projects</Link>
          </p>
        </div>
        <div className="level-right">
          <p className="level-item"><a className="subtitle is-5" target="_blank" href="https://github.com/avantgrogg">github</a></p>
          <p className="level-item"><a className="subtitle is-5" target="_blank" href="https://www.linkedin.com/in/dougfgrogg/">linkedin</a></p>
          <p className="level-item"><a className="subtitle is-5" href="mailto:doug@avantgrogg.com">email</a></p>
        </div>
      </nav>

      <nav className="level mobile-nav is-mobile">
          <p className="level-item has-text-centered">
            <Link className="link is-info is-4 subtitle" to="/"><span className="icon is-medium">
            <i className="fa fa-home"></i>
          </span></Link>
          </p>
          <p className="level-item has-text-centered">
            <Link className="link is-info is-4 subtitle" to="/work"><span className="icon is-medium">
            <i className="fa fa-briefcase"></i>
          </span></Link>
          </p>
          <p className="level-item has-text-centered">
            <Link className="link is-info is-4 subtitle" to="/projects"><span className="icon is-medium">
            <i className="fa fa-flask"></i>
          </span></Link>
          </p>
          <p className="level-item"><a className="subtitle is-5" target="_blank" href="https://github.com/avantgrogg"><span className="icon is-medium">
            <i className="fa fa-code-fork"></i>
          </span></a></p>
          <p className="level-item"><a className="subtitle is-5" target="_blank" href="https://www.linkedin.com/in/dougfgrogg/"><span className="icon is-medium">
            <i className="fa fa-linkedin"></i>
          </span></a></p>
          <p className="level-item"><a className="subtitle is-5" href="mailto:doug@avantgrogg.com"><span className="icon is-medium">
            <i className="fa fa-envelope"></i>
          </span></a></p>
      </nav>
      

      <Route exact path="/" component={Home}/>
      <Route path="/work" component={Work}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/projects" component={Projects}/>
    </div>
  </Router>
  </Provider>
)

render(<App />, document.querySelector('#root'))

export default App