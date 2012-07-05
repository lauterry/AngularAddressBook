angular.module('myApp', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/edit/:contactId', {
            templateUrl: 'partials/edit.html',
            controller: ContactEditCtrl
        });
        $routeProvider.when('/list', {
            templateUrl: 'partials/list.html',
            controller: ContactListCtrl
        });
        $routeProvider.otherwise({ redirectTo: '/list' });
    }])
    .directive('contactWidget', function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'templates/contactWidget.html',
            scope:{
                contact: '='
            }
        }
    });