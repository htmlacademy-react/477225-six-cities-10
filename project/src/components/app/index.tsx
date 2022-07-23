import {Card} from '../../types';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../../pages/main';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Room from '../../pages/room';
import NotFoundPage from '../../pages/not-found-page';
import PrivateRoute from '../private-route';
import {AppRoute} from '../../const';

type PropsType = {
  cardList: Card[]
}

const App = ({cardList}: PropsType) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<Main cardList={cardList}/>}/>
      <Route path={AppRoute.Login} element={<Login/>}/>
      <Route path={AppRoute.Favorites} element={<PrivateRoute isAuth><Favorites/></PrivateRoute>}/>
      <Route path={AppRoute.Room} element={<Room/>}/>
      <Route path={AppRoute.NotFoundPage} element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
