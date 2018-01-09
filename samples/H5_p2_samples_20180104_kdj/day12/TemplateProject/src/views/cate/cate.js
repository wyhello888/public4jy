angular.module('catePage',[])
.config(function($stateProvider){
  $stateProvider
  .state('cate',{
    url:'/cate',
    css:{
      href:'src/views/cate/cate.css',
      persist:true
    },
    // css:'src/views/cate/cate.css',
    templateUrl:'src/views/cate/cate.html'
  })
})
