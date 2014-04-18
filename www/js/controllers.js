angular.module('loyalty.controllers', [])

    .controller('OfferListCtrl', function ($scope, Offer) {
        $scope.offers = Offer.all();
    })

    .controller('OfferDetailCtrl', function ($scope, $stateParams, Offer) {

        $scope.offer = Offer.get($stateParams.offerId);

    })

    .controller('ProductListCtrl', function ($scope, Product) {
        $scope.products = Product.all();
    })

    .controller('ProductDetailCtrl', function ($scope, $stateParams, Product) {

        $scope.product = Product.get($stateParams.productId);

    });