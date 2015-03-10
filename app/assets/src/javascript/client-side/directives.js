'use strict';

/* Directives */
(function (_W, _DGC_Obj, _DGC_ObjM, _DGC_ObjD) {
    $.extend(_DGC_ObjD, {
        "dGC_ObjDirectives": _DGC_ObjM('dGC_ObjDirectives', [])
    });
    _DGC_ObjD.dGC_ObjDirectives.directive('dgcSidebarLeft', function () {
        return {
            restrict: 'AE',
            templateUrl: _DGC_Obj.path.views + _DGC_Obj.path.directives.main.sidebar.left.src,
            link: function (scope, element, attrs) {
                // log info [init Directives]
                _DGC_Obj.services.utils.console.init("init Directives :: dgcSidebarLeft "+ _DGC_Obj.path.directives.main.sidebar.left.log);

                $('.page-sidebar.page-sidebar-left[data-pages="sidebar"]').each(function () {
                    var $sidebar = $(this);
                    $sidebar.sidebar($sidebar.data());
                });

                $('.page-sidebar [data-toggle="tooltip"]').tooltip();

            }
        }
    }).directive('dgcSidebarRight', function () {
        return {
            restrict: 'AE',
            templateUrl: _DGC_Obj.path.views + _DGC_Obj.path.directives.main.sidebar.right.src,
            link: function (scope, element, attrs) {
                // log info [init Directives]
                _DGC_Obj.services.utils.console.init("init Directives :: dgcSidebarLeft "+ _DGC_Obj.path.directives.main.sidebar.right.log);

                $('.page-sidebar.page-sidebar-right[data-pages="sidebar"]').each(function () {
                    var $sidebar = $(this);
                    $sidebar.sidebar($sidebar.data());
                });

                $('.page-sidebar [data-toggle="tooltip"]').tooltip();

            }
        }
    }).directive('dgcHeader', function () {
        return {
            restrict: 'AE',
            templateUrl: _DGC_Obj.path.views + _DGC_Obj.path.directives.main.header.src,
            link: function (scope, element, attrs) {

                //DGC_Obj.services.utils.console.info(_DGC_Obj.path.directives.main.header.log);
                // log info [init Directives]
                _DGC_Obj.services.utils.console.init("init Directives :: dgcHeader " + _DGC_Obj.path.directives.main.header.log);

                DGC_Obj.services.jQuery.scrollbar.init('.header .notification-list .notification-body.scrollable');

            }
        }
    }).directive('dgcProjectItemMin', function () {
        return {
            restrict: 'AE',
            templateUrl: _DGC_Obj.path.views + _DGC_Obj.path.directives.project.item.min.src,
            link: function (scope, element, attrs) {

                // log info [init Directives]
                _DGC_Obj.services.utils.console.init("init Directives :: dgcProjectItemMin " + _DGC_Obj.path.directives.project.item.min.log);

                //DGC_Obj.services.utils.console.info(_DGC_Obj.path.directives.project.item.min.log);

            }
        }
    }).directive('dcgProjectWrapSidebarStats', function () {
        return {
            restrict: 'AE',
            templateUrl: _DGC_Obj.path.views + _DGC_Obj.path.directives.project.sidebarStats.src,
            link: function (scope, element, attrs) {

                //_DGC_Obj.services.utils.console.info(_DGC_Obj.path.directives.project.sidebarStats.log);
                // log info [init Directives]
                _DGC_Obj.services.utils.console.init("init Directives :: dcgProjectWrapSidebarStats " + _DGC_Obj.path.directives.project.sidebarStats.log);

                $('[data-pages="portlet"]').each(function () {
                    var $portlet = $(this)
                    $portlet.portlet($portlet.data())
                })


                d3.json(_DGC_Obj.services.utils.path.webservice(DGC_Obj.request.chart.siteVisits).url, function (data) {
                    nv.addGraph(function () {
                        var chart = nv.models.lineChart()
                            .x(function (d) {
                                return d[0]
                            })
                            .y(function (d) {
                                return d[1]
                            })
                            .color(['#27cebc'])
                            .useInteractiveGuideline(true)
                            /*.margin({
                             top: 10,
                             right: -10,
                             bottom: 10,
                             left: -10
                             })*/
                            .showXAxis(false)
                            .showYAxis(false)
                            .showLegend(false)
                            .forceY([0, 2])

                        d3.select('.chart-16 svg')
                            .datum(data)
                            .transition().duration(500)
                            .call(chart);

                        nv.utils.windowResize(chart.update);

                        nv.utils.windowResize(function () {
                            setTimeout(function () {
                                $('.chart-16 .nvd3 circle.nv-point').attr("r", "4");
                            }, 500);
                        });

                        return chart;
                    });
                });

            }
        }
    });
})(window, DGC_Obj, DGC_Obj.modules, DGC_Obj.directives);