angular.module('homePage',[])

.config(function($stateProvider){


  $stateProvider
  .state('home',{
    url:'/home',
    params:{
      p1:'01',
      p2:'02'
    },
    // css:'src/views/home/home.css',
    // css:{
    //   href:'src/views/home/home.css',
    //   persist:true
    // },
    css: [
        {
          href: 'src/views/home/home.css',
          media: '(max-width: 480px)'
        }, {
          href: 'src/views/home/home2.css',
          media: '(min-width: 480px) and (max-width: 1024px)'
        }
      ],
    templateUrl:'src/views/home/home.html',
    controller:'homeCtl'
  })
  .state('home.miaosha',{
    url:'/ms',
    templateUrl:'src/views/home/home.miaosha/home.miaosha.html'
  })
  .state('home.qianggou',{
    url:'/qg',
    templateUrl:'src/views/home/home.qianggou/home.qianggou.html'
  })
  .state('pro',{
    // url:'/pro/:id',
    // url:'/pro/{id}',
    url:'/pro',
    params:{
      id:100,
    },
    templateUrl:'src/views/home/home.info.html',
    controller:function($scope,$stateParams,proarr){
      let id = $stateParams.id;
      console.log(id)
      var data = proarr.getData();
      $scope.data = data[id];
    }
  })

})
.controller('homeCtl',function($scope,$state,$stateParams,proarr,$css,cartService){

    let p1 = $stateParams.p1;
    let p2 = $stateParams.p2;

      $scope.delete = function(id){
        console.log(id)
        proarr.remove(id)
      }

      $scope.add = function(id){
          cartService.addPro(id)
      }

    $scope.arr = proarr.getData();
})
.service('proarr',function(){
  var arr = [
    {id:0,name:'aaa0'},
    {id:1,name:'aaa1'},
    {id:2,name:'aaa2'},
    {id:3,name:'aaa3'},
    {id:4,name:'aaa4'},
    {id:5,name:'aaa5'},
    {id:6,name:'aaa6'},
    {id:7,name:'aaa7'},
    {id:8,name:'aaa8'}
  ]

  this.getData = function(){
     return arr;
  }

  this.remove =function(id){
      for(var i =0; i<arr.length;i++){
        if(arr[i].id == id){
          arr.splice(i,1);
        }
      }
  }

  this.add = function(item){
      arr.push(item)
  }
})
.service('cartService',function(proarr){

    var cartDatas = [];

    this.addPro = function(id){

        // console.log(proarr.getData())
        cartDatas.push(proarr.getData()[id]);
        console.log(cartDatas)
        localStorage.cartDatas = JSON.stringify(cartDatas);
    }
})
