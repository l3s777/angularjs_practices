// A controller manages the app's data
app.controller('MainController', ['$scope', function($scope){
  $scope.title = "Top seller in Books";
  $scope.promo = "hello world";
  $scope.products = [{
      name:"The Book of Trees",
      price: 19,
      pubdate: new Date('2014','03','08'),
      cover: 'img/book-of-trees.jpg',
      likes:0,
      dislikes:0
    }, {
      name:"Book2",
      price: 22,
      pubdate: new Date('2014','03','08'),
      cover: 'img/book-of-trees.jpg',
      likes:0,
      dislikes:0
    }, {
      name:"Book3",
      price: 25,
      pubdate: new Date('2014','03','08'),
      cover: 'img/book-of-trees.jpg',
      likes:0,
      dislikes:0
    }
  ];
  $scope.plusOne = function(index) {
    $scope.products[index].likes +=1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes +=1;
  };
}]);
