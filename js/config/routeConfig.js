(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/pruebas/templates/datos.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      });
      $locationProvider.html5Mode(true);
  }

}());
