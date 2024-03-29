import { Link } from 'react-router-dom';
import { CategorieCat } from 'data/categoriesMenu';

import './CatPage.scss';

export const CatPage = () => {
  return (
    <div className="container">
      <ul className="box-list">
        {CategorieCat.map(({ id, name, img }) => (
          <li key={id}>
            <Link to={`${id}`} className="nav-link">
              <div className="box">
                <img src={img} alt={name} />
              </div>
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
