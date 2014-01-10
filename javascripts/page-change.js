var pageChange = angular.module("pageChange", ["ngAnimate", "ngRoute"], function($routeProvider, $locationProvider){
  // $locationProvider.html5Mode(true);
  $routeProvider.when('/', {
    templateUrl: '/templates/home.html'
  }).when('/about', {
    templateUrl: '/templates/about.html'
  }).when('/shop', {
    templateUrl: '/templates/shop.html'
  }).when('/portfolio', {
    templateUrl: '/templates/portfolio.html'
  }).when('/contact', {
    templateUrl: '/templates/contact.html'
  });
});
