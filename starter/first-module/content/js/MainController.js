function MainController($scope) {
   $scope.name = 'Hello World' 
}

angular
    .module('app')
    .controller('MainController', MainController)