// Code goes here

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope) {
													 
  $scope.title = 'Labels'; 
  $scope.promo = 'Our Product.';
  $scope.show = 'Show'; 
  $scope.entries = 'entries'; 
  $scope.searchh = 'Search'; 
  $scope.showing = 'Page'; 


  $scope.row1name = 'Image';
  $scope.row2name = 'Name';
  $scope.row3name = 'Stock';
  $scope.row4name = 'Model';
  $scope.row5name = 'Price';
  
  $scope.currentPage = 1;

  $scope.pageSize = 12;
  $scope.pageSize2 = 24;
  $scope.pageSize3 = 48;
  $scope.pageSize4 = 100;
  $scope.product = [

				

   ];

 
  $scope.pageChangeHandler = function(num) {
      console.log('product page changed to ' + num);
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);