'use strict';

/* Controllers */
(function (_DGC_Obj, _DGC_ObjM, _DGC_ObjC) {

    $.extend(_DGC_ObjC, {
        "dGC_ObjControllersProject": _DGC_ObjM('dGC_ObjControllersProject', [])
    });

    /* Project */
    _DGC_ObjC.dGC_ObjControllersProject.controller('DGC_Obj.controllers.project.main',
        ['$rootScope', '$scope', '$routeParams', '$http', '$location', 'DGC_Obj.providers.project.factory', 'DGC_Obj.services.project.factory',
            function ($rootScope, $scope, $routeParams, $http, $location, DGC_ObjProvidersProjectFactory, DGC_ObjServicesProjectFactory) {
                // Security check Authentication
                _DGC_Obj.services.security.checkRedirect($location);

                // log info [init Controllers]
                _DGC_Obj.services.utils.console.init("init Controllers :: DGC_Obj.controllers.project.main");

                $rootScope.pageClass = " page-main page-project page-project-main ";

                $scope.controllersproject = "";

                $scope.view = {
                    url: DGC_Obj.services.utils.path.view(_DGC_Obj.path.include.view.project.item.src)
                };

                DGC_ObjProvidersProjectFactory.getProjectById($routeParams._projectId_).then(
                    function (response) {

                        _DGC_Obj.services.utils.console.log(response.data);

                        $scope.controllersproject = response.data;

                        return response.data;
                    },
                    function (httpError) {
                        // translate the error
                        throw httpError.status + " : " + httpError.data;
                    });

            }]);

    _DGC_ObjC.dGC_ObjControllersProject.controller('DGC_Obj.controllers.project.list',
        ['$rootScope', '$scope', '$routeParams', '$http', '$location', '$timeout', 'DGC_Obj.providers.project.factory', 'DGC_Obj.services.project.factory',
            function ($rootScope, $scope, $routeParams, $http, $location, $timeout, DGC_ObjProvidersProjectFactory, DGC_ObjServicesProjectFactory) {
                // Security check Authentication
                _DGC_Obj.services.security.checkRedirect($location);

                // log info [init Controllers]
                _DGC_Obj.services.utils.console.init("init Controllers :: DGC_Obj.controllers.project.list");

                var loader = '.page-portlet-loader';

                $rootScope.pageClass = " side-bar-right-pin page-main page-project page-projects-list ";

                $scope.controllersproject = "";

                $scope.showProject = "show-list";

                $scope._DGC_showProjectGridList = DGC_ObjServicesProjectFactory.initShowProject();

                $scope.updateShowProject = function (valeur) {
                    $scope._DGC_showProjectGridList = DGC_ObjServicesProjectFactory.initShowProject(valeur);
                    DGC_ObjServicesProjectFactory.initPackery();
                    $scope.DGC_Obj.utils.project.taglimit = 20;
                }

                $scope.view = {
                    url: DGC_Obj.services.utils.path.view(_DGC_Obj.path.include.view.project.list.src)
                };

                //DGC_Obj.services.utils.portlet.start(loader);

                DGC_ObjProvidersProjectFactory.getAllProjects().then(
                    function (response) {
                        $scope.controllersproject = response.data;

                        $timeout(function () {
                            DGC_ObjServicesProjectFactory.initPackery();
                            //DGC_Obj.services.utils.portlet.stop(loader);
                            DGC_Obj.services.jQuery.tooltip.init('.view-project-content [data-toggle="tooltip"]');
                        }, 200, false);

                        DGC_ObjServicesProjectFactory.initFilter();

                        return response.data;
                    },
                    function (httpError) {
                        // translate the error
                        throw httpError.status + " : " + httpError.data;
                    });

            }]);
    _DGC_ObjC.dGC_ObjControllersProject.controller('DGC_Obj.controllers.project.search',
        ['$rootScope', '$scope', '$routeParams', '$http', '$q', '$location', '$timeout', 'DGC_Obj.providers.project.factory', 'DGC_Obj.services.project.factory',
            function ($rootScope, $scope, $routeParams, $http, $q, $location, $timeout, DGC_ObjProvidersProjectFactory, DGC_ObjServicesProjectFactory) {
                // Security check Authentication
                _DGC_Obj.services.security.checkRedirect($location);

                // log info [init Controllers]
                _DGC_Obj.services.utils.console.init("init Controllers :: DGC_Obj.controllers.project.list");

                var loader = '.page-portlet-loader';

                $rootScope.pageClass = " side-bar-right-pin  page-main page-project page-projects-list ";

                $scope.controllersproject = "";

                $scope.showProject = "show-list";

                $scope._DGC_showProjectGridList = DGC_ObjServicesProjectFactory.initShowProject();

                $scope.updateShowProject = function (valeur) {
                    $scope._DGC_showProjectGridList = DGC_ObjServicesProjectFactory.initShowProject(valeur);
                    DGC_ObjServicesProjectFactory.initPackery();
                    $scope.DGC_Obj.utils.project.taglimit = 20;
                }

                $scope.view = {
                    url: DGC_Obj.services.utils.path.view(_DGC_Obj.path.include.view.project.list.src)
                };

                //DGC_Obj.services.utils.portlet.start(loader);

                DGC_ObjProvidersProjectFactory.getSearchProjects($routeParams._search_).then(
                    function (response) {

                        var dataSearch = response.data,
                            arrayHttp = new Array();

                        angular.forEach(dataSearch, function (response) {
                            //tmp.push(response.data);
                            arrayHttp.push(DGC_ObjProvidersProjectFactory.getProjectById(response.id));
                            //console.log('----------'+response.id);
                        });

                        $q.all(arrayHttp).then(function (result) {
                            var tmp = [];
                            angular.forEach(result, function (response) {
                                tmp.push(response.data);
                            });
                            return tmp;
                        }).then(function (tmpResult) {

                            $scope.controllersproject = tmpResult;

                        });

                        $timeout(function () {
                            DGC_ObjServicesProjectFactory.initPackery();
                            //DGC_Obj.services.utils.portlet.stop(loader);
                            DGC_Obj.services.jQuery.tooltip.init('.view-project-content [data-toggle="tooltip"]');
                        }, 200, false);

                        DGC_ObjServicesProjectFactory.initFilter();

                        return response.data;
                    },
                    function (httpError) {
                        // translate the error
                        throw httpError.status + " : " + httpError.data;
                    });

            }]);
})(DGC_Obj, DGC_Obj.modules, DGC_Obj.controllers);