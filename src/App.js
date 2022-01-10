import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import indexRoutes from './routes/index';

function App() {
  return (
    <main>
      <header>
        <h1>
          Todo list <span>PRO</span>
        </h1>
      </header>

      <section>
        <section id="left">
          <Router>
            <Switch>
              {indexRoutes.map(({ isExact, path, component }, key) => {
                return (
                  <Route
                    exact={isExact}
                    path={path}
                    component={component}
                    key={key}
                  />
                );
              })}
            </Switch>
          </Router>
        </section>
        <section id="right">
          <ul>
            <Router>
              {indexRoutes.map(({ path, title }, key) => {
                return (
                  <li key={key}>
                    <Link key={key} to={path}>
                      {' '}
                      {title}{' '}
                    </Link>
                  </li>
                );
              })}
            </Router>
          </ul>
        </section>
      </section>
    </main>
  );
}

export default App;
