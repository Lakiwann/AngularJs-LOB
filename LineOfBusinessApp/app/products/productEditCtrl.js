(function () {

    "use strict";

    var app = angular.module("productManagement");
    app.controller("productEditCtrl",
                    ["product", "$state", "productService", productEditCtrl]);

    function productEditCtrl(product, $state, productService) {

        var vm = this;

        vm.product = product;

        vm.priceOption = "percent";
        vm.markupPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost);
        vm.markupAmount = productService.calculateMarginAmount(vm.product.price, vm.product.cost);

        vm.marginPercent = function () {
            return productService.calculateMarginPercent(vm.product.price, vm.product.cost);
        }

        vm.calculatePrice = function () {
            var price = 0;

            if (vm.priceOption == "percent") {
                price = productService.calculatePriceFromMarkupPercent(vm.product.cost, vm.markupPercent);
            }

            if (vm.priceOption == "amount") {
                price = productService.calculatePriceFromMarkupAmount(vm.product.cost, vm.markupAmount);
            }

            vm.product.price = price;
        }
        vm.datePickerDate = new Date(vm.product.releaseDate);
        
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

        vm.submit = function () {
            var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
            ];
            vm.product.releaseDate = monthNames[vm.datePickerDate.getMonth()] + ' ' + vm.datePickerDate.getDate() + ', ' + vm.datePickerDate.getFullYear();
           
            vm.product.$save(function (data) {
                toastr.success("Save Successful");
             }
            );
            
            //vm.product.releaseDate = new Date(vm.product.releaseDate);
            //alert(vm.product.releaseDate);
        }
        

        vm.cancel = function () {
            $state.go('productList');
        }

        vm.addTags = function (tags) {
            if (tags) {
                var array = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = "";
            }
            else {
                toastr.error("Please enter one or more tags seperated by commas!!");
                
            }
        }

        vm.removeTag = function(idx)
        {
            vm.product.tags.splice(idx, 1);
        }

    }

}());