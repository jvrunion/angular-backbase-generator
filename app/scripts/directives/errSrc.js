'use strict';

angular.module('backbaseApp')
	.directive('errSrc', function() {
		return {
			link: function(scope, element, attrs) {
				element.bind('error', function() {
					if (attrs.src !== attrs.errSrc) {
						attrs.$set('src', attrs.errSrc);
					}
				});
			}
		};
	});