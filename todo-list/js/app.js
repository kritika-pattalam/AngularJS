// JavaScript Document
//Define the angular app
var app=angular.module('app',[]);
//Define the controller
app.controller('TodoCtrl', function($scope,$filter) {
	//load with dummy list
    $scope.todos=[{text:'learn angular',done:false},{text:'build angular',done:false}];
    //displays the number of todo task available
    $scope.totalTodos=$scope.todos.length;
    //gets the number of tasks available for every task added
    $scope.getTodoLength=function()
    {
    	$scope.totalTodos=$scope.todos.length;
    }
    //adds new task
    $scope.addTodo=function(){
    	$scope.todos.push({text:$scope.addText, done:false});
    	$scope.addText='';
    	
    }
    //clears completed task
    $scope.clearCompleted=function(){
     	$scope.todos=$filter("filter")($scope.todos,function(list){
    		return !list.done;
    	})
    }


});