'use strict';

/* Provider */
(function (_DC_Obj, _DC_ObjM, _DC_ObjP) {

    $.extend(_DC_ObjP, {
        "dC_ObjProvidersTags": _DC_ObjM('dC_ObjProvidersTags', ['ngResource'])
    });

    /* Login */
    _DC_ObjP.dC_ObjProvidersTags.factory('DC_Obj.providers.tags.factory', ['$http', '$location',
        function ($http, $location) {
            var factory = {};

            factory.getTags = function (success, error) {

                var promise = $http.get(DC_Obj.request.tags.list.url);
                if(success)
                    promise.success(success);
                if(error)
                    promise.error(error);


            };
            return factory;
        }]);
})(DC_Obj, DC_Obj.modules, DC_Obj.providers);