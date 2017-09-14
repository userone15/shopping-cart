var app = angular.module("myModule", [])
				.controller("myController", function($scope, $http, $window){
				
				$scope.products = [
					{id: "1", name: "Samsung Galaxy S7 Edge", image: "images/1.jpg", price: 20000},
					{id: "2", name: "iPhone 8", image: "images/2.png", price: 60000},
					{id: "3", name: "Sony Xperia Z3+", image: "images/3.png", price: 40000},
					{id: "4", name: "MOTO 17", image: "images/4.png", price: 25000},
					{id: "5", name: "Lamo Laptop", image: "images/5.png", price: 50000},
					{id: "6", name: "Motorola G4", image: "images/6.png", price: 10000}
				];
				
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