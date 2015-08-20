'use strict';

var SPKnight = SPKnight || {};
SPKnight.SPFestSeattleAngularDemo = SPKnight.SPFestSeattleAngularDemo || {};

SPKnight.SPFestSeattleAngularDemo.App = angular.module('SPFestSeattleAngularDemo', []);
SPKnight.SPFestSeattleAngularDemo.App.filter('unsafe', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
});

SPKnight.SPFestSeattleAngularDemo.App.controller('DemoController', ['$scope', '$rootScope', '$filter',
    function ($scope, $rootScope, $filter) {
    }]);