import { Link } from 'react-router-dom';

import './DogPage.scss';

export const DogPage = () => {
  return (
    <div className="container">
      <ul className="box-list">
        <li>
          <Link to="/dog/korm">
            <div className="box"></div>
            <p>Корма</p>
          </Link>
        </li>
        <li>
          <div className="box"></div>
          <p>Корма</p>
        </li>
        <li>
          <div className="box"></div>
          <p>Корма</p>
        </li>
        <li>
          <div className="box"></div>
          <p>Корма</p>
        </li>
        <li>
          <div className="box"></div>
          <p>Корма</p>
        </li>
        <li>
          <div className="box"></div>
          <p>Корма</p>
        </li>
        <li>
          <div className="box"></div>
          <p>Корма</p>
        </li>
      </ul>
    </div>
  );
};
