import Classes from './menu.module.css';
import { Link } from 'react-router-dom';
import indexRoutes from '../../routes/index';

const Menu = () => {
  return (
    <section id="right">
      <ul>
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
      </ul>
    </section>
  );
};

export default Menu;
