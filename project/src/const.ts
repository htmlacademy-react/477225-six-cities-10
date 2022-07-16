export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFoundPage = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  noAuth = 'NO_AUTH'
}
