var app = angular.module("myModule", [])
				.controller("myController", function($scope, $http, $window){
				
				getProductDetails();
			
				function getProductDetails() {
					$http({
						method : 'GET',
						url : 'http://localhost:8989/product'
					}).then(function successCallback(response) {
						$scope.products = response.data.products;
					}, function errorCallback(response) {
						console.log(response.statusText);
					});
				}
				
				$scope.carts=[];
								
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.id, p_name: product.name, p_price: product.price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
				
				$scope.ShowAlert = function () {
					if ($scope.total == 0) { 
						$window.alert("Please add item to cart!");
					}
					else
						$window.alert("Processing!");
				}
	});