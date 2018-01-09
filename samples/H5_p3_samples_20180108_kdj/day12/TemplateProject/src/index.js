angular.module('TemplateProject',
["ui.router",
"angularCSS",


"homePage",
"catePage",
"cartPage",
"minePage"

])
.config(function($stateProvider,$urlRouterProvider,$cssProvider){

    $urlRouterProvider.otherwise('/home')


    // angular.extend($cssProvider.defaults, {
    //   container: 'head',
    //   method: 'append',
    //   persist: true,
    //   preload: false,
    //   bustCache: false
    // });

})
