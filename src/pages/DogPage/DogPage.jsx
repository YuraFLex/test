import { Link, useLocation } from 'react-router-dom';
import { CategorieDog } from 'data/categoriesMenu';

import './DogPage.scss';

export const DogPage = () => {
  const location = useLocation();
  //   const navigation = useNavigate();
  return (
    <div className="container">
      <ul className="box-list">
        {CategorieDog.map(({ id, name }) => (
          <li key={id}>
            <Link to={`dog/${id}`} className="nav-link" state={location.state}>
              <div className="box"></div>
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
