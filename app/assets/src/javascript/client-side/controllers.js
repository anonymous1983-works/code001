'use strict';

/* Controllers */
(function (_DC_ObjM, _DC_ObjC) {

    $.extend(_DC_ObjC, {
        "dC_ObjControllers": _DC_ObjM('dC_ObjControllers', ['dC_ObjServicesSidebarMenu'])
    });

    /* Main */
    _DC_ObjC.dC_ObjControllers.controller('DC_Obj.controllers.main',
        ['$rootScope', '$scope', '$location', 'DC_Obj.services.main.sidebar.menu.service',
            function ($rootScope, $scope, $location, DC_ObjServicesMainSidebarMenuService) {

                $rootScope.pageClass = "page-main";

                $rootScope.pageClass += " page-project ";

                $scope.views = {
                    left:{

                    },
                    right: {
                        url: ['templates/views/tags/list.html']
                    }
                };

                //DC_ObjServicesMainSidebarMenuService.initNiceScrollToElement('.view-asside-left .sidebarMenuWrapper');

                //DC_ObjServicesMainSidebarMenuService.initNiceScrollToElement('.header  .notification-list .notification-body.scrollable');

                $('[data-toggle="tooltip"]').tooltip();

                //$('.header  .notification-list .notification-body.scrollable').sidebar();



                //$scope.views

                $scope.logout = function () {
                    DC_Obj.services.session.destroy("user");
                    $location.path('/login');
                    return false;
                }

            }]);
})(DC_Obj.modules, DC_Obj.controllers);