
app.controller('MainController', function($scope, $location){

    // Set active menu item
    $scope.isActive = function(path){
        return path == $location.path();
    };





});