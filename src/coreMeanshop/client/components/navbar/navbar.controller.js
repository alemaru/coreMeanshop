'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

}

angular.module('meanshopApp')
  .controller('NavbarController', NavbarController);

$scope.menu = [{
    'title': 'Home',
    'state': 'main'
}, {
    'title': 'Products',
    'state': 'products'
}];
