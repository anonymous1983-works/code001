'use strict';

/* Services */
(function (_DGC_ObjM, _DGC_ObjS) {

    $.extend(_DGC_ObjS, {
        "dGC_ObjServicesSidebarMenu": _DGC_ObjM('dGC_ObjServicesSidebarMenu', ['ngResource'])
    });

    /* Login */
    _DGC_ObjS.dGC_ObjServicesSidebarMenu.service('DGC_Obj.services.main.sidebar.menu.service', ['$http',
        function ($http) {
            var service = {};

            service.initNiceScrollToElement = function (elements) {

                $(elements)
                    .addClass('hasNiceScroll')
                    .niceScroll({
                        horizrailenabled: false,
                        zindex: 2,
                        cursorborder: "none",
                        cursorborderradius: "0",
                        cursorcolor: DGC_Obj.utils.primaryColor
                    });
            }, service.toggleSideBarLeft = function(){
                return true;
            };

            return service;
        }]);
})(DGC_Obj.modules, DGC_Obj.services);