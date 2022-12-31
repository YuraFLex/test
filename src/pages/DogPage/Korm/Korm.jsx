import { Link } from 'react-router-dom';

import { KormData } from 'data/kormData';

export const Korm = () => {
  return (
    <div className="container">
      <Link to="/">
        <h2>Назад</h2>
      </Link>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          jastifyContent: 'space-beetwen',
        }}
      >
        {KormData.map(({ img, name, id, desr }) => (
          <li key={id} style={{ width: '250px' }}>
            <Link to={`${id}`}>
              <img src={img} alt={name} />
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
