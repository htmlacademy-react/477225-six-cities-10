import {AppRoute} from '../../const';
import {Navigate} from 'react-router-dom';

type PropsType = {
  isAuth: boolean,
  children: JSX.Element
}

const PrivateRoute = ({isAuth, children}: PropsType) => isAuth ? children : <Navigate to={AppRoute.Login}/>;

export default PrivateRoute;
