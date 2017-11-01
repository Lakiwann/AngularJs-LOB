(function () {
    "use strict";

    var app = angular.module("productManagement", ["common.services"
                                                    , "ui.router"
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
                url: "/products/edit/:productId",
                templateUrl: "/app/products/productEditView.html",
                controller: "productEditCtrl as vm"
            })

            $urlRouterProvider.otherwise("/");
        }
    ]);

}());