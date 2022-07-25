import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRouteList} from './enums';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import Room from '../pages/room/room';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../components/private-route/private-route';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRouteList.Main} element={<Main/>}/>
      <Route path={AppRouteList.Login} element={<Login/>}/>
      <Route path={AppRouteList.Favorites} element={<PrivateRoute isAuth={false}><Favorites/></PrivateRoute>}/>
      <Route path={AppRouteList.Room} element={<Room/>}/>
      <Route path={AppRouteList.NotFoundPage} element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
