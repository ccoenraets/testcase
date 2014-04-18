angular.module('loyalty.services', [])

    .factory('Offer', function () {

        var offers = [
            {id: 0, name: "Offer1", description: "description1"},
            {id: 1, name: "Offer2", description: "description2"},
            {id: 2, name: "Offer3", description: "description3"}
        ];

        return {
            all: function () {
                return offers;
            },
            get: function (id) {
                return offers[id];
            }
        };
    })

    .factory('Product', function () {

        var products = [
            {id: 0, name: "Product1", description: "description1"},
            {id: 1, name: "Product2", description: "description2"},
            {id: 2, name: "Product3", description: "description3"}
        ];

        return {
            all: function () {
                return products;
            },
            get: function (id) {
                return products[id];
            }
        };
    });
