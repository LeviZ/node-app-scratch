#Big Red Button

###This repo is a big red button

#####Install instructions



Run `bower install big-red-button` to get it in there. And then in your `Gruntfile.js` add the following when using `grunt-sass`:

	```js
	options: {
  	includePaths: [
    	'./bower_components/big-red-button'
  		]
	}
	```

Then import into your primary Sass manifest file:

	```scss
	@import "big-red-button";
	```