
##Pre-Requisites:

* [Node Package Manager](https://www.npmjs.com/)
* [Bower Component Manager](http://bower.io)
* [Grunt Task Runner](http://gruntjs.com)

####Clone:

```
https://github.com/jvrunion/angular-backbase-generator.git
```

	$ cd backbase-angular
	$ npm install
	$ bower install

####Testing:
	
	$ grunt test

The generator comes pre-installed with [Karma](http://karma-runner.github.io/0.12/index.html) is integrated with [Grunt](http://www.gruntjs.com) for testing

####Server:

	$ grunt serve

####Build

	$ grunt build


## About this generator

###Backbase 
#####Customer Experience Platform.

* Widget-based with a modern web oriented architecture.
* Including Launchpad: Ready to go blueprints & apps.
* Integrates with any system or application.

[More Info](http://www.backbase.com/home)

###Angular
#####Why AngularJS?

HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.

#####Preset Options:

######Controller

Example:

	angular.module('myMod').controller('UserCtrl', function ($scope) {
	  // ...
	});

######Directive

	angular.module('myMod').directive('myDirective', function () {
	  return {
	    template: '<div></div>',
	    restrict: 'E',
	    link: function postLink(scope, element, attrs) {
	      element.text('this is the myDirective directive');
	    }
	  };
	});

[More Info](https://angularjs.org/)