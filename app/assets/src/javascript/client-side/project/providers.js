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

            return factory;
        }]);
})(DC_Obj, DC_Obj.modules, DC_Obj.providers);