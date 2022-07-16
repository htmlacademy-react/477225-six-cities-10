import {AppRoute, AuthorizationStatus} from '../../const';
import {Navigate} from 'react-router-dom';

type PropsType = {
  isAuth: AuthorizationStatus,
  children: JSX.Element
}

const PrivateRoute = ({isAuth, children}: PropsType) => isAuth === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>;

export default PrivateRoute;
