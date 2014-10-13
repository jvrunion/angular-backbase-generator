'use strict';

describe('Controller: ListCtrl', function () {

	// load the controller's module
	beforeEach(module('backbaseApp'));

	var $rootScope,
	$scope,
	$q,
	deferred,
	pipeService,
	pipeServiceResponse = {
		count: 3,
		items: [
			{
				title: 'Google says Amazon is biggest search rival',
				link: 'http://www.ft.com/cms/s/0/748bff70-52f2-11e4-b917-00144feab7de.html?ftcamp=published_links%2Frss%2Fhome_us%2Ffeed%2F%2Fproduct',
				imgUrl: false,
				description: 'Tech group under intense political pressure tells critics that its market power is overstated and to look at US rivals including Facebook'
			},
			{
				title: 'Torn? What to Do When You Have No Idea What to Do.',
				link: 'http://www.entrepreneur.com/article/238361', 
				imgUrl: 'http://www.entrepreneur.com/dbimages/article/h3/1412973617-2-torn-what-do-when-no-idea.jpg',
				description: 'While entrepreneurship is an exciting adventure, it at times can be confusing. If you have no idea what to do, try these things and see if they can help you get unstuck.'
			},
			{
				title: 'Google Is Now Connecting Users Searching for Symptoms With Doctors Over Video Chat',
				link: 'http://www.entrepreneur.com/article/238419',
				imgUrl: 'http://www.entrepreneur.com/dbimages/article/h3/1413219170-google-connecting-users-searching-symptos-doctors-video-chat.jpg',
				description: 'The conventional wisdom \'don\'t diagnose your illness over the Internet may be changing.'
			}
		]
	};

	// Initialize the controller and a mock scope
	beforeEach(inject(function (_$rootScope_, _$q_) {
		$rootScope = _$rootScope_.$new();
		$q = _$q_;
	}));

	beforeEach(inject(function($controller) {
		$scope = $rootScope.$new();
		
		pipeService = {
			getList: function() {
				deferred = $q.defer();
				return deferred.promise;
			}
		};
		
		spyOn(pipeService, 'getList').andCallThrough();
		
		$controller('ListCtrl', {
			'$scope': $scope,
			'pipeService': pipeService
		});
	}));
	  

	// success scenarios

	describe('pipeService.getList', function() {
		
		beforeEach(function() {
			deferred.resolve(pipeServiceResponse);
			$rootScope.$apply();
		});

		it('should getList from pipeService', function() {
			expect(pipeService.getList).toHaveBeenCalled();
		});

	 	it('should set the response from the bagelApiServiceQuery to $scope.bagels', function() {
			expect($scope.count).toEqual(pipeServiceResponse.count);
		});

		it('should change item full flag after click', function() {
			expect($scope.list[0].full).toBeFalsy();
			$scope.toggleSummary($scope.list[0]);
			expect($scope.list[0].full).toBeTruthy();
			expect($scope.list[1].full).toBeFalsy();
			$scope.toggleSummary($scope.list[1]);
			expect($scope.list[1].full).toBeTruthy();
			$scope.toggleSummary($scope.list[0]);
			expect($scope.list[0].full).toBeFalsy();
		});
	});

	// error scenario

	describe('pipeService.getList', function() {
		
		beforeEach(function() {
			deferred.reject();
			$rootScope.$apply();
		});
		it('should show error when promise is rejected', function () {
			expect($scope.error).toBeTruthy();
		});
	});
});
