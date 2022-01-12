import indexRoutes from '../../routes/index';
import { Route, Switch } from 'react-router-dom';
import Classes from './mainApp.module.css';

const MainApp = () => {
  return (
    <section id={Classes.left}>
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
    </section>
  );
};

export default MainApp;
