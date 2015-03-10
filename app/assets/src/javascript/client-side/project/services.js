'use strict';

/* Services */
(function (_W, _DGC_Obj, _DGC_ObjM, _DGC_ObjS) {

    $.extend(_DGC_ObjS, {
        "dGC_ObjServicesProject": _DGC_ObjM('dGC_ObjServicesProject', ['ngResource'])
    });

    /* Login */
    _DGC_ObjS.dGC_ObjServicesProject.factory('DGC_Obj.services.project.factory', ['$http',
        function ($http) {
            var services = {};

            services.initFilter = function () {

                $('.project-wrap-nav-filter .types .checkbox input').change(function () {
                    console.log($(this).is(":checked"))
                    //$('.panel-project-wrap-body-container')
                    console.log('.panel-project-wrap-body-container .item-min-project[data-type=' + $(this).val() + ']');
                    $('.panel-project-wrap-body-container .item-min-project[data-type=' + $(this).val() + ']').toggle();
                    services.initPackery();
                })

            };
            services.initPackery = function () {
                /*_DGC_Obj.panelProjectWrapBodyContainer = document.querySelector('#panel-project-wrap-body-container');
                _DGC_Obj.pckry = new Packery(_DGC_Obj.panelProjectWrapBodyContainer, {
                    // options
                    itemSelector: '.item',
                    gutter: 0

                });*/
                return true;
            };
            services.initShowProject = function (valeur) {
                if(valeur){
                    DGC_Obj.services.session.set("_DGC_showProjectGridList", valeur);
                    return valeur;
                }else{
                    // Get showProjectGridList
                    var showProjectGridList = DGC_Obj.services.session.get("_DGC_showProjectGridList");
                    if(showProjectGridList){
                        return showProjectGridList;
                    }else{
                        DGC_Obj.services.session.set("_DGC_showProjectGridList", DGC_Obj.utils.project.show.default);
                        return DGC_Obj.utils.project.show.default;
                    }
                }
            }
            return services;
        }]);
})(window, DGC_Obj, DGC_Obj.modules, DGC_Obj.services);