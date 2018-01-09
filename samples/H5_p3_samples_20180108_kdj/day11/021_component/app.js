angular.module('app',['ui.router'])
.config(function($stateProvider){

  console.log('-----')

    $stateProvider
    .state({
      name:'home',
      url:'/home',
      params:{
        id:null
      }
      templateUrl:'/home/home.html',
      controller:'homeCtrl'
    })
    .state({
      name:'list',
      url:'/list',
      templateUrl:'/list/list.html',
    })
    .state({
      name:'find',
      url:'/find',
      templateUrl:'/find/find.html',
    })
    .state({
      name:'mine',
      url:'/mine',
      templateUrl:'/mine/mine.html',
    })
})
.controller('homeCtrl',function($scope,$params){
    $scope.title = 'home page';

    var id = $params.id
})
