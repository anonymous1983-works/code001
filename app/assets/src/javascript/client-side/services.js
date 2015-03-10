'use strict';

/* Services */
(function (_W, _DGC_Obj, _DGC_ObjS) {

    var
    //
    // Private function _log
        _counter = 0,
        _log = function (mode, msg) {
            if (!_DGC_Obj.debug) {
                return;
            }
            // Remove first argument
            var args = Array.prototype.slice.apply(arguments, [1]);
            // Prepend timestamp
            var dt = new Date();
            var tag = dt.getHours() + ":" + dt.getMinutes() + ":" +
                dt.getSeconds() + "." + dt.getMilliseconds();
            args[0] = tag + " - " + args[0];
            try {
                _W.console.debug(++_counter + ' :: [' + tag + ']');
                switch (mode) {
                    case "log":
                        _W.console.log(msg);
                        break;
                    case "warn":
                        _W.console.warn(msg);
                        break;
                    case "error":
                        _W.console.error(msg);
                        break;
                    case "info":
                        _W.console.info(msg);
                        break;
                    case "debug":
                        _W.console.debug(msg);
                        break;
                    case "init":
                        _W.console.log('%c '+_counter+ ' :: ', 'background: '+_DGC_Obj.utils.console.init.background+'; color: '+_DGC_Obj.utils.console.init.color+'', msg);
                        break;
                    default:
                        _W.console.log(msg);
                        break;
                }
            } catch (e) {
                if (!_W.console) {
                    _DGC_Obj.debug = false;
                } else if (e.number === -2146827850) {

                }
            }
        },
        _getUrl = function (service) {
            var url;
            switch (_DGC_Obj.environment) {
                case "prod":
                    url = service.url.prod;
                    break;
                case "dev":
                    url = service.url.dev;
                    break;
                case "test":
                    url = service.url.test;
                    break;
                default:
                    url = service.url.prod;
            }
            return url;
        };

    $.extend(_DGC_ObjS, {
        "utils": {},
        "session": {},
        "json": {},
        "jQuery": {},
        "scope": {},
        "security": {}
    });

    /* Services :: Utils */
    $.extend(_DGC_ObjS.utils, {
        "console": {},
        "portlet": {},
        "path": {}
    });

    /* Services :: Utils :: Console */
    $.extend(_DGC_ObjS.utils.console, {
        "log": function (msg) {
            _log('log', msg);
        },
        "warn": function (msg) {
            _log('warn', msg);
        },
        "error": function (msg) {
            _log('error', msg);
        },
        "info": function (msg) {
            _log('info', msg);
        },
        "debug": function (msg) {
            _log('debug', msg);
        },
        "init": function (msg) {
            _log('init', msg);
        }

    });

    /* Services :: Utils :: Portlet */
    $.extend(_DGC_ObjS.utils.portlet, {
        "start": function (element) {
            $(element).portlet({
                progress: 'circle',
                progressColor: 'success',
                refresh: true,
                onRefresh: function () {
                    return true;
                }
            });
        },
        "stop": function (element) {
            $(element).portlet({
                refresh: false
            });
        }
    });

    /* Services :: Utils */
    $.extend(_DGC_ObjS.utils.path, {
        "view": function (url) {
            return _DGC_Obj.path.views + url;
        },
        "webservice": function (service) {
            return {
                method: service.method,
                url: _getUrl(service),
                headers: service.headers,
                data: service.data,
                params: service.data
            };
        }
    });

    /* Services :: Session */
    $.extend(_DGC_ObjS.session, {
        "set": function (key, value) {
            return sessionStorage.setItem(key, value);
        },
        "get": function (key) {
            return sessionStorage.getItem(key);
        },
        "destroy": function (key) {
            return sessionStorage.removeItem(key);
        }
    });

    /* Services :: Json */
    $.extend(_DGC_ObjS.json, {
        "set": function (data) {
            return JSON.stringify(data);
        },
        "get": function (data) {
            return JSON.parse(data);
        }
    });


    /* Services :: jQuery */
    $.extend(_DGC_ObjS.jQuery, {
        "scrollbar": {},
        "tooltip": {}
    });


    /* Services :: jQuery : scrollbar */
    $.extend(_DGC_ObjS.jQuery.scrollbar, {
        "init": function (element) {
            element = typeof element !== 'undefined' ? element : '#dgc .scrollable';
            return $(element).scrollbar({
                    ignoreOverlay: false
                }) && $.fn.scrollbar;
        }
    });

    /* Services :: jQuery : tooltip */
    $.extend(_DGC_ObjS.jQuery.tooltip, {
        "init": function (element) {
            element = typeof element !== 'undefined' ? element : '#dgc [data-toggle="tooltip"]';
            return $(element).tooltip();
        }
    });

    $.extend(_DGC_ObjS.security, {
        "checkRedirect": function($location){
            _DGC_ObjS.utils.console.log($location.path());
            if(! _DGC_ObjS.json.get(DGC_Obj.services.session.get("_DGC_RS_user"))) {
                if(_DGC_Obj.security.active)
                $location.path(_DGC_Obj.routing.login);
            }
            return true;
        }
    });

})(window, DGC_Obj, DGC_Obj.services);