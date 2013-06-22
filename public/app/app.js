//var app = angular.module('app', [	'appFilter', 'appDirectives', 'appServices', 'appServices', 'ui.directives', 'ui.filters', 'ui.state', 'ui.bootstrap', 'ui.utils', 'ngSanitize' ]);
'use strict';

/* Directives */
// var appDirectives = angular.module('appDirectives', ['ui.state'])

angular.module('app', ['ngSanitize', 'ui.state', 'ngCookies', 'ui.state', 'ui.bootstrap', 'ui.utils' ])
   .config(['$routeProvider', '$locationProvider', '$httpProvider', '$stateProvider', function ($routeProvider, $locationProvider, $httpProvider, $stateProvider) {
    // config(function($stateProvider, $routeProvider){

        var access = routingConfig.accessLevels;

        /* 
        * Pagina Index
        */
        $routeProvider.when('/', {
            templateUrl:    "public/views/public/index.html",
            controller:     'HomeCtrl',
            access:         access.public
        });
        /* 
        * Pagina Index
        */
        $routeProvider.when('/contact', {
            templateUrl:    "public/views/public/contact.html",
            controller:     'ContactCtrl',
            access:         access.public
        });
        /* 
        * Pagina About
        */
        $routeProvider.when('/about', {
            templateUrl:    "public/views/public/about.html",
            controller:     'AboutCtrl',
            access:         access.public
        });



        /*
        * Mail Chimp Contacs
        */
        $routeProvider.when('/mailchimp/thanks', {
            templateUrl:    "public/views/public/mailchimp/thanks.html",
            access:         access.public
        });
        $routeProvider.when('/mailchimp/verify', {
            templateUrl:    "public/views/public/mailchimp/verify.html",
            access:         access.public
        });
        $routeProvider.when('/mailchimp/unsubscribe', {
            templateUrl:    "public/views/public/mailchimp/unsubscribe.html",
            access:         access.public
        });


        // Erro 404
        $routeProvider.when('/404', { // ROUTE E            		FlashService.show(response.data.flash);
        	templateUrl:   "home/erro404",
        	access:        access.public
        })
        $routeProvider.otherwise({redirectTo:'/404'});

        //$locationProvider.html5Mode(true);

        var interceptor = ['$location', 'FlashService', '$q', function($location, FlashService, $q) {
            function success(response) {
                return response;
            }

            function error(response) {
            	if(response.status === 401) {
            		$location.path('/login');
            		FlashService.show(response.data.flash);
            	    return $q.reject(response);
                }
                else {
                    return $q.reject(response);
                }
            }
            return function(promise) {
                return promise.then(success, error);
            }
        }];

        $httpProvider.responseInterceptors.push(interceptor);

    }]).run(function() {
        $('body').fadeIn();
    });