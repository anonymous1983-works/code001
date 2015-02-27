'use strict';

/* Controllers */
(function (_DC_Obj, _DC_ObjM, _DC_ObjC) {

    $.extend(_DC_ObjC, {
        "dC_ObjControllersTags": _DC_ObjM('dC_ObjControllersTags', ['dC_ObjServicesSidebarMenu'])
    });

    /* Login */
    _DC_ObjC.dC_ObjControllersTags.controller('DC_Obj.controllers.tags',
        ['$scope', '$routeParams', '$http', '$location', 'DC_Obj.providers.tags.factory', 'DC_Obj.services.tags.factory', 'DC_Obj.services.main.sidebar.menu.service',
            function ($scope, $routeParams, $http, $location, DC_ObjProvidersTagsFactory, DC_ObjServicesTagsFactory, DC_ObjServicesMainSidebarMenuService) {


                /*DC_ObjProvidersTagsFactory.getTags(function(data){
                    $scope.tags = data;
                    DC_ObjServicesMainSidebarMenuService.initNiceScrollToElement('.view-asside-right .list-tags');
                });*/


                return true;
            }]);
})(DC_Obj, DC_Obj.modules, DC_Obj.controllers);