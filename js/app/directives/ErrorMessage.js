function ErrorMessage() {
	return {
		restrict: 'A',
		template: '<div>Oh no, an error occurred!</div>'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
