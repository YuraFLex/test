import { Wrapper, NavList, Link, Title } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Wrapper>
      <Title>Категория товаров</Title>
      <nav>
        <NavList>
          <li>
            <Link to="/" end>
              Собаки
            </Link>
          </li>
          <li>
            <Link to="/cat">Кошки</Link>
          </li>
          <li>
            <Link to="/hamster">Грызуны</Link>
          </li>
          <li>
            <Link to="/bird">Птицы</Link>
          </li>
          <li>
            <Link to="/horse">Лошади</Link>
          </li>
          <li>
            <Link to="/aquamarine">Аквамаристика</Link>
          </li>
          <li>
            <Link to="/reptile">Рептилии</Link>
          </li>
        </NavList>
      </nav>
    </Wrapper>
  );
};
