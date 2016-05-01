namespace MyApp {

    angular.module('MyApp', ['ui.router', 'ngResource']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/about.html',
                controller: MyApp.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('auctions', {
                url: '/auctions',
                templateUrl: '/ngApp/auctions.html',
                controller: MyApp.Controllers.AuctionsController,
                controllerAs: 'controller'
            })
            .state('createAuction', {
                url: '/createAuction',
                templateUrl: '/ngApp/create-Auction.html',
                controller: MyApp.Controllers.CreateAuctionController,
                controllerAs: 'controller'
            })
            .state('auctionDetail', {
                url: '/auction/:id',
                templateUrl: '/ngApp/auctionDetail.html',
                controller: MyApp.Controllers.AuctionDetailController,
                controllerAs: 'controller'
            });
            //.state('notFound', {
            //    url: '/notFound',
            //    templateUrl: '/ngApp/notFound.html'
            //});

        // Handle request for non-existent route
        //$urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

}