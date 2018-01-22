angular.module('cicloPagamentos').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.html'
        }).state('ciclopagamento', {
            url: '/ciclopagamentos',
            templateUrl: 'ciclopagamentos/tabs.html'
        })

        $urlRouterProvider.otherwise('/dashboard')
    }
])