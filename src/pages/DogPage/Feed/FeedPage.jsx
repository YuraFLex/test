import { Link } from 'react-router-dom';

export const FeedPage = () => {
  return (
    <div className="container">
      <Link to={'../../bird'}>
        <h2>Это я нажал на лакомтсво</h2>
      </Link>
    </div>
  );
};
