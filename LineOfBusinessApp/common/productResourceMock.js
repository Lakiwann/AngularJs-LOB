(function () {
    "use strict";
    var app = angular.module("productResourceMock", ["ngMockE2E"]);
    app.run(function ($httpBackend) {

        var products = [
               {
                   "productId": 1,
                   "productName": "Leaf rake",
                   "productCode": "GDN-0011",
                   "releaseDate": "March 19, 2009",
                   "description": "Leaf Rake with 48-inch handle",
                   "cost": 9.00,
                   "price": 19.95,
                   "category": "garden",
                   "tags": ["leaf", "tool"],
                   "imageUrl": "https://openclipart.org/download/277118/Rake2.svg"
               },
               {
                   "productId": 2,
                   "productName": "Leaf rake large",
                   "productCode": "GDN-0012",
                   "releaseDate": "March 19, 2009",
                   "description": "Leaf Rake with 60-inch handle",
                   "cost": 12.00,
                   "price": 29.95,
                   "category": "garden",
                   "tags": ["leaf", "tool"],
                   "imageUrl": "https://openclipart.org/download/231019/Crossed-Rakes.svg"
               }];

        var productUrl = "api/products";

        $httpBackend.whenGET(productUrl).respond(products);

        var editingRegex = new RegExp(productUrl + "/[0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var product = { "productId": 0 };

            var parameters = url.split('/');
            var id = parameters[parameters.length];
            if(id > 0)
            {
                for(var i=0; i<products.length; i++)
                {
                    if(products[i].productId == id)
                    {
                        product = products[i];
                        break;
                    }
                }

            }

            return [200, product, {}];
        })

    });

    
}());