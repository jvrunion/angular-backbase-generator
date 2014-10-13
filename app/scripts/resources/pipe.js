'use strict';

angular.module('backbaseApp.pipeApi', ['ngResource'])
	.factory('pipeApi', function($resource){
		return $resource(
			'https://pipes.yahoo.com/pipes/pipe.run?_id=2b2d66bcf6e46d1018533093a49be2ed&_render=json',
			{},
			{
				getList: {
					method: 'GET',
					isArray: false
				}
			}
		);
	});