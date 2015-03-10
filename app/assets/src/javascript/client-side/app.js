'use strict';

/* App Module */

(function (_W, _DGC_Obj, _DGC_ObjA, _DGC_ObjM) {

    $.extend(_DGC_ObjA, {
        "dGC_ObjAppMain": _DGC_ObjM('dGC_ObjAppMain', [
            'ngRoute',
            'dGC_ObjControllers',
            'dGC_ObjDirectives',
            'dGC_ObjFilter',

            'dGC_ObjServicesSidebarMenu',

            'dGC_ObjProvidersUser',

            'dGC_ObjControllersSecurity',
            'dGC_ObjProvidersSecurity',
            'dGC_ObjServicesSecurity',

            'dGC_ObjControllersProject',
            'dGC_ObjProvidersProject',
            'dGC_ObjServicesProject',

            'dGC_ObjControllersTags',
            'dGC_ObjProvidersTags',
            'dGC_ObjServicesTags',

            'dGC_ObjControllersSearch',
            'dGC_ObjProvidersSearch',
            'dGC_ObjServicesSearch'


        ])
    });

    _DGC_ObjA.dGC_ObjAppMain.config(['$routeProvider',
        function ($routeProvider) {
            /*$locationProvider.html5Mode({
             enabled: true,
             requireBase: false
             });*/

            $routeProvider.
                when(DGC_Obj.routing.login, {
                    templateUrl: DGC_Obj.path.templates + 'login.tpl.html',
                    controller: 'DGC_Obj.controllers.security.login'
                });
            $routeProvider.
                when(DGC_Obj.routing.project, {
                    templateUrl: DGC_Obj.path.templates + 'template.tpl.html',
                    controller: 'DGC_Obj.controllers.project.main'
                });
            $routeProvider.
                when(DGC_Obj.routing.project_list, {
                    templateUrl: DGC_Obj.path.templates + 'template.tpl.html',
                    controller: 'DGC_Obj.controllers.project.list'
                });
            $routeProvider.
                when(DGC_Obj.routing.project_search, {
                    templateUrl: DGC_Obj.path.templates + 'template.tpl.html',
                    controller: 'DGC_Obj.controllers.project.search'
                });
            $routeProvider.
                otherwise({
                    redirectTo: DGC_Obj.routing.default
                });

            //console.log();
        }]);


})(window, DGC_Obj, DGC_Obj.app, DGC_Obj.modules);