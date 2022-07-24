import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  const stylePage: { [propertyName: string]: string } = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  return (
    <div style={stylePage}>
      <h1>404 Not Found</h1>
      <Link to="/">Перейти на главную страницу</Link>
    </div>
  );
};

export default NotFoundPage;
