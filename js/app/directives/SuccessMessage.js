function SuccessMessage() {
	return {
		template: '<div>Woohoo! Success!</div>'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);