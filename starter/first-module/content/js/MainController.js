function MainController() {
   this.name = 'Hello World' 
}

// MainController.$inject = ['$scope'];

angular
    .module('app')
    .controller('MainController', MainController)