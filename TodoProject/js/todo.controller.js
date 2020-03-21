function TodoController() {
    this.list = [{
      title: 'First Todo item',
      completed: false
    },
    {
      title: 'Second Todo item',
      completed: false
    },
    {
      title: 'Third Todo item',
      completed: false
    }
  ];
}

angular
  .module('app')
  .controller('TodoController',TodoController)