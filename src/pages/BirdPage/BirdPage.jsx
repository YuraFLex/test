import { Link } from 'react-router-dom';
import { CategorieBirds } from 'data/categoriesMenu';

import './BirdPage.scss';

export const BirdPage = () => {
  return (
    <div className="container">
      <ul className="box-list">
        {CategorieBirds.map(({ id, name, img }) => (
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
