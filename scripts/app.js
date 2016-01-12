'use strict';

/**
 * @ngdoc overview
 * @name traveltrackerApp
 * @description
 * # traveltrackerApp
 *
 * Main module of the application.
 */

var app = angular.module('traveltrackerApp', ['ngMaterial', 'ngRoute',
'ngMdIcons', 'ui.router',
]);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

      // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
          url: '/home',
          templateUrl: '/views/home.html',
          controller: 'homeController',
        })

        // nested list with custom controller
    .state('home.list', {
      url: '/list',
      templateUrl: '/views/partial-home-list.html',
      controller: function($scope) {
        $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
      },
    })

    // nested list with just some random string data
    .state('home.paragraph', {
      url: '/paragraph',
      template: 'I could sure use a drink right now.',
    })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
      url: '/about',
      views: {

        // the main template will be placed here (relatively named)
        '': { templateUrl: '/views/about.html' },

        // the child views will be defined here (absolutely named)
        'columnOne@about': { template: 'Look I am a column!' },

        // for column two, we'll define a separate controller
        'columnTwo@about': {
          templateUrl: '/views/table-data.html',
          // controller: 'scotchController',
        },
      },

    }
 )
 .state('budget', {
   url: '/budget',
   templateUrl: '/views/budget.html',
   controller: 'budgetController',
 });

});

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('orange');
});
