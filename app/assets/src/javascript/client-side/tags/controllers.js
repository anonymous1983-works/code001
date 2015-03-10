'use strict';

/* Controllers */
(function (_DGC_Obj, _DGC_ObjM, _DGC_ObjC) {

    $.extend(_DGC_ObjC, {
        "dGC_ObjControllersTags": _DGC_ObjM('dGC_ObjControllersTags', [])
    });

    /* Login */
    _DGC_ObjC.dGC_ObjControllersTags.controller('DGC_Obj.controllers.tags',
        ['$scope', '$routeParams', '$http', '$location', 'DGC_Obj.providers.tags.factory', 'DGC_Obj.services.tags.factory', 'DGC_Obj.services.main.sidebar.menu.service',
            function ($scope, $routeParams, $http, $location, DGC_ObjProvidersTagsFactory, DGC_ObjServicesTagsFactory, DGC_ObjServicesMainSidebarMenuService) {

                $scope.tags = "";

                DGC_ObjProvidersTagsFactory.getTags().then(
                    function (response) {
                        $scope.tags = response.data;

                        return response.data;
                    },
                    function (httpError) {
                        // translate the error
                        throw httpError.status + " : " + httpError.data;
                    });

                return true;
            }]);
})(DGC_Obj, DGC_Obj.modules, DGC_Obj.controllers);