import Classes from './menu.module.css';
import { Link, useLocation } from 'react-router-dom';
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
  font-size: large;
  font-family: 'Arvo', serif;

  &:hover {
    color: #fff;
  }

  &:active {
    color: #fff;
  }

  &.selectedStyleComponent {
    background-color: rgb(240, 182, 95);
    color: #fff;
    border-radius: 10px;
  }
`;

const Menu = () => {
  const { pathname } = useLocation();

  return (
    <section id={Classes.right}>
      <ul>
        {indexRoutes.map(({ path, title }, key) => {
          return (
            <li key={key}>
              <StyledLink
                className={pathname === path ? Classes.selected : ''}
                className={pathname === path ? 'selectedStyleComponent' : ''}
                key={key}
                to={path}
              >
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
