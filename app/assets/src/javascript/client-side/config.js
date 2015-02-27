var DC_Obj = {
    debug: true,
    jsonServerUrl:"http://localhost:3000/",

    // Security
    security: {
        form_login: {
            parameters: {
                username: '',
                password: ''
            },
            path: {
                login: '/login',
                check: ''
            }
        }
    },


    // Routing
    routing: {
        default: '/project',
        login: '/login',
        project: '/project',
        projects: '/projects'
    },

    // path to folder
    path: {
        templates: "templates/",
        views: "templates/views/",
        directives: {
            main: {
                sidebar: {
                    src: "templates/views/dgc.sidebar_left.tpl.html",
                    log: "Directive sidebarLeft Loaded OK!"
                },
                header: {
                    src: "templates/views/dgc.header.tpl.html",
                    log: "Directive Header Loaded OK!"
                }
            },
            project: {
                sidebarStats: {
                    src: "templates/views/dgc.project_sidebar_stats.tpl.html",
                    log: "Directive projectWrapSidebarStats Loaded OK!"
                }
            }
        }
    },

    // Angular entity
    app: {},
    modules: angular.module,
    controllers: {},
    services: {},
    providers: {},
    directives: {},
    utils: {
        primaryColor: "#fe4472"
    },

    // RESTfull web services
    request: {
        user: {
            // The RESTful login web services
            // The system issues one authorization ticket to the user
            // by check if user exist and he having authorization to access application
            login: {
                method: 'POST',
                url: 'http://dev-digicode.intramundi.com/digicode/api/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {}
            }
        },

        tags: {
            // The RESTful login web services
            // The system issues one authorization ticket to the user
            // by check if user exist and he having authorization to access application
            list: {
                method: 'GET',
                url: 'http://localhost:3000/tags',
                headers: {},
                data: {}
            }
        },

        chart: {
            siteVisits: {
                method: 'GET',
                url: "http://localhost:3000/siteVisits",
                headers: {},
                data: {}
            }
        }


    }
}