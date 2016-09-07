'use strict';

/*global angular*/
angular.module('RcpgApp').controller('RcpgController', ['$scope', '$http', 'NoteNames', function($scope, $http, NoteNames){
    $scope.allNotes = NoteNames.allNotes;
}]);
