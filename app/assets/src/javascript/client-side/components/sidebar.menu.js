'use strict';

/* Services */
(function (_DC_ObjM, _DC_ObjS) {

    $.extend(_DC_ObjS, {
        "dC_ObjServicesSidebarMenu": _DC_ObjM('dC_ObjServicesSidebarMenu', ['ngResource'])
    });

    /* Login */
    _DC_ObjS.dC_ObjServicesSidebarMenu.service('DC_Obj.services.main.sidebar.menu.service', ['$http',
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
                        cursorcolor: DC_Obj.utils.primaryColor
                    });
            }, service.toggleSideBarLeft = function(){
                return true;
            };

            return service;
        }]);
})(DC_Obj.modules, DC_Obj.services);