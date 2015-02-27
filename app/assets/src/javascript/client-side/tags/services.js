'use strict';

/* Services */
(function (_DC_ObjM, _DC_ObjS) {

    $.extend(_DC_ObjS, {
        "dC_ObjServicesTags": _DC_ObjM('dC_ObjServicesTags', ['ngResource'])
    });

    /* Login */
    _DC_ObjS.dC_ObjServicesTags.factory('DC_Obj.services.tags.factory', ['$http',
        function ($http) {
            var services = {};
            
            return services;
        }]);
})(DC_Obj.modules, DC_Obj.services);