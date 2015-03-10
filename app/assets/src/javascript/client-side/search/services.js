'use strict';

/* Services */
(function (_W, _$, _AN, _DGC_Obj, _DGC_ObjM, _DGC_ObjS) {

    $.extend(_DGC_ObjS, {
        "dGC_ObjServicesSearch": _DGC_ObjM('dGC_ObjServicesSearch', ['ngResource'])
    });

    /* Login */
    _DGC_ObjS.dGC_ObjServicesSearch.factory('DGC_Obj.services.search.factory', ['$http',
        function ($http) {
            var services = {};

            services.quickSearch = function($scope, $filter){

                _$('#input-filter-query').quickSearch({
                    url: _DGC_Obj.request.project.search.url.prod + '?search=',
                    id: "search-global-result",
                    prepareResponse: function (quickSearch, data) {
                        var html = "";
                        _AN.forEach(data, function(value, key) {
                            //$scope.artists.push(value);
                            html += "<li class='"+value.type+"'><a href='" + $filter('dgc_filter_url_project')(value.id) + "'>" + value.name + "</a></li>"
                        });
                        quickSearch.html(html);
                    },
                    onSubmit: function(value){
                        _$('#input-filter-query-submit').trigger('click');
                    }
                });


            }



            return services;
        }]);
})(window, jQuery, angular,  DGC_Obj, DGC_Obj.modules, DGC_Obj.services);