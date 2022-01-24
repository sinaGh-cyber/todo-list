import indexRoutes from '../../routes/index';
import { Route, Switch } from 'react-router-dom';
import AlertProvider from '../../provider/alertProvider';
import { useAlert } from '../../provider/alertProvider';
import Alert from '../alert/Alert';
import Classes from './mainApp.module.css';
import PriorityQueueProvider from '../../provider/priorityQueueProvider';

const MainApp = () => {
  return (
    <PriorityQueueProvider>
      <section id={Classes.left}>
        <Alert></Alert>

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
