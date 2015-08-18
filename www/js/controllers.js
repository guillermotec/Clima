angular.module('starter.controllers', [])
//dia y dias
.controller('DashCtrl', function($scope, $http, Chats, Units, Q, C) {

  //


    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+Q.get()+"&cnt="+C.get()+"&units=" + Units.get()).success(function (data){
      Chats.set(data.list);
      console.log(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.chats = Chats.all();
      });

    //Metodo de actualizacion
    $scope.doRefresh = function() {
      console.log(C.get());
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+Q.get()+"&cnt="+C.get()+"&units=" + Units.get())
     .success(function(data) {
       Chats.set(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.chats = Chats.all();
     })
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }
})
//Horas
.controller('Dash2Ctrl', function($scope, $http, Chats, Units, Q, C) {

  //
    $http.get("http://api.openweathermap.org/data/2.5/forecast/?q="+Q.get()+"&cnt="+C.get()+"&units=" + Units.get()).success(function (data){
      Chats.set(data.list);
      console.log(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.chats = Chats.all();
      });

    //Metodo de actualizacion
    $scope.doRefresh = function() {
    $http.get("http://api.openweathermap.org/data/2.5/forecast/?q="+Q.get()+"&cnt="+C.get()+"&units=" + Units.get())
     .success(function(data) {
       Chats.set(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.chats = Chats.all();
     })
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }
})
.controller('ChatsCtrl', function($scope, $http, Chats) {
  $scope.chats = Chats.all();

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.weatherToday = Chats.get($stateParams.chatId);
})


.controller('AccountCtrl', function($scope, Units) {
  
  $scope.celcius = function(){
      Units.set("metric");
  }
  $scope.fahrenheit = function(){
      Units.set("imperial");
  }
  $scope.kelvin = function(){
      Units.set("kelvin");
  }
})

.controller('CiudadCtrl', function($scope, Q) {
  
  $scope.barcelona = function(){
      Q.set("barcelona");
  }
  $scope.cancun = function(){
      Q.set("cancun");
  }
  $scope.chicago = function(){
      Q.set("chicago");
  }
  $scope.estadosUnidos = function(){
      Q.set("estadosUnidos");
  }
  $scope.mexico = function(){
      Q.set("mexico");
  }
  $scope.monterrey = function(){
      Q.set("monterrey");
  }
  $scope.japon = function(){
      Q.set("japon");
  }
  $scope.taiwan = function(){
      Q.set("taiwan");
  }
})
.controller('DiasCtrl', function($scope, C) {
  
  $scope.uno = function(){
      C.set("1");
  }
  $scope.dos = function(){
      C.set("2");
  }
  $scope.tres = function(){
      C.set("3");
  }
  $scope.cuatro = function(){
      C.set("4");
  }
  $scope.cinco = function(){
      C.set("5");
  }
  $scope.seis = function(){
      C.set("6");
  }
 
})