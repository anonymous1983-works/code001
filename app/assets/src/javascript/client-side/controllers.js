'use strict';

/* Controllers */
(function (_DGC_Obj, _DGC_ObjM, _DGC_ObjC) {

    $.extend(_DGC_ObjC, {
        "dGC_ObjControllers": _DGC_ObjM('dGC_ObjControllers', ['dGC_ObjServicesSidebarMenu'])
    });

    /* Main */
    _DGC_ObjC.dGC_ObjControllers.controller('DGC_Obj.controllers.main',
        ['$rootScope', '$scope', '$location', 'DGC_Obj.services.main.sidebar.menu.service', 'DGC_Obj.providers.user.factory',
            function ($rootScope, $scope, $location, DGC_ObjServicesMainSidebarMenuService, DGC_ObjProvidersUserFactory) {
                // log info [init Controllers]
                _DGC_Obj.services.utils.console.init("init Controllers :: DGC_Obj.controllers.main");

                $rootScope.DGC_Obj = {
                    utils: _DGC_Obj.utils,
                    routing: _DGC_Obj.routing
                };

                $rootScope.pageClass = "page-main";

                $rootScope.pageClass += " page-project ";

                $rootScope._DGC_RS_user = DGC_Obj.services.json.get(DGC_Obj.services.session.get("_DGC_RS_user"));

                $('[data-toggle="tooltip"]').tooltip();

                return true;
            }]);

    _DGC_ObjC.dGC_ObjControllers.controller('DGC_Obj.controllers.header',
        ['$rootScope', '$scope', '$location', 'DGC_Obj.services.main.sidebar.menu.service', 'DGC_Obj.providers.user.factory',
            function ($rootScope, $scope, $location, DGC_ObjServicesMainSidebarMenuService, DGC_ObjProvidersUserFactory) {
                // log info [init Controllers]
                _DGC_Obj.services.utils.console.init("init Controllers :: DGC_Obj.controllers.header");

                $rootScope.pageClass += " header-init ";

                // Function LogOut
                $scope.logout = function () {
                    DGC_Obj.services.session.destroy("_DGC_RS_user");
                    DGC_Obj.services.session.destroy("_DGC_RS_id_user");
                    $location.path(_DGC_Obj.routing.login);
                    return false;
                }


            }]);
})(DGC_Obj, DGC_Obj.modules, DGC_Obj.controllers);