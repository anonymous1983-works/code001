'use strict';

/* Provider */
(function (_DC_Obj, _DC_ObjM, _DC_ObjP) {

    $.extend(_DC_ObjP, {
        "dC_ObjProvidersProject": _DC_ObjM('dC_ObjProvidersProject', ['ngResource'])
    });

    /* Login */
    _DC_ObjP.dC_ObjProvidersProject.factory('DC_Obj.providers.project.factory', ['$http', '$location',
        function ($http, $location) {
            var factory = {};

            factory.getAllProjects = function () {

                var req = DC_Obj.request.project.list;

                return $http(req);

                /*return $http(req).success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    DC_Obj.services.utils.console.info("Status : " + status);
                    DC_Obj.services.utils.console.log(data);

                }).error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    DC_Obj.services.utils.console.info("Status : " + config);

                });*/

            }
            return factory;
        }]);
})(DC_Obj, DC_Obj.modules, DC_Obj.providers);