
var app = angular.module('fig', ['ngRoute']);


/* Router
---------------------------------------------------------------------- */
app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'templates/dashboard.html',
            // controller: 'dashboardController'
        })

        .when('/products', {
            templateUrl: 'templates/products.html',
            // controller: 'productsController'
        })
        .otherwise({
            redirectTo: '/'
        });
});