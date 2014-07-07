mock-dom-storage
=============

- [Install](#install)
- [Require](#require)
- [MockDomStorage(db)](#mockdomstoragedb)
- [License](#license)

##Install
	npm install mock-dom-storage
	
##Require

	var MockDomStorage = require('mock-dom-storage')

##MockDomStorage(db)

Takes one argument, `db`, which is a [levelup database](https://github.com/rvagg/node-levelup). If no database is given, it will use a [memdown database](https://github.com/rvagg/memdown).

The resulting object should, on the surface, be almost identical to sessionStorage or localStorage. (See [DOM Storage guide](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage) at MDN.)

	localStorage = MockDomStorage() //purposeful lack of 'var'

##License

[MIT](http://opensource.org/licenses/MIT)
