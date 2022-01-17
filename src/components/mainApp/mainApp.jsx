import indexRoutes from '../../routes/index';
import { Route, Switch } from 'react-router-dom';
import Classes from './mainApp.module.css';
import PriorityQueueProvider from '../../provider/priorityQueueProvider';
import { Node } from '../priorityQueue/priorityQueue';

const MainApp = () => {
  return (
    <PriorityQueueProvider>
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
    </PriorityQueueProvider>
  );
};

export default MainApp;
