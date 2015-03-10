'use strict';

/* Provider */
(function (_DGC_Obj, _DGC_ObjM, _DGC_ObjP) {

    $.extend(_DGC_ObjP, {
        "dGC_ObjProvidersProject": _DGC_ObjM('dGC_ObjProvidersProject', ['ngResource'])
    });

    /* Login */
    _DGC_ObjP.dGC_ObjProvidersProject.factory('DGC_Obj.providers.project.factory', ['$http', '$location',
        function ($http, $location) {
            var factory = {};

            factory.getAllProjects = function () {

                var req = _DGC_Obj.services.utils.path.webservice(DGC_Obj.request.project.list);

                return $http(req);

            };

            factory.getProjectById = function (_id_) {

                var req = _DGC_Obj.services.utils.path.webservice(DGC_Obj.request.project.list);

                req.url = req.url+"/"+_id_;

                return $http(req);

            };

            factory.getSearchProjects = function (_search_) {

                $.extend(_DGC_Obj.request.project.search.data, {
                    "search": _search_
                });

                var req = _DGC_Obj.services.utils.path.webservice(_DGC_Obj.request.project.search);

                return $http(req);

            };
            return factory;
        }]);
})(DGC_Obj, DGC_Obj.modules, DGC_Obj.providers);