import { Link } from 'react-router-dom';
import { CategorieHamster } from 'data/categoriesMenu';

import './HamsterPage.scss';

export const HamsterPage = () => {
  return (
    <div className="container">
      <ul className="box-list">
        {CategorieHamster.map(({ id, name, img }) => (
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
