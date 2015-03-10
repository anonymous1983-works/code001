/**
 * @author abid
 * @date 03/03/2015
 * @version 1.1.0
 * @description Global filters
 * @src app/assets/javascript/client-side/filters.js
 */

'use strict';

/* Filters */
(function (_W, _DGC_Obj, _DGC_ObjM, _DGC_ObjF) {
    $.extend(_DGC_ObjF, {
        "dGC_ObjFilter": _DGC_ObjM('dGC_ObjFilter', [])
    });

    var _isset = function (input) {
        input = typeof input !== 'undefined' ? input : '';
        return input;
    }

    _DGC_ObjF.dGC_ObjFilter.filter('dgc_filter_avatar', function () {
        return function (input) {
            return (_isset(input) != '') ? "background-image:url("+_DGC_Obj.path.avatar.host + input+")" : "background-image:url("+_DGC_Obj.path.avatar.host + input+")";
        }
    }).filter('dgc_filter_avatar_by_id', function () {
        return function (id) {
            return _DGC_Obj.path.avatar.src.replace(/_id_/i, _isset(id));
        }
    }).filter('dgc_filter_url', function () {
        return function (url) {
            return _DGC_Obj.host.concat(url);
        }
    }).filter('dgc_filter_url_project', function () {
        return function (url) {
            return _DGC_Obj.host.concat(_DGC_Obj.routing.project.replace(/:_projectId_/i, _isset(url)));
        }
    }).filter('dgc_filter_url_search', function () {
        return function (url) {
            return _DGC_Obj.host.concat(_DGC_Obj.routing.project_search.replace(/:_search_/i, _isset(url)));
        }
    }).filter('dgc_filter_name_project', function ($sce) {
        return function (input) {
            return $sce.trustAsHtml(_isset(input).replace(/[A-Z][a-z 0-9]*/, "<strong>\$&</strong> "));
        }
    }).filter('dgc_filter_first_word_strong', function ($sce) {
        return function (input) {
            return $sce.trustAsHtml(_isset(input).replace(/[A-Z a-z 0-9]*[ ]/, "<strong>\$&</strong> "));
        }
    });
})(window, DGC_Obj, DGC_Obj.modules, DGC_Obj.filter);