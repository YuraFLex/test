import { Link, useLocation } from 'react-router-dom';
import { CategorieDog } from 'data/categoriesMenu';

import './DogPage.scss';

export const DogPage = () => {
  const location = useLocation();
  //   const navigation = useNavigate();
  return (
    <div className="container">
      <ul className="box-list">
        {CategorieDog.map(({ id, name, img }) => (
          <li key={id}>
            <Link to={`dog/${id}`} className="nav-link" state={location.state}>
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
