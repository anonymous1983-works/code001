'use strict';

/* Controllers */
(function (_DC_Obj, _DC_ObjM, _DC_ObjC) {

    $.extend(_DC_ObjC, {
        "dC_ObjControllersProject": _DC_ObjM('dC_ObjControllersProject', [])
    });

    /* Project */
    _DC_ObjC.dC_ObjControllersProject.controller('DC_Obj.controllers.project.main',
        ['$rootScope', '$scope', '$routeParams', '$http', '$location', 'DC_Obj.providers.project.factory', 'DC_Obj.services.project.factory',
            function ($rootScope, $scope, $routeParams, $http, $location, DC_ObjProvidersProjectFactory, DC_ObjServicesProjectFactory) {

                DC_Obj.services.utils.console.log('main');

                $rootScope.pageClass = " page-main page-project ";

                $scope.view = {
                    url: _DC_Obj.path.views + _DC_Obj.path.include.view.project.item.src
                };

            }]);

    _DC_ObjC.dC_ObjControllersProject.controller('DC_Obj.controllers.project.list',
        ['$rootScope', '$scope', '$routeParams', '$http', '$location', 'DC_Obj.providers.project.factory', 'DC_Obj.services.project.factory',
            function ($rootScope, $scope, $routeParams, $http, $location, DC_ObjProvidersProjectFactory, DC_ObjServicesProjectFactory) {

                var loader = '.page-portlet-loader';

                $rootScope.pageClass = " page-main page-project page-projects-list ";

                $scope.controllersproject = "";

                $scope.view = {
                    url: _DC_Obj.path.views + _DC_Obj.path.include.view.project.list.src
                };

                DC_Obj.services.utils.portlet.start(loader);

                DC_ObjProvidersProjectFactory.getAllProjects().then(
                    function (response) {
                        $scope.controllersproject = response.data;
                        DC_Obj.services.utils.portlet.stop(loader);
                        return response.data;
                    },
                    function (httpError) {
                        // translate the error
                        throw httpError.status + " : " + httpError.data;
                    });

                /*DC_ObjProvidersProjectFactory.getAllProjects().success(function (data, status, headers, config) {
                 $scope.controllersproject = data;
                 });*/


            }]);
})(DC_Obj, DC_Obj.modules, DC_Obj.controllers);