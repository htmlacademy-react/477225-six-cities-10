import {AppRouteList} from '../enums';
import {Navigate} from 'react-router-dom';

type PropsType = {
  isAuth: boolean,
  children: JSX.Element
}

const PrivateRoute = ({isAuth, children}: PropsType) => isAuth ? children : <Navigate to={AppRouteList.Login}/>;

export default PrivateRoute;
