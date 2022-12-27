import { Link } from 'react-router-dom';
import { CategorieHorse } from 'data/categoriesMenu';

export const HorsePage = () => {
  return (
    <div className="container">
      <ul className="box-list">
        {CategorieHorse.map(({ id, name }) => (
          <li key={id}>
            <Link to={`${id}`} className="nav-link">
              <div className="box"></div>
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
