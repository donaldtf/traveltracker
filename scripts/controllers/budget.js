app.controller('budgetController', function($scope) {

  $scope.actualcosts = [
        {
          name: 'Plane tickets',
          price: 1400,
        },
        {
          name: 'Visas',
          price: 400,
        },
        {
          name: 'Beijing Hotel',
          price: 300,
        },
    ];

  $scope.predictedcosts = [
          {
            name: 'Plane tickets',
            price: 1400,
          },
          {
            name: 'Visas',
            price: 400,
          },
          {
            name: 'Beijing Hotel',
            price: 300,
          },
      ];

});
