var path = require('path');

describe('Directive Test', function() {
	browser.get('http://localhost:8080');

	it('should render the success message', function() {
		expect(element(by.css('success-message')).getText()).toEqual('Woohoo! Success!');
		expect(element(by.css('[success-message]')).getText()).toEqual('');
	});

	it('should render the error message only in an attribute', function() {
		expect(element(by.css('[error-message]')).getText()).toEqual('Oh no, an error occurred!');
		expect(element(by.css('error-message')).getText()).toEqual('');
	});
});