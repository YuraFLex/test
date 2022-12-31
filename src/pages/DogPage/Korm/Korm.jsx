// import { Link } from 'react-router-dom';
import { useState } from 'react';

import { KormData } from 'data/kormData';

export const Korm = () => {
  const [open, setOpen] = useState(false);
  const modalTogle = () => {
    setOpen(!open);
  };

  return (
    <div className="container">
      <h2>Это я открыл корма</h2>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          jastifyContent: 'space-beetwen',
        }}
      >
        {KormData.map(({ img, name, id, desr }) => (
          <li
            key={id}
            style={{ width: '250px', position: 'relative' }}
            onClick={modalTogle}
          >
            <img src={img} alt={name} />
            <p>{name}</p>
            {open && (
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  zIndex: '9',
                  background: 'rgb(0, 0, 0)',
                  color: '#fff',
                }}
              >
                <h1>{name}</h1>
                <p>{desr}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
