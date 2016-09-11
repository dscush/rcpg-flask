'use strict';

/*global angular*/
angular.module('RcpgApp').controller('RcpgController', ['$scope', '$http', 'NoteNames', 'SavedGenerators', function($scope, $http, NoteNames, SavedGenerators){
    $scope.allNotes = NoteNames.allNotes;
    $scope.SavedGenerators = SavedGenerators;
    $scope.newGenerator = function(name) {
        new SavedGenerators.Generator(name);
        console.log('fooo');
        // TODO: set active generator radio button for this generator
    }
}]);
