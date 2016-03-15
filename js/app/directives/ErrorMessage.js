function ErrorMessage() {
	return {
		template: '<div>Oh no, an error occurred!</div>'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
