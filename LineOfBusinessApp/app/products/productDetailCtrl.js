(function () {
    "use strict";

    var app = angular.module("productManagement");
    app.controller("productDetailCtrl", ["product", productDetailCtrl]);

    function productDetailCtrl(product) {
        var vm = this;

        //vm.product = {
        //    "productId": 1,
        //    "productName": "Leaf rake",
        //    "productCode": "GDN-0011",
        //    "releaseDate": "March 19, 2009",
        //    "description": "Leaf Rake with 48-inch handle",
        //    "cost": 9.00,
        //    "price": 19.95,
        //    "category": "garden",
        //    "tags": ["leaf", "tool"],
        //    "imageUrl": "https://openclipart.org/download/277118/Rake2.svg"
        //};
        
        vm.product = product;

        vm.title = "Product Detail: " + vm.product.productName;

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    }
}());