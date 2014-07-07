mock-dom-storage
=============

- [Install](#install)
- [Require](#require)
- [MockDomStorage()](#mockdomstorage)
- [License](#license)

##Install
	npm install mock-dom-storage
	
##Require

	var MockDomStorage = require('mock-dom-storage')

##MockDomStorage()

The resulting object should, on the surface, be almost identical to sessionStorage or localStorage. (See [DOM Storage guide](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage) at MDN.)

	localStorage = MockDomStorage() //purposeful lack of 'var'

	//your test that uses localStorage here...

##License

[MIT](http://opensource.org/licenses/MIT)
