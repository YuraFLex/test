import { Link } from 'react-router-dom';
import { CategorieReptile } from 'data/categoriesMenu';

import './ReptilePage.scss';

export const ReptilePage = () => {
  return (
    <div className="container">
      <ul className="box-list">
        {CategorieReptile.map(({ id, name, img }) => (
          <li key={id}>
            <Link to={`${id}`} className="nav-link">
              <div>
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
