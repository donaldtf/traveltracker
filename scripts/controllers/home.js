app.controller('homeController', function($scope) {

  $scope.nexttrip = {

    title: 'China Trip',
    photo: 'http://images5.alphacoders.com/437/437769.jpg',
    startdate: 'April 28th',
    enddate: 'May 19th',
  };

  $scope.getDaysLeft = function() {
    return 101;
  };

});
