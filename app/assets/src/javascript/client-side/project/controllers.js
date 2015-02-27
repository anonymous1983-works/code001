'use strict';

/* Controllers */
(function (_DC_Obj, _DC_ObjM, _DC_ObjC) {

    $.extend(_DC_ObjC, {
        "dC_ObjControllersSecurity": _DC_ObjM('dC_ObjControllersSecurity', [])
    });

    /* Login */
    _DC_ObjC.dC_ObjControllersSecurity.controller('DC_Obj.controllers.security.login',
        ['$rootScope', '$scope', '$routeParams', '$http', '$location', 'DC_Obj.providers.security.factory', 'DC_Obj.services.security.factory',
            function ($rootScope, $scope, $routeParams, $http, $location, DC_ObjProvidersSecurityFactory, DC_ObjServicesSecurityFactory) {

                $rootScope.pageClass = "page-login";


                $scope.userlog = {
                    login: '',
                    password: ''
                };

                $scope.formLoginSubmit = function () {
                    DC_ObjProvidersSecurityFactory.checkLog($scope.userlog);
                    DC_Obj.services.utils.console.log($scope.userlog);

                };

                //DC_ObjProvidersSecurityFactory.checkLog();


            }]);
})(DC_Obj, DC_Obj.modules, DC_Obj.controllers);