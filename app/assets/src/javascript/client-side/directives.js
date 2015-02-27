'use strict';

/* Directives */
(function (_W, _DC_Obj, _DC_ObjM, _DC_ObjD) {
    $.extend(_DC_ObjD, {
        "dC_ObjDirectives": _DC_ObjM('dC_ObjDirectives', [])
    });
    _DC_ObjD.dC_ObjDirectives.directive('dgcSidebarLeft', function () {
        return {
            restrict: 'AE',
            templateUrl: _DC_Obj.path.directives.main.sidebar.src,
            link: function (scope, element, attrs) {

                DC_Obj.services.utils.console.info(_DC_Obj.path.directives.main.sidebar.log);

                $('.page-sidebar[data-pages="sidebar"]').each(function () {
                    var $sidebar = $(this);
                    $sidebar.sidebar($sidebar.data());
                });

                $('.page-sidebar [data-toggle="tooltip"]').tooltip();

            }
        }
    }).directive('dgcHeader', function () {
        return {
            restrict: 'AE',
            templateUrl: _DC_Obj.path.directives.main.header.src,
            link: function (scope, element, attrs) {

                DC_Obj.services.utils.console.info(_DC_Obj.path.directives.main.header.log);

                DC_Obj.services.jQuery.scrollbar.init('.header  .notification-list .notification-body.scrollable');

            }
        }
    }).directive('dgcProjectItemMin', function () {
        return {
            restrict: 'AE',
            templateUrl: _DC_Obj.path.directives.project.item.min.src,
            link: function (scope, element, attrs) {

                DC_Obj.services.utils.console.info(_DC_Obj.path.directives.project.item.min.log);

            }
        }
    }).directive('dcgProjectWrapSidebarStats', function () {
        return {
            restrict: 'AE',
            templateUrl: _DC_Obj.path.directives.project.sidebarStats.src,
            link: function (scope, element, attrs) {

                _DC_Obj.services.utils.console.info(_DC_Obj.path.directives.project.sidebarStats.log);

                    $('[data-pages="portlet"]').each(function() {
                        var $portlet = $(this)
                        $portlet.portlet($portlet.data())
                    })


                d3.json(DC_Obj.request.chart.siteVisits.url, function(data) {
                    nv.addGraph(function() {
                        var chart = nv.models.lineChart()
                            .x(function(d) {
                                return d[0]
                            })
                            .y(function(d) {
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

                        nv.utils.windowResize(function() {
                            setTimeout(function() {
                                $('.chart-16 .nvd3 circle.nv-point').attr("r", "4");
                            }, 500);
                        });

                        return chart;
                    });
                });

            }
        }
    });
})(window, DC_Obj, DC_Obj.modules, DC_Obj.directives);