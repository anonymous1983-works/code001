'use strict';

/* Services */
(function (_W, _DC_Obj, _DC_ObjS) {

    var
    //
    // Private function _log
        _log = function (mode, msg) {
            if (!_DC_Obj.debug) {
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
                _W.console.debug(tag);
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
                    default:
                        _W.console.log(msg);
                        break;
                }
            } catch (e) {
                if (!_W.console) {
                    _DC_Obj.debug = false;
                } else if (e.number === -2146827850) {

                }
            }
        };

    $.extend(_DC_ObjS, {
        "utils": {},
        "session": {},
        "json": {},
        "jQuery": {}
    });

    /* Services :: Utils */
    $.extend(_DC_ObjS.utils, {
        "console": {}
    });

    /* Services :: Utils :: Console */
    $.extend(_DC_ObjS.utils.console, {
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
        }

    });

    /* Services :: Session */
    $.extend(_DC_ObjS.session, {
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
    $.extend(_DC_ObjS.json, {
        "set": function (data) {
            return JSON.stringify(data);
        },
        "get": function (data) {
            return $.parseJSON(data);
        }
    });


    /* Services :: jQuery */
    $.extend(_DC_ObjS.jQuery, {
        "scrollbar": {}
    });


    /* Services :: Json */
    $.extend(_DC_ObjS.jQuery.scrollbar, {
        "init": function (element) {
            element = typeof element !== 'undefined' ? element : '#dgc .scrollable';
            return $(element).scrollbar({
                    ignoreOverlay: false
                }) && $.fn.scrollbar;
        }
    });

})(window, DC_Obj, DC_Obj.services);