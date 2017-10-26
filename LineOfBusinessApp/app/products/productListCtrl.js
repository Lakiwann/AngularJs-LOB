(function()
{
    "use strict";
    var app = angular.module("productManagement");
    app.controller("productListCtrl", ["productResource",ProductListCtrl]);
    
    function ProductListCtrl(productResource)
    {
        var vm = this;
        vm.products = [];
       
        //vm.products = [
        //   {
        //       "productId": 1,
        //       "productName": "Leaf rake",
        //       "productCode": "GDN-0011",
        //       "releaseDate": "March 19, 2009",
        //       "description": "Leaf Rake with 48-inch handle",
        //       "cost": 9.00,
        //       "price": 19.95,
        //       "category": "garden",
        //       "tags": ["leaf", "tool"],
        //       "imageUrl": "https://openclipart.org/download/277118/Rake2.svg"
        //   },
        //   {
        //       "productId": 2,
        //       "productName": "Leaf rake large",
        //       "productCode": "GDN-0012",
        //       "releaseDate": "March 19, 2009",
        //       "description": "Leaf Rake with 60-inch handle",
        //       "cost": 12.00,
        //       "price": 29.95,
        //       "category": "garden",
        //       "tags": ["leaf", "tool"],
        //       "imageUrl": "https://openclipart.org/download/231019/Crossed-Rakes.svg"
        //   }];

        productResource.query(function (data) {
            vm.products = data;
        });

        vm.showImage = false;

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        };
    }

    
}
());