'use strict';

/* Services */
(function (_DC_ObjM, _DC_ObjS) {

    $.extend(_DC_ObjS, {
        "dC_ObjServicesProject": _DC_ObjM('dC_ObjServicesProject', ['ngResource'])
    });

    /* Login */
    _DC_ObjS.dC_ObjServicesProject.factory('DC_Obj.services.project.factory', ['$http',
        function ($http) {
            var factory = {};

            factory.getUser = function () {
                $.extend(DC_Obj.request.user.login.data, {
                    "login": "abid",
                    "password": "Amundi@1983"
                });
                var req = DC_Obj.request.user.login;

                $http(req).success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    DC_Obj.services.utils.console.info(data);
                }).error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            };
            return factory;
        }]);
})(DC_Obj.modules, DC_Obj.services);