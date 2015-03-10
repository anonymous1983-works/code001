/**
 * @author abid
 * @date 03/03/2015
 * @version 1.1.0
 * @description Global providers
 * @src app/assets/javascript/client-side/providers.js
 */
'use strict';

/* Provider */
(function (_DGC_Obj, _DGC_ObjM, _DGC_ObjP) {

    $.extend(_DGC_ObjP, {
        "dGC_ObjProviders": _DGC_ObjM('dGC_ObjProviders', ['ngResource'])
    });

    /* Login */
    _DGC_ObjP.dGC_ObjProviders.factory('DGC_Obj.providers.factory', ['$http', '$location',
        function ($http, $location) {
            var factory = {};

            factory.getAllProjects = function () {

                var req = _DGC_Obj.services.utils.path.webservice(DGC_Obj.request.project.list);

                return $http(req);

            };
            return factory;
        }]);
})(DGC_Obj, DGC_Obj.modules, DGC_Obj.providers);