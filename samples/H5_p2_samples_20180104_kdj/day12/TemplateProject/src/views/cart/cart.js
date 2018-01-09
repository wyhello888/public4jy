angular.module('cartPage',[])
.config(function($stateProvider){
  $stateProvider
  .state('cart',{
    url:'/cart',
    templateUrl:'src/views/cart/cart.html',
    controller:function($scope){
        var data = localStorage.cartDatas;
        console.log(data)
        var json = JSON.parse(data);
        $scope.data = json;

        $scope.delete = function(id){

        }
    }
  })
})
