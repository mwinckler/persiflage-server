var mattChatApp = angular.module('mattChatApp', []);

mattChatApp.controller('ChatWindowController', function($scope) {
	$scope.messages = [];
	$scope.chatMessage = '';
	$scope.senderName = '';

	var socket = io.connect('http://localhost:8080/chat');
	socket.on('chat', function (data) {
		console.log('received:', data);
		$scope.$apply(function() {
			$scope.messages.push(data);
		});
	});


	$scope.sendMessage = function(sender, message) {
		var data = { 
			sender: sender,
			content: message
		};
		console.log('sending:', data);
		socket.emit('chat', data);
	};
});
