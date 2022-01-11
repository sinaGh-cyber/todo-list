import Classes from './menu.module.css';
import { Link } from 'react-router-dom';
import indexRoutes from '../../routes/index';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Menu = () => {
  return (
    <section id={Classes.right}>
      <ul>
        {indexRoutes.map(({ path, title }, key) => {
          return (
            <li key={key}>
              <StyledLink key={key} to={path}>
                {' '}
                {title}{' '}
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
