import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('register', 'User/AuthController.register').as('register')
  Route.post('login', 'User/AuthController.login').as('login')
  Route.post('logout', 'User/AuthController.logout').as('logout')
}).prefix('api/v1/users/')