angular.module('loyalty', ['ionic', 'loyalty.controllers', 'loyalty.services'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html"
            })

            .state('app.offers', {
                url: "/offers",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/offer-list.html",
                        controller: "OfferListCtrl"
                    }
                }
            })

            .state('app.offer-detail', {
                url: "/offers/:offerId",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/offer-detail.html",
                        controller: "OfferDetailCtrl"
                    }
                }
            })

            .state('app.products', {
                url: "/products",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/product-list.html",
                        controller: "ProductListCtrl"
                    }
                }
            })

            .state('app.product-detail', {
                url: "/products/:productId",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/product-detail.html",
                        controller: "ProductDetailCtrl"
                    }
                }
            });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/offers');

    });

