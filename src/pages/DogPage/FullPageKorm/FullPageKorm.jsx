import { Link } from 'react-router-dom';

export const FullPageKorm = () => {
  return (
    <div className="container">
      <Link to="/dog/feed">
        <h2>Назад</h2>
      </Link>
      <h2>Юзера</h2>
      <p>Комр Юзера бла бяла яба ляаб яла ябал яаб ляа бяал яа яла </p>
    </div>
  );
};
