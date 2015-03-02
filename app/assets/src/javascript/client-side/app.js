'use strict';

/* App Module */

(function (_W, _DC_Obj, _DC_ObjA, _DC_ObjM) {

    $.extend(_DC_ObjA, {
        "dC_ObjAppMain": _DC_ObjM('dC_ObjAppMain', [
            'ngRoute',
            'dC_ObjControllers',
            'dC_ObjServicesSidebarMenu',

            'dC_ObjControllersSecurity',
            'dC_ObjProvidersSecurity',
            'dC_ObjServicesSecurity',

            'dC_ObjControllersProject',
            'dC_ObjProvidersProject',
            'dC_ObjServicesProject',

            'dC_ObjControllersTags',
            'dC_ObjProvidersTags',
            'dC_ObjServicesTags',
            'dC_ObjDirectives'
        ])
    });

    _DC_ObjA.dC_ObjAppMain.config(['$routeProvider',
        function ($routeProvider) {
            /*$locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });*/
            $routeProvider.
                when(DC_Obj.routing.login, {
                    templateUrl: DC_Obj.path.templates + 'login.tpl.html',
                    controller: 'DC_Obj.controllers.security.login'
                });
            $routeProvider.
                when(DC_Obj.routing.project, {
                    templateUrl: DC_Obj.path.templates + 'template.tpl.html',
                    controller: 'DC_Obj.controllers.project.main'
                });
            $routeProvider.
                when(DC_Obj.routing.project_list, {
                    templateUrl: DC_Obj.path.templates + 'template.tpl.html',
                    controller: 'DC_Obj.controllers.project.list'
                });
            $routeProvider.
                otherwise({
                    redirectTo: DC_Obj.routing.default
                });
        }]);

})(window, DC_Obj, DC_Obj.app, DC_Obj.modules);