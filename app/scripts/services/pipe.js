'use strict';

angular.module('pipe', []).
	factory('pipeService', function($q, pipeApi) {
		//since I need only title, description, link and image 
		//I change the items object to be easier to proccess in controller

		var decorateData = function (data) {
			var output = {
				count: data.count,
				items: []
			};
			for (var i = 0; i < data.count; i++) {
				output.items.push({
					title: data.value.items[i].title,
					link: data.value.items[i].link,
					imgUrl: getImageUrl(data.value.items[i]),
					description: getDescription(data.value.items[i].description)
				});
			}
			return output;
		};

		//Pipe data has their images in different attributes,
		//it can be ['media:content'], ['media:content']['media:thumbnail'], ['media:thumbnail'],
		//sometimes image hides in ['description'], or there is no image, 
		//this function looks for the image in all this "places" and return image url

		var getImageUrl = function (item) {
			var url = '',
				desc = angular.element('<div />')
					.html(item.description);
			desc.find('.feedflare').remove();
			if (item['media:content'] && !item['media:thumbnail']) {
				if (item['media:content']['media:thumbnail']) {
					url = item['media:content']['media:thumbnail'].url;
				} else {
					url = item['media:content'].url;
				}
			} else if (item['media:thumbnail']) {
				url = item['media:thumbnail'].url;
			} else if (desc.html().match(/src\=([^\s]*)\s/) && desc.html().match(/src\=([^\s]*)\s/).length) {
				var src = desc.html().match(/src\=([^\s]*)\s/)[1];
				url = src.substring(1,src.length - 1);
				url = url.indexOf('feedburner') === -1 ? url : false;
			} else {
				url = false;
			}
			return url;
		};

		//trim gescription from any html stuff

		var getDescription = function (description) {
			if (description) {
				return description.replace(/<(?:.|\n)*?>/gm, '');
			} else {
				return 'sorry no description';
			}
		};

		return {
			getList: function () {
				var deferred = $q.defer();
				pipeApi.get({
				},
				function getSuccess (data) {
					deferred.resolve(decorateData(data));
				},
				function getError (data) {
					deferred.reject(data);
				});
				return deferred.promise;
			}
		};
	});