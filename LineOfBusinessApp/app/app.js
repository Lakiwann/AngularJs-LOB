(function () {
    "use strict";

    var app = angular.module("productManagement", ["common.services"
                                                    , "ui.router"
                                                    , "ui.mask"
                                                    ,"ui.bootstrap"
                                                    ,"productResourceMock"]);

    app.config(['$locationProvider',
         function ($locationProvider) {
             $locationProvider.hashPrefix('');
         }
    ]);

    app.config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state("Home",
              {
                  url: "/",
                  templateUrl: "/app/WelcomeView.html"
              })
            .state("productList",
              {
                  url: "/products",
                  templateUrl: "/app/products/productListView.html",
                  controller: "productListCtrl as vm"

              })
            .state("productEdit", {
                abstract: true,
                url: "/products/edit/:productId",
                templateUrl: "/app/products/productEditView.html",
                controller: "productEditCtrl as vm",

                resolve: {
                    productResource: "productResource",
                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({ productId: productId }).$promise;
                    }
                }
            })
            .state("productEdit.info", {
                url: "/info",
                templateUrl: "/app/products/productEditInfoView.html",
            })
             .state("productEdit.price", {
                 url: "/price",
                 templateUrl: "/app/products/productEditPriceView.html",
             })
             .state("productEdit.tags", {
                 url: "/tags",
                 templateUrl: "/app/products/productEditTagsView.html",
             })
            .state("productDetail", {
                url: "/products/:productId",
                templateUrl: "/app/products/productDetailView.html",
                controller: "productDetailCtrl as vm",

                resolve: {
                    productResource: "productResource",
                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({ productId: productId }).$promise;
                    }
                }
            })

            $urlRouterProvider.otherwise("/");
        }
    ]);

}());