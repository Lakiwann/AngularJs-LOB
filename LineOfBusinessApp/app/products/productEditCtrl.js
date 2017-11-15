(function () {

    "use strict";

    var app = angular.module("productManagement");
    app.controller("productEditCtrl",
                    ["product", productEditCtrl]);

    function productEditCtrl(product) {

        var vm = this;

        vm.product = product;

        if (vm.product && vm.product.productId) {
            vm.title = "Edit:" + vm.product.productName;
        }
        else {
            vm.title = "New Product";
        }

        //Calendar event function
        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };
    }

}());