var test = require('tap').test
var Storage = require('../index.js')

test('storage lives up to specs', function(t) {
	storage = Storage()

	t.equal(typeof storage.key, "function", "key is a function")
	t.equal(typeof storage.getItem, "function", "getItem is a function")
	t.equal(typeof storage.setItem, "function", "setItem is a function")
	t.equal(typeof storage.removeItem, "function", "removeItem is a function")
	t.equal(typeof storage.length, "number", "length is a number")
	t.equal(typeof storage.clear, "function", "getItem is a function")

	function quickTestGetLen(testKey, testVal, tapStr, len) {
		t.equal(storage.getItem(testKey), testVal, tapStr)
		//t.equal(storage.len, len, "length is "+len)
		//console.log(storage.length)
	}

	t.equal(storage.getItem("oh yes"), null, "that's right")
	//t.equal(storage.length, 0, "length is "+0)

	quickTestGetLen("hey", null, "getting non-key returns null", 0)

	storage.setItem("hey", "sup") //Add items
	quickTestGetLen("hey", "sup", "keys can be added", 1)

	storage.removeItem("hey") //Remove items
	quickTestGetLen("hey", null, "getting non-key returns null", 0)

	storage.setItem("", "wat") //Add empty-string key
	quickTestGetLen("", "wat", "empty string allowed as key", 1)

	storage.setItem("um", "yo") //Add items
	quickTestGetLen("um", "yo", "moar keys can be added", 2)

	storage.clear() //Clear items
	quickTestGetLen("um", null, "clearing removes items", 0)

	t.end()
})