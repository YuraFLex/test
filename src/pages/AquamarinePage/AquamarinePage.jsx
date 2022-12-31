import { Link } from 'react-router-dom';
import { CategorieAquamarine } from 'data/categoriesMenu';

export const AquamarinePage = () => {
  return (
    <div className="container">
      <ul className="box-list">
        {CategorieAquamarine.map(({ id, name, img }) => (
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
