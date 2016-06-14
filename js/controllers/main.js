(function () {
  'use strict';

  /*global angular*/
  angular
    .module('app')
    .controller('MainController', MainController);
  MainController.$inject = ['ngDialog','$mdDialog','$mdMedia','$scope'];
  function MainController(ngDialog,$mdDialog,$mdMedia,$scope) {
    var self = this;
		//URLS
		self.URLModalEdificio = '/pruebas/modals/modalEdificio.html';
		//Variables
    self.mensaje = 'Quiero mi tarjeta de acceso';
    self.lista = ['Maya','Pereda','Pinar'];
    self.abrirNgDialog = abrirNgDialog;
    self.abrirMgDialog = abrirMgDialog;
    ////////////////////////
    function abrirNgDialog(){
			//$('#templateId').modal().show();
       ngDialog.open({ template: 'templateId',
                       className: 'ngdialog-theme-default ngdialog-theme-custom',
                       controller: 'MainController',
                       controllerAs: 'ctrl',
                       className: 'ngdialog-theme-default',
                       closeByEscape: true});
    }

    function abrirMgDialog(){
      //$('#templateId').modal().show();
       ngDialog.open({ template: 'templateId',
                       className: 'ngdialog-theme-default ngdialog-theme-custom',
                       controller: 'MainController',
                       controllerAs: 'ctrl',
                       className: 'ngdialog-theme-default',
                       closeByEscape: true});
    }

    function abrirMgDialog(ev){
      $mdDialog.show({
        scope: self,
        templateUrl: '/pruebas/modals/fruits.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: false
      })
      .then(function(answer) {

      }, function() {

      });

    };
  }

}());
