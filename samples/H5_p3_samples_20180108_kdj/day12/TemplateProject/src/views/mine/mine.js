angular.module('minePage',[])
.config(function($stateProvider){
  $stateProvider
  .state('mine',{
    url:'/mine',
    templateUrl:'src/views/mine/mine.html'
  })
})
