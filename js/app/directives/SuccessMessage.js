function SuccessMessage() {
	return {
		restrict: 'E',
		template: '<div>Woohoo! Success!</div>'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
