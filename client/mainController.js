angular.module('connectUApp')
  .controller('MainController', ['$http', 'ConnectUService', function($http, ConnectUService){
    var vm = this;

    vm.someUsers = ConnectUService.someUsers;
    console.log("maincontroller", vm.someUsers);

    vm.zip_code = '';

    vm.newUser = {};
    vm.newUser.internships = [];

// if vm.loggedIn = true - shows Profle and Log Out, if vm.loggedIn = false - shows Alumni login
    vm.loggedIn = ConnectUService.data.loggedIn;
    console.log('ConnectUService.data.loggedIn:', ConnectUService.data.loggedIn);


    vm.registerUser = function(){
      console.log('vm.newUser from mainController:', vm.newUser);
      console.log('vm.newUser.internships[0] from mainController:', vm.newUser.internships[0]);
      console.log('vm.newUser.internships[1] from mainController:', vm.newUser.internships[1]);

      ConnectUService.postUsers(vm.newUser, vm.zip_code);
      vm.newUser = {};
      // ConnectUService.getUsers();
    }

    vm.logIn = function(){
      console.log('clicked login function');


    }

  }]);
