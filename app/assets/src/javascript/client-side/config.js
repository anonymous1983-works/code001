var DC_Obj = {
    debug: true,
    jsonServerUrl: "http://localhost:3000/",

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
        default: '/projects',
        login: '/login',
        project: '/project',
        project_list: '/projects',
        dashboard: '/dashboard'
    },

    // path to folder
    path: {
        templates: "templates/",
        views: "templates/views/",
        directives: {
            main: {
                sidebar: {
                    src: "tags/dgc.sidebar_left.tpl.html",
                    log: "Directive sidebarLeft Loaded OK!"
                },
                header: {
                    src: "tags/dgc.header.tpl.html",
                    log: "Directive Header Loaded OK!"
                }
            },
            project: {
                sidebarStats: {
                    src: "tags/dgc.project_sidebar_stats.tpl.html",
                    log: "Directive projectWrapSidebarStats Loaded OK!"
                },
                item: {
                    min: {
                        src: "tags/dgc.project_item_min.tpl.html",
                        log: "Directive projectItemMin Loaded OK!"
                    }
                }
            }
        },
        include: {
            view: {
                project:{
                    item: {
                        src: "dgc.page_project.tpl.html",
                        log: "Page project Included OK!"
                    },
                    list: {
                        src: "dgc.page_project_list.tpl.html",
                        log: "Page project list Included OK!"
                    }
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
        },
        project: {
            list: {
                method: 'GET',
                url: "http://dev-digicode.intramundi.com/digicode/api/projects",
                headers: {
                    'API-TOKEN': 'yRgJTCm8HHKoHEu6KpEq'
                },
                data: {}
            }
        }


    }
}