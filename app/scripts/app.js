'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularAppApp', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-jwt',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/main/dashboard');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('main', {
            url: '/main',
            activetab: 'main',
            views: {
              template: {
                templateUrl: 'views/template.html',
              }
            }
        })
        .state('main.dashboard', {
            url: '/dashboard',
            activetab: 'dashboard',
            views: {
              content: {
                templateUrl: 'views/main.html',
              }
            }
        })
        .state('main.forms', {
            url: '/forms',
            activetab: 'forms',
            views: {
              content: {
                templateUrl: 'views/forms.html',
              }
            }
        })
        .state('main.simple_table', {
            url: '/simple_table',
            activetab: 'simple_table',
            views: {
              content: {
                templateUrl: 'views/simple_table.html',
              }
            }
        })
        .state('main.datatable', {
            url: '/datatable',
            activetab: 'datatable',
            views: {
              content: {
                templateUrl: 'views/datatable.html',
              }
            }
        })
        .state('main.calendar', {
            url: '/calendar',
            activetab: 'calendar',
            views: {
              content: {
                templateUrl: 'views/calendar.html',
              }
            }
        })
        .state('main.mailbox', {
            url: '/mailbox',
            activetab: 'mailbox',
            views: {
              content: {
                templateUrl: 'views/mailbox.html',
              }
            }
        })
        .state('login', {
            url: '/login',
            activetab: 'login',
            views: {
              template: {
                templateUrl: 'views/login.html',
              }
            }
        });
        
  })
  .config(function Config($httpProvider, jwtOptionsProvider) {
    // Please note we're annotating the function so that the $injector works when the file is minified
    // jwtOptionsProvider.config({
    //   whiteListedDomains:['localhost'],
    //   tokenGetter: function() {
    //     // token from user auth
    //     var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OTAwMTUyMWU2YzQ4MjE2Y2NjMTdiZGMiLCJpYXQiOjE0OTMyNzYyOTYsImV4cCI6MTQ5MzM2MjY5NiwiaXNzIjoiZmVhdGhlcnMifQ.XXEEpKPCM-AGGX9DKml6lLycT1U6rA1stPAt9v9Bu54';
    //     return token;
    //   }
    // });

    // $httpProvider.interceptors.push('jwtInterceptor');
  });
