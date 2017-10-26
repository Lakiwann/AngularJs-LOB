(function () {
    "use strict";
    var app = angular.module("common.services");
    app.factory("productResource", ["$resource", ProductResource]);

    function ProductResource($resource)
    {
        return $resource("api/products/:productId");
    }
}());