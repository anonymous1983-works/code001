'use strict';

/* Provider */
(function (_DC_Obj, _DC_ObjM, _DC_ObjP) {

    $.extend(_DC_ObjP, {
        "dC_ObjProvidersSecurity": _DC_ObjM('dC_ObjProvidersSecurity', ['ngResource'])
    });

    /* Login */
    _DC_ObjP.dC_ObjProvidersSecurity.factory('DC_Obj.providers.security.factory', ['$http', '$location',
        function ($http, $location) {
            var factory = {};

            factory.getUser = function (_login, _password) {

                $.extend(DC_Obj.request.user.login.data, {
                    "login": _login,
                    "password": _password
                });
                var req = DC_Obj.request.user.login;

                $http(req).success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    DC_Obj.services.utils.console.info("Status : " + status);
                    DC_Obj.services.utils.console.log(data);
                    // Set session userlog
                    DC_Obj.services.session.set("userlog", DC_Obj.services.json.set(data));

                    // get session userlog
                    var userlog = DC_Obj.services.json.get(DC_Obj.services.session.get("userlog"));
                    DC_Obj.services.utils.console.info(userlog.name);

                    // Redirect for default path
                    $location.path(_DC_Obj.routing.default);


                }).error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.

                    DC_Obj.services.utils.console.info("_login : " + _login);
                    DC_Obj.services.utils.console.info("_password : " + _password);
                    DC_Obj.services.utils.console.info("Status : " + config);
                    //console.log(this.statusCode());
                    //DC_Obj.services.utils.console.info("Header : " + responseError);

                    if (_login != "" || _password != "")
                        $('body').djcNotification({
                            style: 'flip',
                            message: 'Login Service is temporarily unavailable please try again late!',
                            position: 'top-right',
                            timeout: 2000,
                            type: 'error'
                        }).show();


                });

            }, factory.checkLog = function (userlog) {
                factory.getUser(userlog.login, userlog.password);
            };
            return factory;
        }]);
})(DC_Obj, DC_Obj.modules, DC_Obj.providers);