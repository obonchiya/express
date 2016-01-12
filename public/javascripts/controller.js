//モジュールの定義
/*global angular*/
var myApp = angular.module('mySimpleApp', []);
//コントローラーの定義
// myApp.controller('MySimpleController', ['$scope', function($scope){
//     $scope.message = 'initial message';
//     $scope.greet = function(){
//         $scope.message = 'hello';
//     };
// }]);
myApp.controller('MySimpleController', function(){
    this.message ='initial message';
    this.greet = function() {
        this.message ='hello';
    };
});