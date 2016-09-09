'use strict';

/*global angular*/
angular.module('RcpgApp').controller('RcpgController', ['$scope', '$http', 'NoteNames', 'SavedGenerators', function($scope, $http, NoteNames, SavedGenerators){
    $scope.allNotes = NoteNames.allNotes;
}]);
