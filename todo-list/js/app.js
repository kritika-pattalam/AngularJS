// JavaScript Document
//Define the angular app
var app=angular.module('app',[]);
//Define the controller
app.controller('TodoCtrl', function($scope,$filter) {
    //get saved to-do list from localstorage
    $scope.saved = localStorage.getItem('todos');
    //load local storage list, if it is empty load the default to-do list
    $scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
	localStorage.setItem('todos', JSON.stringify($scope.todos));    
    //adds new task
    $scope.addTodo=function(){
    	$scope.todos.push({text:$scope.addText, done:false});
    	$scope.addText='';
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    	
    }
    //tasks pending
    $scope.tasksPending = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo){
            count+= todo.done ? 0 : 1;
        });
        return count;
    };
    //clears completed task
    $scope.clearCompleted=function(){
     	$scope.todos=$filter("filter")($scope.todos,function(list){
    		return !list.done;
    	})
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    }
    //saves the changes made to checkbox,e.g . striking the task when its done
    $scope.onCheckboxChange=function()
    {
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    }
});